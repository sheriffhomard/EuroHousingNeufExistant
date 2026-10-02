/**
 * Monthly to Quarterly Aggregation Service
 *
 * Implements statistical quarter-aggregation for HICP (Harmonised Index of Consumer Prices).
 * In accordance with European statistical standards, the quarterly consumer price index
 * is calculated as the unweighted arithmetic mean of the monthly indices:
 *
 * Q1 = mean(January, February, March)
 * Q2 = mean(April, May, June)
 * Q3 = mean(July, August, September)
 * Q4 = mean(October, November, December)
 */

export interface MonthlyObservation {
  period: string; // "2024-01" or "2024M01"
  value: number;
}

export function parseYearAndMonth(periodStr: string): { year: number; month: number } | null {
  // Support "2024-01", "2024M01", "2024-M01"
  const m = periodStr.match(/^(\d{4})[-M]?(\d{2})$/);
  if (!m) return null;
  const year = parseInt(m[1], 10);
  const month = parseInt(m[2], 10);
  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) return null;
  return { year, month };
}

export function getQuarterFromMonth(month: number): number {
  return Math.floor((month - 1) / 3) + 1;
}

export function formatQuarterPeriod(year: number, quarter: number): string {
  return `${year}-Q${quarter}`;
}

/**
 * Aggregates a map of monthly observations { "2024-01": 124.5, "2024-02": 125.1, ... }
 * into quarterly averages { "2024-Q1": 124.8, ... }
 */
export function aggregateMonthlyToQuarterly(
  monthlyData: Record<string, number | null>
): Record<string, number | null> {
  const buckets: Record<string, number[]> = {};

  for (const [periodStr, val] of Object.entries(monthlyData)) {
    if (val === null || val === undefined || isNaN(val)) continue;

    const parsed = parseYearAndMonth(periodStr);
    if (!parsed) continue;

    const quarter = getQuarterFromMonth(parsed.month);
    const qKey = formatQuarterPeriod(parsed.year, quarter);

    if (!buckets[qKey]) {
      buckets[qKey] = [];
    }
    buckets[qKey].push(val);
  }

  const result: Record<string, number | null> = {};

  // For each quarter, calculate average if at least 1 month is available
  for (const [qKey, values] of Object.entries(buckets)) {
    if (values.length === 0) {
      result[qKey] = null;
    } else {
      const sum = values.reduce((acc, v) => acc + v, 0);
      const avg = sum / values.length;
      result[qKey] = Math.round(avg * 100) / 100; // 2 decimal precision
    }
  }

  return result;
}
