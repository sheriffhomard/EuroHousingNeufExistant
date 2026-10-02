import React from 'react';
import { COUNTRIES } from '../../data/countries';
import {
  IndexBase,
  DwellingType,
  IndicatorMode,
} from '../../types/eurostat';
import { Calendar, SlidersHorizontal, Home, Layers } from 'lucide-react';
import { ContextualTooltip } from '../Common/ContextualTooltip';

interface ControlsBarProps {
  primaryCountry: string;
  onSelectCountry: (geo: string) => void;
  startQuarter: string;
  onSelectStartQuarter: (q: string) => void;
  endQuarter: string;
  onSelectEndQuarter: (q: string) => void;
  availableQuarters: string[];
  indexBase: IndexBase;
  onSelectIndexBase: (base: IndexBase) => void;
  dwellingType: DwellingType;
  onSelectDwellingType: (type: DwellingType) => void;
  indicatorMode: IndicatorMode;
  onSelectIndicatorMode: (mode: IndicatorMode) => void;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  primaryCountry,
  onSelectCountry,
  startQuarter,
  onSelectStartQuarter,
  endQuarter,
  onSelectEndQuarter,
  availableQuarters,
  indexBase,
  onSelectIndexBase,
  dwellingType,
  onSelectDwellingType,
  indicatorMode,
  onSelectIndicatorMode,
}) => {
  // Quick period presets
  const handlePreset = (years: number | 'all') => {
    if (availableQuarters.length === 0) return;
    const latest = availableQuarters[availableQuarters.length - 1];
    if (years === 'all') {
      onSelectStartQuarter('2010-Q1');
      onSelectEndQuarter(latest);
      return;
    }

    const [latestYear, q] = latest.split('-Q');
    const startYear = Math.max(2010, parseInt(latestYear, 10) - years);
    const targetStart = `${startYear}-Q${q}`;
    if (availableQuarters.includes(targetStart)) {
      onSelectStartQuarter(targetStart);
    } else {
      onSelectStartQuarter('2010-Q1');
    }
    onSelectEndQuarter(latest);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Country selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Pays / Zone</span>
          </label>
          <div className="relative">
            <select
              value={primaryCountry}
              onChange={(e) => onSelectCountry(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.nameFr} ({c.nameEn})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Period Selector */}
        <div className="sm:col-span-1 lg:col-span-2">
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Période d'observation</span>
            </span>
            <span className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handlePreset('all')}
                className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
              >
                2010→2025
              </button>
              <button
                type="button"
                onClick={() => handlePreset(10)}
                className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
              >
                10 ans
              </button>
              <button
                type="button"
                onClick={() => handlePreset(5)}
                className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
              >
                5 ans
              </button>
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={startQuarter}
              onChange={(e) => onSelectStartQuarter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {availableQuarters.map((q) => (
                <option key={`start-${q}`} value={q} disabled={q > endQuarter}>
                  Début : {q}
                </option>
              ))}
            </select>
            <select
              value={endQuarter}
              onChange={(e) => onSelectEndQuarter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {availableQuarters.map((q) => (
                <option key={`end-${q}`} value={q} disabled={q < startQuarter}>
                  Fin : {q}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Index Base selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Base de référence</span>
            <ContextualTooltip
              title="Rebasification de l'indice"
              content="Permet de recalibrer les courbes sur 100 à une date donnée pour comparer directement les variations en pourcentage."
              formula="Indice_rebasé = (Indice / Indice_base) × 100"
            />
          </label>
          <select
            value={indexBase}
            onChange={(e) => onSelectIndexBase(e.target.value as IndexBase)}
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="I15">2015 = 100 (Eurostat officiel)</option>
            <option value="2010">2010-Q1 = 100 (Base 2010)</option>
            <option value="START">Début de période = 100</option>
          </select>
        </div>
      </div>

      {/* Second Row: Indicator Modes & Dwelling Type */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Indicator Mode Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
          <button
            type="button"
            onClick={() => onSelectIndicatorMode('hpi_vs_hicp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              indicatorMode === 'hpi_vs_hicp'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            HPI vs Inflation (HICP)
          </button>
          <button
            type="button"
            onClick={() => onSelectIndicatorMode('real_hpi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              indicatorMode === 'real_hpi'
                ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            HPI Réel (Pouvoir d'achat immo)
          </button>
          <button
            type="button"
            onClick={() => onSelectIndicatorMode('hpi_nominal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              indicatorMode === 'hpi_nominal'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            HPI Nominal seul
          </button>
          <button
            type="button"
            onClick={() => onSelectIndicatorMode('hicp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              indicatorMode === 'hicp'
                ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Inflation HICP seule
          </button>
          <button
            type="button"
            onClick={() => onSelectIndicatorMode('dwellings')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              indicatorMode === 'dwellings'
                ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Neuf vs Existant
          </button>
        </div>

        {/* Dwelling Type filter (when applicable) */}
        {indicatorMode !== 'dwellings' && (
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Logement :</span>
            </span>
            <div className="flex rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-50 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => onSelectDwellingType('TOTAL')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition cursor-pointer ${
                  dwellingType === 'TOTAL'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Total
              </button>
              <button
                type="button"
                onClick={() => onSelectDwellingType('DW_NEW')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition cursor-pointer ${
                  dwellingType === 'DW_NEW'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Neuf
              </button>
              <button
                type="button"
                onClick={() => onSelectDwellingType('DW_EXST')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition cursor-pointer ${
                  dwellingType === 'DW_EXST'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Existant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
