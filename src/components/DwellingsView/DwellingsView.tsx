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
import { RebasedObservation, CountryInfo, IndexBase } from '../../types/eurostat';
import { Home, Layers, Sparkles, AlertCircle } from 'lucide-react';

interface DwellingsViewProps {
  observations: RebasedObservation[];
  country: CountryInfo;
  indexBase: IndexBase;
}

export const DwellingsView: React.FC<DwellingsViewProps> = ({
  observations,
  country,
  indexBase,
}) => {
  const [hiddenSeries, setHiddenSeries] = useState<Record<string, boolean>>({});

  const toggleSeries = (key: string) => {
    setHiddenSeries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const chartData = observations.map((o) => ({
    period: o.period,
    total: o.hpiRebased.total,
    new: o.hpiRebased.new,
    existing: o.hpiRebased.existing,
    spread:
      o.hpiRebased.new !== null && o.hpiRebased.existing !== null
        ? Math.round((o.hpiRebased.new - o.hpiRebased.existing) * 100) / 100
        : null,
  }));

  const latest = observations[observations.length - 1];
  const first = observations[0];

  const totalGrowth =
    latest?.hpi.total && first?.hpi.total
      ? Math.round((((latest.hpi.total - first.hpi.total) / first.hpi.total) * 100) * 10) / 10
      : null;

  const newGrowth =
    latest?.hpi.new && first?.hpi.new
      ? Math.round((((latest.hpi.new - first.hpi.new) / first.hpi.new) * 100) * 10) / 10
      : null;

  const exstGrowth =
    latest?.hpi.existing && first?.hpi.existing
      ? Math.round((((latest.hpi.existing - first.hpi.existing) / first.hpi.existing) * 100) * 10) / 10
      : null;

  const hasNewData = observations.some((o) => o.hpi.new !== null);
  const hasExstData = observations.some((o) => o.hpi.existing !== null);

  return (
    <div className="space-y-6">
      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Ensemble (Total)
            </span>
            <Layers className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
            {latest?.hpiRebased.total?.toFixed(1) ?? '—'}
          </div>
          <div className="text-xs text-slate-500">
            Évolution période :{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {totalGrowth !== null ? `+${totalGrowth}%` : '—'}
            </span>
          </div>
        </div>

        {/* New Dwellings */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Logements Neufs
            </span>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
            {latest?.hpiRebased.new?.toFixed(1) ?? '—'}
          </div>
          <div className="text-xs text-slate-500">
            Évolution période :{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {newGrowth !== null ? `+${newGrowth}%` : '—'}
            </span>
          </div>
        </div>

        {/* Existing Dwellings */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Logements Existants
            </span>
            <Home className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
            {latest?.hpiRebased.existing?.toFixed(1) ?? '—'}
          </div>
          <div className="text-xs text-slate-500">
            Évolution période :{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              {exstGrowth !== null ? `+${exstGrowth}%` : '—'}
            </span>
          </div>
        </div>
      </div>

      {!hasNewData && !hasExstData && (
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center gap-3 text-amber-800 dark:text-amber-200 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>
            Eurostat ne diffuse pas la ventilation neuf / existant pour ce pays ou cette période. Seul l'indice Total est affiché.
          </span>
        </div>
      )}

      {/* Main Dwellings Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{country.flag}</span>
              <span>Comparaison Logements Neufs vs Logements Existants</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Dataset Eurostat prc_hpi_q (DW_NEW vs DW_EXST) • Base{' '}
              {indexBase === 'I15' ? '2015 = 100' : 'Rebasé'}
            </p>
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
                onClick={(e) => toggleSeries(String(e.dataKey))}
                wrapperStyle={{ fontSize: '12px', cursor: 'pointer', paddingBottom: '10px' }}
              />
              <ReferenceLine y={100} stroke="#64748b" strokeDasharray="4 4" />

              <Line
                type="monotone"
                dataKey="total"
                name="Total Logements"
                stroke="#2563eb"
                strokeWidth={2.5}
                dot={false}
                hide={hiddenSeries['total']}
              />
              <Line
                type="monotone"
                dataKey="new"
                name="Logements Neufs (DW_NEW)"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={false}
                hide={hiddenSeries['new']}
              />
              <Line
                type="monotone"
                dataKey="existing"
                name="Logements Existants (DW_EXST)"
                stroke="#06b6d4"
                strokeWidth={2.5}
                strokeDasharray="4 4"
                dot={false}
                hide={hiddenSeries['existing']}
              />

              <Brush
                dataKey="period"
                height={24}
                stroke="#8b5cf6"
                fill="rgba(139, 92, 246, 0.08)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
          <strong>Note structurelle :</strong> Les logements neufs réagissent fortement au coût des matériaux de construction, aux normes énergétiques et au foncier, tandis que les logements existants reflètent directement le volume des transactions immobilières et la capacité d'emprunt des ménages.
        </div>
      </div>
    </div>
  );
};
