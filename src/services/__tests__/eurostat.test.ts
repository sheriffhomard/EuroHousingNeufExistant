import { describe, it, expect } from 'vitest';
import {
  calculateRealHpi,
  calculatePercentageGrowth,
  rebaseObservations,
} from '../calculations';
import {
  aggregateMonthlyToQuarterly,
  parseYearAndMonth,
  getQuarterFromMonth,
  formatQuarterPeriod,
} from '../aggregation';
import { JsonStatReader } from '../jsonstat';
import { JsonStatDataset, QuarterlyObservation } from '../../types/eurostat';

describe('Eurostat Calculations', () => {
  it('calculates Real HPI correctly when both series are on same base', () => {
    // Exact user example: HPI = 150, HICP = 120 => Real HPI = 125
    const realHpi = calculateRealHpi(150, 120);
    expect(realHpi).toBe(125);
  });

  it('handles edge cases (null, 0, undefined, NaN) gracefully for calculateRealHpi', () => {
    expect(calculateRealHpi(null, 120)).toBeNull();
    expect(calculateRealHpi(150, null)).toBeNull();
    expect(calculateRealHpi(undefined, 120)).toBeNull();
    expect(calculateRealHpi(150, undefined)).toBeNull();
    expect(calculateRealHpi(NaN, 120)).toBeNull();
    expect(calculateRealHpi(150, NaN)).toBeNull();
    expect(calculateRealHpi(150, 0)).toBeNull(); // Division by zero protection
    expect(calculateRealHpi(150, -50)).toBeNull(); // Negative index protection
  });

  it('calculates percentage growth correctly', () => {
    expect(calculatePercentageGrowth(120, 100)).toBe(20);
    expect(calculatePercentageGrowth(80, 100)).toBe(-20);
    expect(calculatePercentageGrowth(150, 125)).toBe(20);
  });

  it('handles edge cases in calculatePercentageGrowth', () => {
    expect(calculatePercentageGrowth(null, 100)).toBeNull();
    expect(calculatePercentageGrowth(100, null)).toBeNull();
    expect(calculatePercentageGrowth(undefined, 100)).toBeNull();
    expect(calculatePercentageGrowth(100, undefined)).toBeNull();
    expect(calculatePercentageGrowth(NaN, 100)).toBeNull();
    expect(calculatePercentageGrowth(100, 0)).toBeNull();
  });
});

describe('HICP Monthly Aggregation', () => {
  it('parses year and month from strings correctly', () => {
    expect(parseYearAndMonth('2024-01')).toEqual({ year: 2024, month: 1 });
    expect(parseYearAndMonth('2024M03')).toEqual({ year: 2024, month: 3 });
    expect(parseYearAndMonth('2024-12')).toEqual({ year: 2024, month: 12 });
    expect(parseYearAndMonth('invalid')).toBeNull();
  });

  it('determines quarter from month correctly', () => {
    expect(getQuarterFromMonth(1)).toBe(1);
    expect(getQuarterFromMonth(2)).toBe(1);
    expect(getQuarterFromMonth(3)).toBe(1);
    expect(getQuarterFromMonth(4)).toBe(2);
    expect(getQuarterFromMonth(6)).toBe(2);
    expect(getQuarterFromMonth(7)).toBe(3);
    expect(getQuarterFromMonth(9)).toBe(3);
    expect(getQuarterFromMonth(10)).toBe(4);
    expect(getQuarterFromMonth(12)).toBe(4);
  });

  it('formats quarter period string', () => {
    expect(formatQuarterPeriod(2024, 1)).toBe('2024-Q1');
    expect(formatQuarterPeriod(2025, 3)).toBe('2025-Q3');
  });

  it('aggregates 3 monthly values into arithmetic mean of quarter', () => {
    const monthlyData = {
      '2024-01': 120,
      '2024-02': 123,
      '2024-03': 126,
      '2024-04': 130,
    };
    const quarterly = aggregateMonthlyToQuarterly(monthlyData);
    // (120 + 123 + 126) / 3 = 123
    expect(quarterly['2024-Q1']).toBe(123);
    expect(quarterly['2024-Q2']).toBe(130);
  });
});

describe('JSON-stat 2.0 Reader', () => {
  const mockDataset: JsonStatDataset = {
    version: '2.0',
    class: 'dataset',
    label: 'Test Dataset',
    source: 'ESTAT',
    updated: '2025-01-01',
    id: ['geo', 'time'],
    size: [2, 2],
    dimension: {
      geo: {
        label: 'Country',
        category: {
          index: { FR: 0, DE: 1 },
          label: { FR: 'France', DE: 'Germany' },
        },
      },
      time: {
        label: 'Period',
        category: {
          index: { '2024-Q1': 0, '2024-Q2': 1 },
          label: { '2024-Q1': '2024 Q1', '2024-Q2': '2024 Q2' },
        },
      },
    },
    value: {
      '0': 110.5, // FR, 2024-Q1
      '1': 112.0, // FR, 2024-Q2
      '2': 130.2, // DE, 2024-Q1
      '3': 131.8, // DE, 2024-Q2
    },
  };

  it('computes strides and extracts coordinate values correctly', () => {
    const reader = new JsonStatReader(mockDataset);
    expect(reader.getValue({ geo: 'FR', time: '2024-Q1' })).toBe(110.5);
    expect(reader.getValue({ geo: 'FR', time: '2024-Q2' })).toBe(112.0);
    expect(reader.getValue({ geo: 'DE', time: '2024-Q1' })).toBe(130.2);
    expect(reader.getValue({ geo: 'DE', time: '2024-Q2' })).toBe(131.8);
  });

  it('returns null for missing coordinates', () => {
    const reader = new JsonStatReader(mockDataset);
    expect(reader.getValue({ geo: 'IT', time: '2024-Q1' })).toBeNull();
    expect(reader.getValue({ geo: 'FR', time: '1999-Q1' })).toBeNull();
  });

  it('extracts entire time series for a fixed geo', () => {
    const reader = new JsonStatReader(mockDataset);
    const series = reader.getTimeSeries({ geo: 'FR' });
    expect(series).toEqual({
      '2024-Q1': 110.5,
      '2024-Q2': 112.0,
    });
  });
});

describe('Rebasification', () => {
  const sampleObs: QuarterlyObservation[] = [
    {
      geo: 'FR',
      period: '2010-Q1',
      year: 2010,
      quarter: 1,
      hpi: { total: 90, new: 92, existing: 89, qoq: null, yoy: null },
      hicp: 95,
      hicpYoy: null,
      realHpi: (90 / 95) * 100,
      source: 'api',
    },
    {
      geo: 'FR',
      period: '2010-Q2',
      year: 2010,
      quarter: 2,
      hpi: { total: 94.5, new: 96.6, existing: 93.45, qoq: 5.0, yoy: null },
      hicp: 96.9,
      hicpYoy: null,
      realHpi: (94.5 / 96.9) * 100,
      source: 'api',
    },
  ];

  it('rebases to 2010-Q1 = 100 correctly', () => {
    const rebased = rebaseObservations(sampleObs, '2010');
    expect(rebased[0].hpiRebased.total).toBe(100);
    // 94.5 / 90 * 100 = 105
    expect(rebased[1].hpiRebased.total).toBe(105);
    expect(rebased[0].hicpRebased).toBe(100);
    // 96.9 / 95 * 100 = 102
    expect(rebased[1].hicpRebased).toBe(102);
  });
});
