import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  QuarterlyObservation,
  RebasedObservation,
  IndexBase,
  DwellingType,
  IndicatorMode,
  SummaryKPIs,
} from '../types/eurostat';
import { getCountryInfo } from '../data/countries';
import { eurostatService, FetchResult } from '../services/eurostatApi';
import { rebaseObservations, computeSummaryKPIs } from '../services/calculations';

export function useEurostatData() {
  const [primaryCountry, setPrimaryCountry] = useState<string>('FR');
  const [comparisonCountries, setComparisonCountries] = useState<string[]>([
    'FR',
    'DE',
    'ES',
    'IT',
  ]);
  const [startQuarter, setStartQuarter] = useState<string>('2010-Q1');
  const [endQuarter, setEndQuarter] = useState<string>('2025-Q3');
  const [indexBase, setIndexBase] = useState<IndexBase>('I15');
  const [dwellingType, setDwellingType] = useState<DwellingType>('TOTAL');
  const [indicatorMode, setIndicatorMode] = useState<IndicatorMode>('hpi_vs_hicp');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [dataSource, setDataSource] = useState<'api' | 'cache' | 'snapshot'>('snapshot');
  const [countryCache, setCountryCache] = useState<Record<string, QuarterlyObservation[]>>({});
  const [error, setError] = useState<string | null>(null);

  // Load primary country data
  const loadCountry = useCallback(async (geo: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res: FetchResult = await eurostatService.fetchCountryData(geo, '2010-Q1');
      setCountryCache((prev) => ({
        ...prev,
        [geo]: res.observations,
      }));
      setDataSource(res.source);
      setLastUpdated(res.lastUpdated);
    } catch (err) {
      console.error('Error fetching country data:', err);
      setError('Impossible de charger les données Eurostat pour le pays sélectionné.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Preload comparison countries
  const loadComparison = useCallback(async (geos: string[]) => {
    try {
      const results = await eurostatService.fetchMultipleCountries(geos, '2010-Q1');
      setCountryCache((prev) => {
        const next = { ...prev };
        for (const [g, res] of Object.entries(results)) {
          if (res.observations.length > 0) {
            next[g] = res.observations;
          }
        }
        return next;
      });
    } catch (err) {
      console.warn('Error preloading comparison countries:', err);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadCountry(primaryCountry);
    loadComparison(comparisonCountries);
  }, [primaryCountry, loadCountry, comparisonCountries, loadComparison]);

  // All available quarters across datasets
  const allAvailableQuarters = useMemo(() => {
    const primaryObs = countryCache[primaryCountry] || [];
    if (primaryObs.length > 0) {
      return primaryObs.map((o) => o.period);
    }
    // Fallback standard list
    const quarters: string[] = [];
    for (let y = 2010; y <= 2026; y++) {
      for (let q = 1; q <= 4; q++) {
        quarters.push(`${y}-Q${q}`);
      }
    }
    return quarters;
  }, [countryCache, primaryCountry]);

  // Filtered raw observations for primary country
  const rawObservations = useMemo(() => {
    const list = countryCache[primaryCountry] || [];
    return list.filter((obs) => {
      return obs.period >= startQuarter && obs.period <= endQuarter;
    });
  }, [countryCache, primaryCountry, startQuarter, endQuarter]);

  // Rebased observations for primary country
  const rebasedObservations = useMemo<RebasedObservation[]>(() => {
    return rebaseObservations(rawObservations, indexBase);
  }, [rawObservations, indexBase]);

  // Summary KPIs for primary country
  const summaryKPIs = useMemo<SummaryKPIs>(() => {
    return computeSummaryKPIs(rebasedObservations);
  }, [rebasedObservations]);

  // Comparison series rebased
  const comparisonSeries = useMemo(() => {
    const result: Record<string, RebasedObservation[]> = {};
    for (const geo of comparisonCountries) {
      const raw = (countryCache[geo] || []).filter(
        (obs) => obs.period >= startQuarter && obs.period <= endQuarter
      );
      result[geo] = rebaseObservations(raw, indexBase);
    }
    return result;
  }, [comparisonCountries, countryCache, startQuarter, endQuarter, indexBase]);

  const refreshData = useCallback(() => {
    loadCountry(primaryCountry);
    loadComparison(comparisonCountries);
  }, [loadCountry, primaryCountry, loadComparison, comparisonCountries]);

  return {
    primaryCountry,
    setPrimaryCountry,
    primaryCountryInfo: getCountryInfo(primaryCountry),
    comparisonCountries,
    setComparisonCountries,
    startQuarter,
    setStartQuarter,
    endQuarter,
    setEndQuarter,
    indexBase,
    setIndexBase,
    dwellingType,
    setDwellingType,
    indicatorMode,
    setIndicatorMode,
    allAvailableQuarters,
    rawObservations,
    rebasedObservations,
    summaryKPIs,
    comparisonSeries,
    countryCache,
    isLoading,
    lastUpdated,
    dataSource,
    error,
    refreshData,
  };
}
