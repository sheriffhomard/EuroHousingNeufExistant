import React from 'react';
import { BookOpen, Database, Calculator, RefreshCw, ExternalLink, ShieldCheck } from 'lucide-react';

interface MethodologyViewProps {
  lastUpdated: string;
  dataSource: 'api' | 'cache' | 'snapshot';
  onRefresh: () => void;
  isLoading: boolean;
}

export const MethodologyView: React.FC<MethodologyViewProps> = ({
  lastUpdated,
  dataSource,
  onRefresh,
  isLoading,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-2">
      {/* Title Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Méthodologie Statistique & Sources Officielles
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Observatoire Européen des Prix Immobiliers et de l'Inflation
            </p>
          </div>
        </div>

        {/* Status banner */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                dataSource === 'api'
                  ? 'bg-emerald-500 animate-pulse'
                  : dataSource === 'cache'
                  ? 'bg-sky-500'
                  : 'bg-purple-500'
              }`}
            />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Source active :{' '}
              <strong>
                {dataSource === 'api'
                  ? 'API Eurostat Directe (Temps Réel)'
                  : dataSource === 'cache'
                  ? 'Cache Navigateur Local (IndexedDB)'
                  : 'Instantané Eurostat Officiel'}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <span>Dernière mise à jour : {lastUpdated || 'En cours'}</span>
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Forcer l'actualisation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: Datasets */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Datasets Eurostat Utilisés
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* HPI */}
          <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60">
                prc_hpi_q
              </span>
              <a
                href="https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/prc_hpi_q"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>API REST</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              House Price Index (HPI) — Quarterly data
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Mesure l'évolution des prix à l'achat de tous les logements résidentiels acquis par les ménages (appartements et maisons individuelles).
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
              <li>Fréquence : Trimestrielle (<code className="font-mono text-[11px]">freq=Q</code>)</li>
              <li>Base par défaut : 2015 = 100 (<code className="font-mono text-[11px]">unit=I15_Q</code>)</li>
              <li>Typologies : Total (<code className="font-mono text-[11px]">TOTAL</code>), Neuf (<code className="font-mono text-[11px]">DW_NEW</code>), Existant (<code className="font-mono text-[11px]">DW_EXST</code>)</li>
            </ul>
          </div>

          {/* HICP */}
          <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60">
                prc_hicp_midx
              </span>
              <a
                href="https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/prc_hicp_midx"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-amber-600 hover:underline flex items-center gap-1"
              >
                <span>API REST</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Harmonised Index of Consumer Prices (HICP) — Monthly index
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Indice des prix à la consommation harmonisé à l'échelle européenne pour comparer l'inflation entre les États membres.
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
              <li>Nomenclature : Ensemble des biens et services (<code className="font-mono text-[11px]">coicop=CP00</code>)</li>
              <li>Base par défaut : 2015 = 100 (<code className="font-mono text-[11px]">unit=I15</code>)</li>
              <li>Fréquence source : Mensuelle (agrégée en trimestres)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Mathematical formulas */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Calculator className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Formules et Calculs Statistiques
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Real HPI formula */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>A. Calcul du HPI Réel (Corrigé de l'inflation)</span>
            </h4>
            <p>
              Pour mesurer le pouvoir d'achat patrimonial réel, l'indice des prix nominaux de l'immobilier est déflaté par l'indice harmonisé des prix à la consommation. Lorsque les deux indices partagent la même année de référence (2015 = 100) :
            </p>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl font-mono text-center text-sm font-bold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
              Real HPI(t) = [ HPI_nominal(t) / HICP(t) ] × 100
            </div>
            <p className="text-xs text-slate-500">
              Interprétation : Si l'indice HPI réel dépasse 100 (sur base 2015), les prix des logements ont augmenté plus vite que le coût moyen de la vie depuis 2015, générant une valorisation nette positive.
            </p>
          </div>

          {/* Aggregation */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>B. Agrégation Trimestrielle du HICP</span>
            </h4>
            <p>
              Le dataset HICP étant mensuel (<code className="font-mono text-xs">YYYY-MM</code>) et le HPI étant trimestriel (<code className="font-mono text-xs">YYYY-Q#</code>), le système calcule la moyenne arithmétique non pondérée des 3 mois constituant chaque trimestre calendaire :
            </p>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl font-mono text-center text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-700">
              HICP_Q1 = [ HICP(Janvier) + HICP(Février) + HICP(Mars) ] / 3<br />
              HICP_Q2 = [ HICP(Avril) + HICP(Mai) + HICP(Juin) ] / 3<br />
              HICP_Q3 = [ HICP(Juillet) + HICP(Août) + HICP(Septembre) ] / 3<br />
              HICP_Q4 = [ HICP(Octobre) + HICP(Novembre) + HICP(Décembre) ] / 3
            </div>
            <p className="text-xs text-slate-500">
              Cette convention est la méthode standard préconisée par la Banque Centrale Européenne (BCE) et Eurostat pour harmoniser les séries de fréquences distinctes.
            </p>
          </div>

          {/* Dynamic Rebasification */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>C. Rebasification Dynamique</span>
            </h4>
            <p>
              Lorsque l'utilisateur choisit une base alternative (ex: <code className="font-mono text-xs">2010 = 100</code> ou <code className="font-mono text-xs">Début de période = 100</code>), le calcul est effectué localement à la volée sans modifier les données brutes :
            </p>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl font-mono text-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700">
              Indice_rebasé(t) = [ Indice_Eurostat(t) / Indice_Eurostat(t_base) ] × 100
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Architecture & PWA */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Fonctionnement Hors Ligne & Mises à Jour Futures
          </h3>
        </div>
        <p>
          Cette application est une <strong>Progressive Web App (PWA)</strong> conforme aux standards W3C. Les séries téléchargées sont mises en cache dans l'IndexedDB du navigateur et par le Service Worker. En cas d'absence de réseau internet, l'application reste totalement navigable avec les données précédemment consultées ou l'instantané de référence officiel.
        </p>
        <p>
          <strong>Compatibilité temporelle dynamique :</strong> Le code ne contient aucune contrainte rigide bornant l'horizon temporel à Q3 2025. Dès qu'Eurostat publie de nouveaux trimestres (ex: Q4 2025, 2026), l'application les intègre et les analyse automatiquement.
        </p>
      </div>
    </div>
  );
};
