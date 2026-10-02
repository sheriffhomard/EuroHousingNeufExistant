import React from 'react';
import { SummaryKPIs, CountryInfo, IndexBase } from '../../types/eurostat';
import { TrendingUp, TrendingDown, Percent, Sparkles, Home } from 'lucide-react';
import { ContextualTooltip } from '../Common/ContextualTooltip';

interface KpiGridProps {
  kpis: SummaryKPIs;
  country: CountryInfo;
  indexBase: IndexBase;
  startPeriod: string;
}

export const KpiGrid: React.FC<KpiGridProps> = ({
  kpis,
  country,
  indexBase,
  startPeriod,
}) => {
  const formatPercent = (val: number | null | undefined, showSign = true) => {
    if (val === null || val === undefined || isNaN(val)) return '—';
    const sign = showSign && val > 0 ? '+' : '';
    return `${sign}${val.toFixed(1)}%`;
  };

  const formatIndex = (val: number | null | undefined) => {
    if (val === null || val === undefined || isNaN(val)) return '—';
    return val.toFixed(1);
  };

  const getBaseLabel = () => {
    if (indexBase === 'I15') return 'Base 2015 = 100';
    if (indexBase === '2010') return 'Base 2010-Q1 = 100';
    return `Base ${startPeriod} = 100`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Nominal House Price Index */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Prix Immobiliers (HPI)
            </span>
            <ContextualTooltip
              title="Indice des Prix des Logements"
              content="Mesure l'évolution globale des prix d'achat des logements résidentiels neufs et anciens acquis par les ménages."
              source="Eurostat prc_hpi_q"
            />
          </div>
          <span className="text-base" title={country.nameFr}>{country.flag}</span>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {formatIndex(kpis.latestHpi)}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {kpis.latestPeriod}
          </span>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Période : </span>
            <span
              className={`font-semibold ${
                (kpis.totalHpiGrowth ?? 0) >= 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {formatPercent(kpis.totalHpiGrowth)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">YoY:</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {formatPercent(kpis.latestYoY)}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Inflation HICP */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Inflation Conso (HICP)
            </span>
            <ContextualTooltip
              title="Indice Harmonisé des Prix Conso"
              content="Indice d'inflation officiel calculé comme la moyenne trimestrielle des 3 mois civils pour l'ensemble des biens et services."
              source="Eurostat prc_hicp_midx"
              formula="HICP_trimestre = (M1 + M2 + M3) / 3"
            />
          </div>
          <Percent className="w-4 h-4 text-amber-500" />
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {formatIndex(kpis.latestHicp)}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {kpis.latestPeriod}
          </span>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Inflation : </span>
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {formatPercent(kpis.totalHicpGrowth)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">YoY:</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {formatPercent(kpis.latestHicpYoY)}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Real HPI (Inflation-Adjusted) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              HPI Réel (Corrigé Inflation)
            </span>
            <ContextualTooltip
              title="Prix Immobiliers Réels"
              content="Évolution du pouvoir d'achat patrimonial net déduction faite de l'inflation générale des biens de consommation."
              formula="Real HPI = (HPI / HICP) × 100"
            />
          </div>
          <Sparkles className="w-4 h-4 text-emerald-500" />
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {formatIndex(kpis.latestRealHpi)}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {getBaseLabel()}
          </span>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Gain réel : </span>
            <span
              className={`font-semibold ${
                (kpis.totalRealHpiGrowth ?? 0) >= 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {formatPercent(kpis.totalRealHpiGrowth)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            {(kpis.totalRealHpiGrowth ?? 0) >= 0 ? (
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
            )}
            <span>
              {(kpis.totalRealHpiGrowth ?? 0) >= 0 ? 'Surperformance' : 'Sous-performance'}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Logements Neuf vs Existant spread */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-xs relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Écart Neuf vs Existant
            </span>
            <ContextualTooltip
              title="Divergence Typologique"
              content="Écart de croissance entre le segment de la promotion neuve (DW_NEW) et les transactions sur le parc existant (DW_EXST)."
              formula="Écart = Croissance(Neuf) - Croissance(Existant)"
            />
          </div>
          <Home className="w-4 h-4 text-purple-500" />
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {formatPercent(kpis.newVsExistingDiff)}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            sur la période
          </span>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Divergence : </span>
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {(kpis.newVsExistingDiff ?? 0) > 0 ? 'Neuf plus dynamique' : 'Existant plus dynamique'}
            </span>
          </div>
          <div className="text-[11px] text-slate-400">
            QoQ: {formatPercent(kpis.latestQoQ)}
          </div>
        </div>
      </div>
    </div>
  );
};
