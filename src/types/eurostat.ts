/**
 * Euro Housing Data - TypeScript Type Definitions
 */

export interface JsonStatDimensionCategory {
  index?: Record<string, number> | string[];
  label?: Record<string, string>;
}

export interface JsonStatDimension {
  label: string;
  category: JsonStatDimensionCategory;
}

export interface JsonStatDataset {
  version: string;
  class: string;
  label: string;
  source: string;
  updated: string;
  id: string[];
  size: number[];
  dimension: Record<string, JsonStatDimension>;
  value: Record<string, number | null> | (number | null)[];
  status?: Record<string, string>;
  extension?: Record<string, unknown>;
}

export type DwellingType = 'TOTAL' | 'DW_NEW' | 'DW_EXST';

export type IndexBase = 'I15' | '2010' | 'START';

export type IndicatorMode =
  | 'hpi_nominal'
  | 'hicp'
  | 'hpi_vs_hicp'
  | 'real_hpi'
  | 'dwellings';

export interface CountryInfo {
  code: string;
  eurostatCode: string;
  nameEn: string;
  nameFr: string;
  flag: string;
  isEU: boolean;
  isEuroArea: boolean;
}

/**
 * Normalized quarterly observation for a single country
 */
export interface QuarterlyObservation {
  geo: string;
  period: string; // e.g. "2010-Q1"
  year: number;
  quarter: number;
  hpi: {
    total: number | null;
    new: number | null;
    existing: number | null;
    qoq: number | null;
    yoy: number | null;
  };
  hicp: number | null; // quarterly average of 3 months
  hicpYoy: number | null;
  realHpi: number | null; // (HPI_total / HICP) * 100 on matching base
  source: 'api' | 'cache' | 'snapshot';
}

/**
 * Rebased observation for custom base calculations (e.g. 2010=100 or start=100)
 */
export interface RebasedObservation extends QuarterlyObservation {
  hpiRebased: {
    total: number | null;
    new: number | null;
    existing: number | null;
  };
  hicpRebased: number | null;
  realHpiRebased: number | null;
  cumulativeGrowth: {
    hpi: number | null;
    hicp: number | null;
    realHpi: number | null;
    newHpi: number | null;
    existingHpi: number | null;
  };
}

export interface CountrySeriesData {
  geo: string;
  country: CountryInfo;
  observations: QuarterlyObservation[];
  lastUpdated: string;
  isLive: boolean;
}

export interface SummaryKPIs {
  latestPeriod: string;
  latestHpi: number | null;
  latestHicp: number | null;
  latestRealHpi: number | null;
  totalHpiGrowth: number | null; // growth over selected period
  totalHicpGrowth: number | null;
  totalRealHpiGrowth: number | null;
  latestQoQ: number | null;
  latestYoY: number | null;
  latestHicpYoY: number | null;
  newVsExistingDiff: number | null;
}
