import {
  QuarterlyObservation,
  RebasedObservation,
  IndexBase,
  SummaryKPIs,
} from '../types/eurostat';

/**
 * Calculates Real HPI (House Price Index adjusted for consumer-price inflation)
 *
 * Formula:
 * When both HPI and HICP share the same index base year (e.g. 2015 = 100):
 * Real HPI = (Nominal HPI / HICP) * 100
 *
 * If either value is missing, <= 0, or invalid, returns null.
 */
export function calculateRealHpi(
  hpi: number | null | undefined,
  hicp: number | null | undefined
): number | null {
  if (
    hpi === null ||
    hpi === undefined ||
    isNaN(hpi) ||
    hicp === null ||
    hicp === undefined ||
    isNaN(hicp) ||
    hicp <= 0
  ) {
    return null;
  }
  return Math.round(((hpi / hicp) * 100) * 100) / 100;
}

/**
 * Calculates percentage growth between two points:
 * Growth = ((current - base) / base) * 100
 */
export function calculatePercentageGrowth(
  current: number | null | undefined,
  base: number | null | undefined
): number | null {
  if (
    current === null ||
    current === undefined ||
    isNaN(current) ||
    base === null ||
    base === undefined ||
    isNaN(base) ||
    base === 0
  ) {
    return null;
  }
  return Math.round((((current - base) / base) * 100) * 100) / 100;
}

/**
 * Rebase a set of observations based on user preference:
 * - 'I15': Keep Eurostat default base 2015 = 100
 * - '2010': Rebase to 2010-Q1 = 100
 * - 'START': Rebase to the first observation of the filtered period = 100
 */
export function rebaseObservations(
  observations: QuarterlyObservation[],
  baseType: IndexBase,
  customBasePeriod?: string
): RebasedObservation[] {
  if (observations.length === 0) return [];

  // Determine reference observation for base calculation
  let baseObs: QuarterlyObservation | undefined;

  if (baseType === '2010') {
    baseObs = observations.find((o) => o.period === '2010-Q1') || observations[0];
  } else if (baseType === 'START') {
    baseObs = observations[0];
  } else if (customBasePeriod) {
    baseObs = observations.find((o) => o.period === customBasePeriod) || observations[0];
  }

  const baseHpiTotal = baseObs?.hpi.total;
  const baseHpiNew = baseObs?.hpi.new;
  const baseHpiExst = baseObs?.hpi.existing;
  const baseHicp = baseObs?.hicp;
  const baseRealHpi = baseObs?.realHpi;

  return observations.map((obs) => {
    let hpiTotalRebased: number | null = obs.hpi.total;
    let hpiNewRebased: number | null = obs.hpi.new;
    let hpiExstRebased: number | null = obs.hpi.existing;
    let hicpRebased: number | null = obs.hicp;

    if (baseType !== 'I15') {
      if (baseHpiTotal && obs.hpi.total !== null) {
        hpiTotalRebased = Math.round(((obs.hpi.total / baseHpiTotal) * 100) * 100) / 100;
      } else {
        hpiTotalRebased = null;
      }

      if (baseHpiNew && obs.hpi.new !== null) {
        hpiNewRebased = Math.round(((obs.hpi.new / baseHpiNew) * 100) * 100) / 100;
      } else {
        hpiNewRebased = null;
      }

      if (baseHpiExst && obs.hpi.existing !== null) {
        hpiExstRebased = Math.round(((obs.hpi.existing / baseHpiExst) * 100) * 100) / 100;
      } else {
        hpiExstRebased = null;
      }

      if (baseHicp && obs.hicp !== null) {
        hicpRebased = Math.round(((obs.hicp / baseHicp) * 100) * 100) / 100;
      } else {
        hicpRebased = null;
      }
    }

    const realHpiRebased = calculateRealHpi(hpiTotalRebased, hicpRebased);

    // Cumulative growth from baseline
    const refHpi = baseType === 'I15' ? observations[0].hpi.total : baseHpiTotal;
    const refHicp = baseType === 'I15' ? observations[0].hicp : baseHicp;
    const refRealHpi = baseType === 'I15' ? observations[0].realHpi : baseRealHpi;
    const refNew = baseType === 'I15' ? observations[0].hpi.new : baseHpiNew;
    const refExst = baseType === 'I15' ? observations[0].hpi.existing : baseHpiExst;

    return {
      ...obs,
      hpiRebased: {
        total: hpiTotalRebased,
        new: hpiNewRebased,
        existing: hpiExstRebased,
      },
      hicpRebased,
      realHpiRebased,
      cumulativeGrowth: {
        hpi: calculatePercentageGrowth(obs.hpi.total, refHpi),
        hicp: calculatePercentageGrowth(obs.hicp, refHicp),
        realHpi: calculatePercentageGrowth(obs.realHpi, refRealHpi),
        newHpi: calculatePercentageGrowth(obs.hpi.new, refNew),
        existingHpi: calculatePercentageGrowth(obs.hpi.existing, refExst),
      },
    };
  });
}

/**
 * Computes high-level summary KPIs for a country and time range
 */
export function computeSummaryKPIs(
  rebasedObs: RebasedObservation[]
): SummaryKPIs {
  if (rebasedObs.length === 0) {
    return {
      latestPeriod: '—',
      latestHpi: null,
      latestHicp: null,
      latestRealHpi: null,
      totalHpiGrowth: null,
      totalHicpGrowth: null,
      totalRealHpiGrowth: null,
      latestQoQ: null,
      latestYoY: null,
      latestHicpYoY: null,
      newVsExistingDiff: null,
    };
  }

  const latest = rebasedObs[rebasedObs.length - 1];
  const first = rebasedObs[0];

  const totalHpiGrowth = calculatePercentageGrowth(latest.hpi.total, first.hpi.total);
  const totalHicpGrowth = calculatePercentageGrowth(latest.hicp, first.hicp);
  const totalRealHpiGrowth = calculatePercentageGrowth(latest.realHpi, first.realHpi);

  // New vs existing growth divergence
  const newGrowth = calculatePercentageGrowth(latest.hpi.new, first.hpi.new);
  const exstGrowth = calculatePercentageGrowth(latest.hpi.existing, first.hpi.existing);
  const newVsExistingDiff =
    newGrowth !== null && exstGrowth !== null
      ? Math.round((newGrowth - exstGrowth) * 100) / 100
      : null;

  return {
    latestPeriod: latest.period,
    latestHpi: latest.hpiRebased.total,
    latestHicp: latest.hicpRebased,
    latestRealHpi: latest.realHpiRebased,
    totalHpiGrowth,
    totalHicpGrowth,
    totalRealHpiGrowth,
    latestQoQ: latest.hpi.qoq,
    latestYoY: latest.hpi.yoy,
    latestHicpYoY: latest.hicpYoy,
    newVsExistingDiff,
  };
}

/**
 * Calculates YoY change for an observation based on 4 quarters earlier
 */
export function enrichWithYoYandQoQ(observations: QuarterlyObservation[]): void {
  // Sort chronological
  observations.sort((a, b) => a.period.localeCompare(b.period));

  for (let i = 0; i < observations.length; i++) {
    const cur = observations[i];

    // QoQ
    if (i > 0 && cur.hpi.qoq === null) {
      const prev = observations[i - 1];
      cur.hpi.qoq = calculatePercentageGrowth(cur.hpi.total, prev.hpi.total);
    }

    // YoY
    if (i >= 4) {
      const yearAgo = observations[i - 4];
      if (cur.hpi.yoy === null) {
        cur.hpi.yoy = calculatePercentageGrowth(cur.hpi.total, yearAgo.hpi.total);
      }
      if (cur.hicpYoy === null) {
        cur.hicpYoy = calculatePercentageGrowth(cur.hicp, yearAgo.hicp);
      }
    }
  }
}
