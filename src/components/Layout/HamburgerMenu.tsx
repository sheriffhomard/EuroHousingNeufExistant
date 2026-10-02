import React from 'react';
import {
  TrendingUp,
  GitCompare,
  BarChart3,
  Home,
  Table as TableIcon,
  BookOpen,
  Settings,
  HelpCircle,
  Compass,
  Sun,
  Moon,
  Laptop,
  X,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { NavTab } from './Navbar';
import { AppLogo } from '../Common/AppLogo';
import { APP_VERSION } from '../../services/autoUpdateService';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSettings: () => void;
  onOpenOnboarding: () => void;
  onOpenHelp: () => void;
  theme: 'light' | 'dark' | 'system';
  onSetTheme: (theme: 'light' | 'dark' | 'system') => void;
  dataSource: 'api' | 'cache' | 'snapshot';
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClose,
  currentTab,
  onSelectTab,
  onOpenSettings,
  onOpenOnboarding,
  onOpenHelp,
  theme,
  onSetTheme,
  dataSource,
}) => {
  if (!isOpen) return null;

  const handleSelectNav = (tab: NavTab) => {
    onSelectTab(tab);
    onClose();
  };

  const categories = [
    {
      name: 'Analytique & Visualisations',
      items: [
        {
          id: 'dashboard' as NavTab,
          label: 'Tableau de bord principal',
          description: 'Indices clés HPI, HICP, HPI réel et graphique interactif',
          icon: TrendingUp,
          color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30',
        },
        {
          id: 'compare' as NavTab,
          label: 'Comparateur multi-pays',
          description: 'Superposition simultanée des trajectoires européennes',
          icon: GitCompare,
          color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30',
        },
        {
          id: 'since2010' as NavTab,
          label: 'Évolution « Depuis 2010 »',
          description: 'Jauges comparatives cumulatives nominal vs inflation vs réel',
          icon: BarChart3,
          color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/30',
        },
        {
          id: 'dwellings' as NavTab,
          label: 'Logements Neufs vs Existants',
          description: 'Analyse structurelle et divergence des typologies de biens',
          icon: Home,
          color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/30',
        },
      ],
    },
    {
      name: 'Données & Exploration',
      items: [
        {
          id: 'table' as NavTab,
          label: 'Table de données complète',
          description: 'Recherche, tri multi-colonnes, pagination et export CSV/JSON',
          icon: TableIcon,
          color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/30',
        },
      ],
    },
    {
      name: 'Observatoire & Méthodologie',
      items: [
        {
          id: 'methodology' as NavTab,
          label: 'Méthodologie & Sources Eurostat',
          description: 'Formules mathématiques, agrégation mensuelle et flux API',
          icon: BookOpen,
          color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30',
        },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer panel */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-full z-10 animate-slide-right">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <AppLogo size={36} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
                  Euro Housing Data
                </span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  {APP_VERSION}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Observatoire Économique Européen
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories & Navigation */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
                {cat.name}
              </h4>
              <div className="space-y-1">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectNav(item.id)}
                      className={`w-full text-left p-3 rounded-2xl flex items-start gap-3 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 shadow-xs'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent'
                      }`}
                    >
                      <div className={`p-2 rounded-xl flex-shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-semibold text-xs sm:text-sm ${
                              isActive
                                ? 'text-blue-700 dark:text-blue-300'
                                : 'text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick Tools & System category */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
              Outils & Assistance
            </h4>
            <div className="grid grid-cols-2 gap-2 px-1">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenOnboarding();
                }}
                className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-left transition flex items-center gap-2.5 cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 block">
                    Visite guidée
                  </span>
                  <span className="text-[10px] text-slate-400">Onboarding</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenHelp();
                }}
                className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-left transition flex items-center gap-2.5 cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 block">
                    Lexique & Aide
                  </span>
                  <span className="text-[10px] text-slate-400">Indicateurs</span>
                </div>
              </button>
            </div>

            {/* System Settings Entry Button */}
            <div className="pt-2 px-1">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="w-full p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-left transition flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600 text-white">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">
                      Paramètres Système
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Mises à jour, version, cache & diagnostics
                    </span>
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold">
                  Ouvrir
                </span>
              </button>
            </div>
          </div>

          {/* Theme Quick Selector inside Hamburger */}
          <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Thème visuel :
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => onSetTheme('light')}
                className={`py-1.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  theme === 'light'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Clair</span>
              </button>
              <button
                type="button"
                onClick={() => onSetTheme('dark')}
                className={`py-1.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-800 text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-slate-300" />
                <span>Sombre</span>
              </button>
              <button
                type="button"
                onClick={() => onSetTheme('system')}
                className={`py-1.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  theme === 'system'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Auto</span>
              </button>
            </div>
          </div>
        </div>

        {/* Drawer Footer with Eurostat Status */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                dataSource === 'api'
                  ? 'bg-emerald-500 animate-pulse'
                  : dataSource === 'cache'
                  ? 'bg-sky-500'
                  : 'bg-purple-500'
              }`}
            />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {dataSource === 'api' ? 'Flux Eurostat direct' : dataSource === 'cache' ? 'Cache PWA' : 'Instantané Eurostat'}
            </span>
          </div>

          <a
            href="https://ec.europa.eu/eurostat"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Portail Eurostat</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
