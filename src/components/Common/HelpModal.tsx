import React from 'react';
import { X, BookOpen, Layers, Percent, Sparkles, Home, BarChart2, Info } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const items = [
    {
      term: 'HPI (House Price Index)',
      subtitle: 'Indice des prix des logements résidentiels',
      icon: Layers,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30',
      description:
        'Mesure la variation dans le temps des prix d’acquisition des logements résidentiels achetés par les ménages (appartements et maisons). Les données Eurostat sont harmonisées pour tous les pays membres.',
      source: 'Dataset Eurostat : prc_hpi_q',
    },
    {
      term: 'HICP (Harmonised Index of Consumer Prices)',
      subtitle: 'Indice des prix à la consommation harmonisé',
      icon: Percent,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/30',
      description:
        'Indice officiel d’inflation utilisé par la Banque Centrale Européenne (BCE). Dans notre application, les trois mois de chaque trimestre sont moyennés pour créer une série trimestrielle strictement compatible avec le HPI.',
      source: 'Dataset Eurostat : prc_hicp_midx (coicop=CP00)',
    },
    {
      term: 'Real HPI (HPI Réel)',
      subtitle: 'Indice des prix immobiliers corrigé de l’inflation',
      icon: Sparkles,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30',
      description:
        'Calculé par la formule (HPI / HICP) × 100. Il mesure le gain ou la perte de pouvoir d’achat patrimonial net. Si le Real HPI monte, l’immobilier progresse plus vite que le coût de la vie générale.',
      formula: 'Real HPI = (HPI / HICP) × 100',
    },
    {
      term: 'Logements Neufs vs Existants',
      subtitle: 'Codes Eurostat DW_NEW & DW_EXST',
      icon: Home,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/30',
      description:
        'Distingue les acquisitions de logements nouvellement construits (DW_NEW) de celles du parc ancien / existant (DW_EXST). Les dynamiques divergent souvent en raison du coût des matériaux et des normes environnementales.',
    },
    {
      term: 'Variations YoY & QoQ',
      subtitle: 'Taux de croissance annuel et trimestriel',
      icon: BarChart2,
      color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/30',
      description:
        'YoY (Year-over-Year) compare le trimestre actuel à celui de l’année précédente (t - 4 trimestres). QoQ (Quarter-over-Quarter) compare le trimestre actuel au trimestre immédiatement précédent (t - 1).',
    },
    {
      term: 'Rebasification Dynamique',
      subtitle: 'Base 2015 = 100, 2010 = 100 ou Début de période',
      icon: Info,
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30',
      description:
        'Par défaut, Eurostat utilise 2015 = 100. Notre sélecteur permet de recalibrer les séries afin que 2010-Q1 ou le premier point de la période choisie serve de référence 100 pour observer directement le pourcentage de hausse cumulée.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Aide Contextuelle & Lexique Économique
              </h3>
              <p className="text-xs text-slate-500">
                Définitions et explications des indicateurs Eurostat
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 space-y-4 overflow-y-auto">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.term}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>

                {item.formula && (
                  <div className="mt-2 inline-block px-2.5 py-1 rounded bg-white dark:bg-slate-900 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
                    {item.formula}
                  </div>
                )}

                {item.source && (
                  <div className="text-[10px] text-slate-400 pt-1 font-mono">
                    {item.source}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50/60 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer"
          >
            Compris
          </button>
        </div>
      </div>
    </div>
  );
};
