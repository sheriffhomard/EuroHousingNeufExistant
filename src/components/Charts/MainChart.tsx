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
import {
  RebasedObservation,
  IndicatorMode,
  CountryInfo,
  IndexBase,
  DwellingType,
} from '../../types/eurostat';
import { Download, Maximize2, Minimize2 } from 'lucide-react';

interface MainChartProps {
  data: RebasedObservation[];
  country: CountryInfo;
  indicatorMode: IndicatorMode;
  indexBase: IndexBase;
  dwellingType: DwellingType;
}

export const MainChart: React.FC<MainChartProps> = ({
  data,
  country,
  indicatorMode,
  indexBase,
  dwellingType,
}) => {
  const [hiddenSeries, setHiddenSeries] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleSeries = (key: string) => {
    setHiddenSeries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getDwellingKey = () => {
    if (dwellingType === 'DW_NEW') return 'new';
    if (dwellingType === 'DW_EXST') return 'existing';
    return 'total';
  };

  // Transform data for recharts
  const chartData = data.map((d) => {
    const dwellingKey = getDwellingKey();
    const hpiVal = d.hpiRebased[dwellingKey];

    return {
      period: d.period,
      year: d.year,
      quarter: d.quarter,
      // Values
      hpi: hpiVal,
      hicp: d.hicpRebased,
      realHpi: d.realHpiRebased,
      // For dwelling comparison view
      hpiTotal: d.hpiRebased.total,
      hpiNew: d.hpiRebased.new,
      hpiExst: d.hpiRebased.existing,
      // Metadata
      qoq: d.hpi.qoq,
      yoy: d.hpi.yoy,
      hicpYoy: d.hicpYoy,
    };
  });

  // Calculate dynamic domain to fit data nicely
  const allValues: number[] = [];
  chartData.forEach((d) => {
    if (indicatorMode === 'hpi_nominal' && d.hpi !== null) allValues.push(d.hpi);
    if (indicatorMode === 'hicp' && d.hicp !== null) allValues.push(d.hicp);
    if (indicatorMode === 'hpi_vs_hicp') {
      if (d.hpi !== null) allValues.push(d.hpi);
      if (d.hicp !== null) allValues.push(d.hicp);
    }
    if (indicatorMode === 'real_hpi' && d.realHpi !== null) allValues.push(d.realHpi);
    if (indicatorMode === 'dwellings') {
      if (d.hpiTotal !== null) allValues.push(d.hpiTotal);
      if (d.hpiNew !== null) allValues.push(d.hpiNew);
      if (d.hpiExst !== null) allValues.push(d.hpiExst);
    }
  });

  const minVal = allValues.length > 0 ? Math.floor(Math.min(...allValues) / 10) * 10 - 5 : 70;
  const maxVal = allValues.length > 0 ? Math.ceil(Math.max(...allValues) / 10) * 10 + 5 : 180;

  // Export CSV
  const handleExportCsv = () => {
    const headers = [
      'Période',
      'HPI_Nominal',
      'HICP_Inflation',
      'HPI_Réel',
      'HPI_Neuf',
      'HPI_Existant',
      'YoY_HPI',
      'QoQ_HPI',
    ];
    const rows = chartData.map((d) => [
      d.period,
      d.hpi ?? '',
      d.hicp ?? '',
      d.realHpi ?? '',
      d.hpiNew ?? '',
      d.hpiExst ?? '',
      d.yoy ?? '',
      d.qoq ?? '',
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `eurostat_${country.code}_hpi_hicp_${data[0]?.period}_${data[data.length - 1]?.period}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Custom rich tooltip
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    const row = chartData.find((d) => d.period === label);

    return (
      <div className="bg-slate-900/95 text-white p-3.5 rounded-xl shadow-xl border border-slate-700/80 backdrop-blur-md text-xs min-w-56 space-y-2">
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-1.5">
          <div className="flex items-center gap-1.5 font-bold text-sm">
            <span>{country.flag}</span>
            <span>{country.nameFr}</span>
          </div>
          <span className="font-mono text-slate-300 font-semibold bg-slate-800 px-1.5 py-0.5 rounded">
            {label}
          </span>
        </div>

        <div className="space-y-1.5">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {payload.map((entry: any) => (
            <div key={entry.dataKey} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span>{entry.name}</span>
              </span>
              <span className="font-mono font-bold text-white">
                {entry.value !== null && entry.value !== undefined
                  ? Number(entry.value).toFixed(2)
                  : '—'}
              </span>
            </div>
          ))}
        </div>

        {row && (
          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
            <div>
              <span>Variation YoY: </span>
              <span
                className={`font-semibold ${
                  (row.yoy ?? 0) >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {row.yoy !== null && row.yoy !== undefined
                  ? `${row.yoy > 0 ? '+' : ''}${row.yoy.toFixed(1)}%`
                  : '—'}
              </span>
            </div>
            <div>
              <span>Variation QoQ: </span>
              <span
                className={`font-semibold ${
                  (row.qoq ?? 0) >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {row.qoq !== null && row.qoq !== undefined
                  ? `${row.qoq > 0 ? '+' : ''}${row.qoq.toFixed(1)}%`
                  : '—'}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs flex flex-col transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 shadow-2xl' : ''
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>{country.flag}</span>
            <span>
              {indicatorMode === 'hpi_vs_hicp' && "Prix des Logements (HPI) vs Inflation (HICP)"}
              {indicatorMode === 'real_hpi' && "Indice HPI Réel — Corrigé de l'inflation"}
              {indicatorMode === 'hpi_nominal' && "Indice des Prix des Logements (HPI nominal)"}
              {indicatorMode === 'hicp' && "Indice Harmonisé des Prix à la Consommation (HICP)"}
              {indicatorMode === 'dwellings' && "Logements Neufs vs Logements Existants"}
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Série trimestrielle • Base {indexBase === 'I15' ? '2015 = 100' : indexBase === '2010' ? '2010-Q1 = 100' : 'Début = 100'} • Source Eurostat
          </p>
        </div>

        {/* Chart Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition cursor-pointer"
            title="Exporter les données du graphique au format CSV"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition cursor-pointer"
            title={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="flex-1 w-full min-h-[380px] sm:min-h-[440px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 25 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              className="dark:stroke-slate-800"
            />
            <XAxis
              dataKey="period"
              tickLine={false}
              stroke="#94a3b8"
              fontSize={11}
              interval="preserveStartEnd"
              dy={10}
            />
            <YAxis
              domain={[minVal, maxVal]}
              tickLine={false}
              stroke="#94a3b8"
              fontSize={11}
              dx={-5}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={36}
              onClick={(e) => toggleSeries(String(e.dataKey))}
              wrapperStyle={{ fontSize: '12px', cursor: 'pointer', paddingBottom: '10px' }}
            />
            <ReferenceLine
              y={100}
              stroke="#64748b"
              strokeDasharray="4 4"
              label={{
                value: 'Base 100',
                position: 'right',
                fill: '#94a3b8',
                fontSize: 10,
              }}
            />

            {/* Mode 1 & 3: HPI nominal */}
            {(indicatorMode === 'hpi_nominal' || indicatorMode === 'hpi_vs_hicp') && (
              <Line
                type="monotone"
                dataKey="hpi"
                name="Prix Logements (HPI)"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, stroke: '#1d4ed8', strokeWidth: 2 }}
                hide={hiddenSeries['hpi']}
              />
            )}

            {/* Mode 2 & 3: HICP Inflation */}
            {(indicatorMode === 'hicp' || indicatorMode === 'hpi_vs_hicp') && (
              <Line
                type="monotone"
                dataKey="hicp"
                name="Inflation Prix Conso (HICP)"
                stroke="#f59e0b"
                strokeWidth={2.5}
                strokeDasharray={indicatorMode === 'hpi_vs_hicp' ? '5 5' : undefined}
                dot={false}
                activeDot={{ r: 5, stroke: '#d97706', strokeWidth: 2 }}
                hide={hiddenSeries['hicp']}
              />
            )}

            {/* Mode 4: Real HPI (inflation adjusted) */}
            {indicatorMode === 'real_hpi' && (
              <Line
                type="monotone"
                dataKey="realHpi"
                name="HPI Réel (Pouvoir d'achat immo)"
                stroke="#10b981"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, stroke: '#059669', strokeWidth: 2 }}
                hide={hiddenSeries['realHpi']}
              />
            )}

            {/* Mode 5: Dwellings breakdown */}
            {indicatorMode === 'dwellings' && (
              <>
                <Line
                  type="monotone"
                  dataKey="hpiTotal"
                  name="Ensemble des logements"
                  stroke="#2563eb"
                  strokeWidth={2.5}
                  dot={false}
                  hide={hiddenSeries['hpiTotal']}
                />
                <Line
                  type="monotone"
                  dataKey="hpiNew"
                  name="Logements neufs"
                  stroke="#8b5cf6"
                  strokeWidth={2.5}
                  dot={false}
                  hide={hiddenSeries['hpiNew']}
                />
                <Line
                  type="monotone"
                  dataKey="hpiExst"
                  name="Logements existants"
                  stroke="#06b6d4"
                  strokeWidth={2.5}
                  strokeDasharray="4 4"
                  dot={false}
                  hide={hiddenSeries['hpiExst']}
                />
              </>
            )}

            {/* Brush for timeline zooming and panning */}
            <Brush
              dataKey="period"
              height={26}
              stroke="#3b82f6"
              fill="rgba(59, 130, 246, 0.08)"
              tickFormatter={(p) => p}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
        <span>Astuce : Utilisez la réglette inférieure pour zoomer ou déplacez le curseur pour voir les valeurs précises.</span>
        <span>Cliquez sur un élément de légende pour masquer/afficher la courbe.</span>
      </div>
    </div>
  );
};
