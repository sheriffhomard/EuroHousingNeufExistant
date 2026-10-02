import React from 'react';
import {
  TrendingUp,
  BarChart3,
  GitCompare,
  Home,
  Table as TableIcon,
  BookOpen,
  RefreshCw,
  Sun,
  Moon,
  Laptop,
  Menu,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { AppLogo } from '../Common/AppLogo';

export type NavTab =
  | 'dashboard'
  | 'compare'
  | 'since2010'
  | 'dwellings'
  | 'table'
  | 'methodology';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  dataSource: 'api' | 'cache' | 'snapshot';
  isLoading: boolean;
  onRefresh: () => void;
  theme: 'light' | 'dark' | 'system';
  onToggleTheme: () => void;
  onOpenHamburger: () => void;
  onOpenSettings: () => void;
  onOpenHelp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  dataSource,
  isLoading,
  onRefresh,
  theme,
  onToggleTheme,
  onOpenHamburger,
  onOpenSettings,
  onOpenHelp,
}) => {
  const tabs = [
    { id: 'dashboard' as NavTab, label: 'Tableau de bord', icon: TrendingUp },
    { id: 'compare' as NavTab, label: 'Comparateur Pays', icon: GitCompare },
    { id: 'since2010' as NavTab, label: 'Depuis 2010', icon: BarChart3 },
    { id: 'dwellings' as NavTab, label: 'Neuf vs Existant', icon: Home },
    { id: 'table' as NavTab, label: 'Table de données', icon: TableIcon },
    { id: 'methodology' as NavTab, label: 'Méthodologie & Sources', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger Button & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenHamburger}
              className="p-2 -ml-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Menu des fonctionnalités par catégorie"
              aria-label="Ouvrir le menu principal"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div
              onClick={() => onSelectTab('dashboard')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <AppLogo size={36} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Euro Housing Data
                  </span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                    PWA
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                  Observatoire Européen des Prix Immobiliers & de l'Inflation • Eurostat
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Status indicator */}
            <div
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80"
              title={
                dataSource === 'api'
                  ? 'Connecté en direct à l’API Eurostat'
                  : dataSource === 'cache'
                  ? 'Données servies depuis le cache navigateur'
                  : 'Données de référence officielles Eurostat'
              }
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  dataSource === 'api'
                    ? 'bg-emerald-500 animate-pulse'
                    : dataSource === 'cache'
                    ? 'bg-sky-500'
                    : 'bg-purple-500'
                }`}
              />
              <span className="text-slate-600 dark:text-slate-300 capitalize text-[11px]">
                {dataSource === 'api'
                  ? 'Eurostat direct'
                  : dataSource === 'cache'
                  ? 'Cache local'
                  : 'Eurostat baseline'}
              </span>
            </div>

            {/* Quick Contextual Help Button */}
            <button
              onClick={onOpenHelp}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Aide contextuelle & Lexique"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Refresh */}
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Actualiser les données Eurostat"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-500' : ''}`} />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title={`Thème actuel : ${theme === 'light' ? 'Clair' : theme === 'dark' ? 'Sombre' : 'Système'}. Cliquez pour changer.`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-600" />
              ) : (
                <Laptop className="w-4 h-4 text-blue-500" />
              )}
            </button>

            {/* System Settings Button */}
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Paramètres Système & Mises à jour"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* In-app Install PWA button */}
            <PWAInstallButton />
          </div>
        </div>

        {/* Tab navigation bar */}
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-2 border-t border-slate-100 dark:border-slate-800/60">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
