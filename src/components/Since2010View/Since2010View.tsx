import React, { useState } from 'react';
import { RebasedObservation } from '../../types/eurostat';
import { COUNTRIES, getCountryInfo } from '../../data/countries';
import { BarChart3, TrendingUp, Sparkles, ShoppingBag } from 'lucide-react';

interface Since2010ViewProps {
  countryCache: Record<string, RebasedObservation[]>;
  primaryCountry: string;
  onSelectCountry: (geo: string) => void;
}

export const Since2010View: React.FC<Since2010ViewProps> = ({
  countryCache,
  primaryCountry,
  onSelectCountry,
}) => {
  const [selectedGeos] = useState<string[]>([
    'FR',
    'DE',
    'ES',
    'IT',
    'PT',
    'NL',
    'BE',
    'AT',
    'IE',
    'EU27_2020',
  ]);

  // Compute 2010 -> latest growth for each country
  const countryCards = selectedGeos.map((geo) => {
    const info = getCountryInfo(geo);
    const obsList = countryCache[geo] || [];

    const base2010 =
      obsList.find((o) => o.period === '2010-Q1') ||
      obsList.find((o) => o.period.startsWith('2010')) ||
      obsList[0];

    const latest = obsList[obsList.length - 1];

    let hpiGrowth: number | null = null;
    let hicpGrowth: number | null = null;
    let realGrowth: number | null = null;

    if (base2010 && latest) {
      if (base2010.hpi.total && latest.hpi.total) {
        hpiGrowth =
          Math.round(
            (((latest.hpi.total - base2010.hpi.total) / base2010.hpi.total) * 100) * 10
          ) / 10;
      }
      if (base2010.hicp && latest.hicp) {
        hicpGrowth =
          Math.round((((latest.hicp - base2010.hicp) / base2010.hicp) * 100) * 10) / 10;
      }
      if (base2010.realHpi && latest.realHpi) {
        realGrowth =
          Math.round(
            (((latest.realHpi - base2010.realHpi) / base2010.realHpi) * 100) * 10
          ) / 10;
      }
    }

    return {
      geo,
      info,
      startPeriod: base2010?.period || '2010-Q1',
      latestPeriod: latest?.period || '—',
      hpiGrowth,
      hicpGrowth,
      realGrowth,
    };
  });

  // Maximum growth for scaling bar lengths (min 50% scale)
  const maxGrowth = Math.max(
    ...countryCards
      .flatMap((c) => [c.hpiGrowth || 0, c.hicpGrowth || 0, Math.abs(c.realGrowth || 0)])
      .filter((v) => !isNaN(v)),
    60
  );

  const getWidthPercent = (val: number | null) => {
    if (val === null || isNaN(val)) return 0;
    const clamped = Math.max(0, val);
    return Math.min(100, (clamped / maxGrowth) * 100);
  };

  const primaryCountryData = countryCards.find((c) => c.geo === primaryCountry) || countryCards[0];

  return (
    <div className="space-y-6">
      {/* Featured Primary Country Hero Card */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
          <BarChart3 className="w-96 h-96" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{primaryCountryData.info.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {primaryCountryData.info.nameFr}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Focus Principal
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Bilan macroéconomique cumulé depuis {primaryCountryData.startPeriod} jusqu'à {primaryCountryData.latestPeriod}
              </p>
            </div>
          </div>

          {/* Quick country switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Changer de pays :</span>
            <select
              value={primaryCountry}
              onChange={(e) => onSelectCountry(e.target.value)}
              className="bg-slate-800 text-white border border-slate-700 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            >
              {COUNTRIES.slice(0, 15).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.nameFr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3 Horizontal Gauges */}
        <div className="space-y-5 bg-slate-950/60 rounded-2xl p-5 sm:p-6 border border-slate-800/80">
          {/* 1. House Prices */}
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
              <span className="flex items-center gap-2 text-blue-300">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Prix de l'immobilier résidentiel (HPI nominal)</span>
              </span>
              <span className="font-mono text-base font-extrabold text-blue-400">
                {primaryCountryData.hpiGrowth !== null
                  ? `${primaryCountryData.hpiGrowth > 0 ? '+' : ''}${primaryCountryData.hpiGrowth}%`
                  : '—'}
              </span>
            </div>
            <div className="h-4 bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-700"
                style={{ width: `${getWidthPercent(primaryCountryData.hpiGrowth)}%` }}
              />
            </div>
          </div>

          {/* 2. Consumer Prices */}
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
              <span className="flex items-center gap-2 text-amber-300">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>Inflation des prix à la consommation (HICP)</span>
              </span>
              <span className="font-mono text-base font-extrabold text-amber-400">
                {primaryCountryData.hicpGrowth !== null
                  ? `+${primaryCountryData.hicpGrowth}%`
                  : '—'}
              </span>
            </div>
            <div className="h-4 bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full transition-all duration-700"
                style={{ width: `${getWidthPercent(primaryCountryData.hicpGrowth)}%` }}
              />
            </div>
          </div>

          {/* 3. Real House Prices */}
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
              <span className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Prix immobiliers réels (Déduction faite de l'inflation)</span>
              </span>
              <span className="font-mono text-base font-extrabold text-emerald-400">
                {primaryCountryData.realGrowth !== null
                  ? `${primaryCountryData.realGrowth > 0 ? '+' : ''}${primaryCountryData.realGrowth}%`
                  : '—'}
              </span>
            </div>
            <div className="h-4 bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full transition-all duration-700"
                style={{
                  width: `${getWidthPercent(
                    primaryCountryData.realGrowth && primaryCountryData.realGrowth > 0
                      ? primaryCountryData.realGrowth
                      : 0
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Analytical takeaway */}
        <div className="mt-5 p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-blue-200">
          <p>
            <strong>Lecture économique :</strong> En {primaryCountryData.info.nameFr}, entre {primaryCountryData.startPeriod} et {primaryCountryData.latestPeriod}, les prix de l'immobilier ont progressé de <strong>{primaryCountryData.hpiGrowth}%</strong> en termes nominaux, tandis que l'inflation générale des biens et services a été de <strong>{primaryCountryData.hicpGrowth}%</strong>. Le pouvoir d'achat net immobilier (HPI réel) a ainsi évolué de <strong>{primaryCountryData.realGrowth}%</strong>.
          </p>
        </div>
      </div>

      {/* Grid of all European Countries "Depuis 2010" */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          Comparaison européenne complète depuis 2010
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Progression cumulée nominale vs inflation vs réelle par pays
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countryCards.map((c) => (
            <div
              key={c.geo}
              onClick={() => onSelectCountry(c.geo)}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-5 border shadow-xs transition hover:shadow-md cursor-pointer ${
                c.geo === primaryCountry
                  ? 'border-blue-500 ring-2 ring-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{c.info.flag}</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {c.info.nameFr}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {c.startPeriod} → {c.latestPeriod}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                    Gain Réel
                  </span>
                  <span
                    className={`font-mono text-sm font-extrabold ${
                      (c.realGrowth ?? 0) >= 0
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {c.realGrowth !== null ? `${c.realGrowth > 0 ? '+' : ''}${c.realGrowth}%` : '—'}
                  </span>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-500 dark:text-slate-400">Immobilier (HPI)</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {c.hpiGrowth !== null ? `+${c.hpiGrowth}%` : '—'}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${getWidthPercent(c.hpiGrowth)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-500 dark:text-slate-400">Inflation (HICP)</span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      {c.hicpGrowth !== null ? `+${c.hicpGrowth}%` : '—'}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${getWidthPercent(c.hicpGrowth)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-500 dark:text-slate-400">HPI Réel</span>
                    <span
                      className={`font-semibold ${
                        (c.realGrowth ?? 0) >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'
                      }`}
                    >
                      {c.realGrowth !== null ? `${c.realGrowth > 0 ? '+' : ''}${c.realGrowth}%` : '—'}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        (c.realGrowth ?? 0) >= 0 ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      style={{
                        width: `${getWidthPercent(
                          c.realGrowth && c.realGrowth > 0 ? c.realGrowth : Math.abs(c.realGrowth || 0)
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
