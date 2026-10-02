import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Brush,
} from 'recharts';
import { RebasedObservation, IndexBase } from '../../types/eurostat';
import { COUNTRIES, getCountryInfo } from '../../data/countries';
import { GitCompare, Plus, Check } from 'lucide-react';

interface CountryComparisonViewProps {
  comparisonSeries: Record<string, RebasedObservation[]>;
  comparisonCountries: string[];
  onToggleCountry: (geo: string) => void;
  indexBase: IndexBase;
  startQuarter: string;
  endQuarter: string;
}

const COUNTRY_COLORS: Record<string, string> = {
  FR: '#2563eb', // Blue
  DE: '#dc2626', // Red
  ES: '#f59e0b', // Amber
  IT: '#10b981', // Emerald
  BE: '#8b5cf6', // Purple
  NL: '#f97316', // Orange
  PT: '#06b6d4', // Cyan
  AT: '#ec4899', // Pink
  IE: '#14b8a6', // Teal
  EU27_2020: '#64748b', // Slate
  EA20: '#475569',
};

const DEFAULT_COLOR = '#6b7280';

export const CountryComparisonView: React.FC<CountryComparisonViewProps> = ({
  comparisonSeries,
  comparisonCountries,
  onToggleCountry,
  indexBase,
  startQuarter,
  endQuarter,
}) => {
  const [metric, setMetric] = useState<'hpi' | 'realHpi' | 'growth'>('hpi');

  // Collect union of all periods
  const allPeriodsSet = new Set<string>();
  Object.values(comparisonSeries).forEach((series) => {
    series.forEach((obs) => allPeriodsSet.add(obs.period));
  });
  const sortedPeriods = Array.from(allPeriodsSet).sort();

  // Build merged chart data array
  const chartData = sortedPeriods.map((period) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const row: Record<string, any> = { period };

    for (const geo of comparisonCountries) {
      const series = comparisonSeries[geo] || [];
      const obs = series.find((o) => o.period === period);

      if (obs) {
        if (metric === 'hpi') {
          row[geo] = obs.hpiRebased.total;
        } else if (metric === 'realHpi') {
          row[geo] = obs.realHpiRebased;
        } else {
          row[geo] = obs.cumulativeGrowth.hpi;
        }
      } else {
        row[geo] = null;
      }
    }
    return row;
  });

  // Build summary stats table per country
  const tableRows = comparisonCountries.map((geo) => {
    const series = comparisonSeries[geo] || [];
    const info = getCountryInfo(geo);
    const latest = series.length > 0 ? series[series.length - 1] : null;
    const first = series.length > 0 ? series[0] : null;

    const hpiGrowth =
      latest?.hpi.total && first?.hpi.total
        ? Math.round((((latest.hpi.total - first.hpi.total) / first.hpi.total) * 100) * 10) / 10
        : null;

    const hicpGrowth =
      latest?.hicp && first?.hicp
        ? Math.round((((latest.hicp - first.hicp) / first.hicp) * 100) * 10) / 10
        : null;

    const realGrowth =
      latest?.realHpi && first?.realHpi
        ? Math.round((((latest.realHpi - first.realHpi) / first.realHpi) * 100) * 10) / 10
        : null;

    return {
      geo,
      info,
      latestPeriod: latest?.period || '—',
      hpi: latest?.hpiRebased.total ?? null,
      hicp: latest?.hicpRebased ?? null,
      realHpi: latest?.realHpiRebased ?? null,
      yoy: latest?.hpi.yoy ?? null,
      hpiGrowth,
      hicpGrowth,
      realGrowth,
    };
  });

  return (
    <div className="space-y-6">
      {/* Country Selection Pill Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <GitCompare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Sélectionnez les pays à comparer :
            </span>
          </div>
          <span className="text-xs text-slate-500">
            {comparisonCountries.length} sélectionnés
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {COUNTRIES.slice(0, 16).map((c) => {
            const isSelected = comparisonCountries.includes(c.code);
            return (
              <button
                key={c.code}
                onClick={() => onToggleCountry(c.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.nameFr}</span>
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 ml-0.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5 ml-0.5 opacity-40" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Évolution comparative multi-pays
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Période {startQuarter} → {endQuarter} • Base{' '}
              {indexBase === 'I15' ? '2015 = 100' : indexBase === '2010' ? '2010-Q1 = 100' : 'Début = 100'}
            </p>
          </div>

          {/* Metric Selector */}
          <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            <button
              onClick={() => setMetric('hpi')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                metric === 'hpi'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              HPI Nominal
            </button>
            <button
              onClick={() => setMetric('realHpi')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                metric === 'realHpi'
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              HPI Réel (Inflation-Adjusted)
            </button>
            <button
              onClick={() => setMetric('growth')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                metric === 'growth'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Croissance cumulée (%)
            </button>
          </div>
        </div>

        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -10, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-800" />
              <XAxis dataKey="period" stroke="#94a3b8" fontSize={11} dy={10} />
              <YAxis stroke="#94a3b8" fontSize={11} dx={-5} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderColor: '#334155',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px',
                }}
              />
              <Legend
                verticalAlign="top"
                height={36}
                wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
              />
              {metric !== 'growth' && (
                <ReferenceLine y={100} stroke="#64748b" strokeDasharray="4 4" />
              )}
              {metric === 'growth' && (
                <ReferenceLine y={0} stroke="#64748b" strokeDasharray="4 4" />
              )}

              {comparisonCountries.map((geo) => {
                const info = getCountryInfo(geo);
                return (
                  <Line
                    key={geo}
                    type="monotone"
                    dataKey={geo}
                    name={`${info.flag} ${info.nameFr}`}
                    stroke={COUNTRY_COLORS[geo] || DEFAULT_COLOR}
                    strokeWidth={2.5}
                    dot={false}
                    connectNulls
                  />
                );
              })}

              <Brush
                dataKey="period"
                height={24}
                stroke="#3b82f6"
                fill="rgba(59, 130, 246, 0.08)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comparative Statistics Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs overflow-hidden">
        <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
          Synthèse statistique comparative
        </h4>
        <p className="text-xs text-slate-500 mb-4">
          Comparaison purement descriptive basée sur les données d'Eurostat (aucun classement de valeur).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase font-semibold">
              <tr>
                <th className="px-3.5 py-3 rounded-l-lg">Pays</th>
                <th className="px-3.5 py-3 text-right">HPI Dernier</th>
                <th className="px-3.5 py-3 text-right">Inflation HICP</th>
                <th className="px-3.5 py-3 text-right">HPI Réel</th>
                <th className="px-3.5 py-3 text-right">Croissance HPI</th>
                <th className="px-3.5 py-3 text-right">Inflation Période</th>
                <th className="px-3.5 py-3 text-right">Gain Immo Réel</th>
                <th className="px-3.5 py-3 text-right rounded-r-lg">YoY (1 an)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {tableRows.map((r) => (
                <tr key={r.geo} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-3.5 py-3 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-base">{r.info.flag}</span>
                    <span>{r.info.nameFr}</span>
                    <span className="text-[10px] text-slate-400">({r.geo})</span>
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono font-bold text-slate-800 dark:text-slate-200">
                    {r.hpi?.toFixed(1) ?? '—'}
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono text-slate-600 dark:text-slate-300">
                    {r.hicp?.toFixed(1) ?? '—'}
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {r.realHpi?.toFixed(1) ?? '—'}
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono font-medium">
                    <span className={(r.hpiGrowth ?? 0) >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}>
                      {r.hpiGrowth !== null ? `${r.hpiGrowth > 0 ? '+' : ''}${r.hpiGrowth}%` : '—'}
                    </span>
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono text-amber-600 dark:text-amber-400">
                    {r.hicpGrowth !== null ? `+${r.hicpGrowth}%` : '—'}
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono font-bold">
                    <span className={(r.realGrowth ?? 0) >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}>
                      {r.realGrowth !== null ? `${r.realGrowth > 0 ? '+' : ''}${r.realGrowth}%` : '—'}
                    </span>
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono text-slate-500">
                    {r.yoy !== null ? `${r.yoy > 0 ? '+' : ''}${r.yoy}%` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
