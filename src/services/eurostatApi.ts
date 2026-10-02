import {
  JsonStatDataset,
  QuarterlyObservation,
} from '../types/eurostat';
import { JsonStatReader } from './jsonstat';
import { aggregateMonthlyToQuarterly } from './aggregation';
import { calculateRealHpi, enrichWithYoYandQoQ } from './calculations';
import { cacheService } from './cache';
import { SNAPSHOT_OBSERVATIONS } from './snapshotData';

const BASE_URL = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';

export interface FetchResult {
  geo: string;
  observations: QuarterlyObservation[];
  source: 'api' | 'cache' | 'snapshot';
  lastUpdated: string;
  error?: string;
}

export class EurostatService {
  /**
   * Fetches full quarterly HPI and HICP series for a country since 2010-Q1
   */
  public async fetchCountryData(
    geo: string,
    sinceQuarter = '2010-Q1'
  ): Promise<FetchResult> {
    const cacheKey = `country_series_${geo}_${sinceQuarter}`;

    // 1. Check local cache first to ensure instant UI rendering
    const cached = await cacheService.get<QuarterlyObservation[]>(cacheKey);

    try {
      // 2. Fetch live data from Eurostat in parallel
      const hpiPromise = this.fetchJsonStat(
        `prc_hpi_q?geo=${geo}&unit=I15_Q&sinceTimePeriod=${sinceQuarter}`
      );
      const sinceMonth = sinceQuarter.replace('-Q1', '-01').replace('-Q2', '-04').replace('-Q3', '-07').replace('-Q4', '-10');
      const hicpPromise = this.fetchJsonStat(
        `prc_hicp_midx?geo=${geo}&unit=I15&coicop=CP00&sinceTimePeriod=${sinceMonth}`
      );

      const [hpiDataset, hicpDataset] = await Promise.all([hpiPromise, hicpPromise]);

      const observations = this.normalizeDatasets(geo, hpiDataset, hicpDataset);

      if (observations.length > 0) {
        // Cache the freshly normalized live observations
        await cacheService.set(cacheKey, observations, 'api');
        return {
          geo,
          observations,
          source: 'api',
          lastUpdated: hpiDataset.updated || new Date().toISOString(),
        };
      }
    } catch (err) {
      console.warn(`Eurostat live API fetch failed for ${geo}:`, err);
    }

    // 3. If live API failed, return cached data if available
    if (cached && cached.data && cached.data.length > 0) {
      return {
        geo,
        observations: cached.data,
        source: 'cache',
        lastUpdated: new Date(cached.timestamp).toISOString(),
      };
    }

    // 4. Fallback to pre-packaged authentic Eurostat snapshot
    if (SNAPSHOT_OBSERVATIONS[geo]) {
      const snap = SNAPSHOT_OBSERVATIONS[geo];
      return {
        geo,
        observations: snap,
        source: 'snapshot',
        lastUpdated: 'Official Eurostat Dataset Baseline (2025/2026)',
      };
    }

    // 5. If no data available
    return {
      geo,
      observations: [],
      source: 'cache',
      lastUpdated: new Date().toISOString(),
      error: `No observations found for ${geo}. Eurostat may not have data for this region.`,
    };
  }

  /**
   * Fetches multiple countries in parallel
   */
  public async fetchMultipleCountries(
    geos: string[],
    sinceQuarter = '2010-Q1'
  ): Promise<Record<string, FetchResult>> {
    const results = await Promise.all(
      geos.map((geo) => this.fetchCountryData(geo, sinceQuarter))
    );

    const map: Record<string, FetchResult> = {};
    for (const res of results) {
      map[res.geo] = res;
    }
    return map;
  }

  /**
   * Low-level fetch wrapper with timeout
   */
  private async fetchJsonStat(endpoint: string, timeoutMs = 8000): Promise<JsonStatDataset> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const resp = await fetch(`${BASE_URL}/${endpoint}`, {
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!resp.ok) {
        throw new Error(`Eurostat HTTP error ${resp.status}: ${resp.statusText}`);
      }

      const json = await resp.json();
      if (json.error) {
        throw new Error(`Eurostat API error: ${JSON.stringify(json.error)}`);
      }

      return json as JsonStatDataset;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Normalizes HPI and HICP datasets into unified quarterly observations
   */
  public normalizeDatasets(
    geo: string,
    hpiDataset: JsonStatDataset,
    hicpDataset: JsonStatDataset
  ): QuarterlyObservation[] {
    const hpiReader = new JsonStatReader(hpiDataset);
    const hicpReader = new JsonStatReader(hicpDataset);

    // Get time periods available in HPI
    const hpiTimeKeys = hpiReader.getDimensionKeys('time');

    // Extract monthly HICP series
    const hicpMonthlyRaw = hicpReader.getTimeSeries(
      {
        freq: 'M',
        unit: 'I15',
        coicop: 'CP00',
        geo,
      },
      'time'
    );

    // Aggregate monthly HICP into quarterly averages
    const hicpQuarterly = aggregateMonthlyToQuarterly(hicpMonthlyRaw);

    const observations: QuarterlyObservation[] = [];

    for (const t of hpiTimeKeys) {
      const match = t.match(/^(\d{4})-Q(\d)$/);
      if (!match) continue;

      const year = parseInt(match[1], 10);
      const quarter = parseInt(match[2], 10);

      // Total HPI
      const totalHpi = hpiReader.getValue({
        freq: 'Q',
        purchase: 'TOTAL',
        unit: 'I15_Q',
        geo,
        time: t,
      });

      // New dwellings HPI
      const newHpi = hpiReader.getValue({
        freq: 'Q',
        purchase: 'DW_NEW',
        unit: 'I15_Q',
        geo,
        time: t,
      });

      // Existing dwellings HPI
      const exstHpi = hpiReader.getValue({
        freq: 'Q',
        purchase: 'DW_EXST',
        unit: 'I15_Q',
        geo,
        time: t,
      });

      // Quarterly HICP
      const hicpVal = hicpQuarterly[t] ?? null;

      // Real HPI (inflation adjusted)
      const realHpi = calculateRealHpi(totalHpi, hicpVal);

      observations.push({
        geo,
        period: t,
        year,
        quarter,
        hpi: {
          total: totalHpi,
          new: newHpi,
          existing: exstHpi,
          qoq: null,
          yoy: null,
        },
        hicp: hicpVal,
        hicpYoy: null,
        realHpi,
        source: 'api',
      });
    }

    // Enrich with QoQ and YoY
    enrichWithYoYandQoQ(observations);

    return observations;
  }
}

export const eurostatService = new EurostatService();
