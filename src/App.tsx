/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Layout/Navbar';
import { HamburgerMenu } from './components/Layout/HamburgerMenu';
import { OfflineIndicator } from './components/Layout/OfflineIndicator';
import { ControlsBar } from './components/Dashboard/ControlsBar';
import { KpiGrid } from './components/Dashboard/KpiGrid';
import { MainChart } from './components/Charts/MainChart';
import { CountryComparisonView } from './components/CountryComparison/CountryComparisonView';
import { Since2010View } from './components/Since2010View/Since2010View';
import { DwellingsView } from './components/DwellingsView/DwellingsView';
import { DataTableView } from './components/DataTable/DataTableView';
import { MethodologyView } from './components/Methodology/MethodologyView';
import { SystemSettingsModal } from './components/Settings/SystemSettingsModal';
import { OnboardingModal } from './components/Onboarding/OnboardingModal';
import { HelpModal } from './components/Common/HelpModal';
import { useEurostatData } from './hooks/useEurostatData';
import { useAutoUpdate } from './hooks/useAutoUpdate';
import { AlertTriangle, Globe, Sparkles, RefreshCw } from 'lucide-react';
import { AppLogo } from './components/Common/AppLogo';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  // Modals state
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  // Background auto-update state
  const { hasUpdate, forceUpdate } = useAutoUpdate();

  // First visit onboarding check
  useEffect(() => {
    const completed = localStorage.getItem('ehd_onboarding_completed');
    if (!completed) {
      setIsOnboardingOpen(true);
    }
  }, []);

  const {
    primaryCountry,
    setPrimaryCountry,
    primaryCountryInfo,
    comparisonCountries,
    setComparisonCountries,
    startQuarter,
    setStartQuarter,
    endQuarter,
    setEndQuarter,
    indexBase,
    setIndexBase,
    dwellingType,
    setDwellingType,
    indicatorMode,
    setIndicatorMode,
    allAvailableQuarters,
    rebasedObservations,
    summaryKPIs,
    comparisonSeries,
    countryCache,
    isLoading,
    lastUpdated,
    dataSource,
    error,
    refreshData,
  } = useEurostatData();

  // Apply theme to html root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      // System
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) root.classList.add('dark');
      else root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'));
  };

  const handleToggleComparisonCountry = (geo: string) => {
    setComparisonCountries((prev) => {
      if (prev.includes(geo)) {
        if (prev.length <= 1) return prev; // Keep at least one
        return prev.filter((g) => g !== geo);
      }
      return [...prev, geo];
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors selection:bg-blue-500 selection:text-white">
      {/* Offline Status */}
      <OfflineIndicator />

      {/* Background Auto-Update Notification Banner */}
      {hasUpdate && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 text-xs font-medium flex items-center justify-between shadow-md sticky top-0 z-50 animate-fade-in">
          <div className="flex items-center gap-2 max-w-4xl mx-auto w-full justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
              <span>
                <strong>Nouvelle mise à jour disponible :</strong> Une nouvelle version a été téléchargée automatiquement en arrière-plan.
              </span>
            </div>
            <button
              onClick={() => forceUpdate()}
              className="flex items-center gap-1.5 px-3 py-1 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-bold text-xs shadow-xs transition cursor-pointer flex-shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Activer maintenant</span>
            </button>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        dataSource={dataSource}
        isLoading={isLoading}
        onRefresh={refreshData}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenHamburger={() => setIsHamburgerOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Hamburger Menu Drawer */}
      <HamburgerMenu
        isOpen={isHamburgerOpen}
        onClose={() => setIsHamburgerOpen(false)}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        theme={theme}
        onSetTheme={setTheme}
        dataSource={dataSource}
      />

      {/* System Settings Modal */}
      <SystemSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        onSetTheme={setTheme}
        onRefreshData={refreshData}
      />

      {/* Onboarding Tour Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />

      {/* Contextual Help Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Error Alert if any */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 text-xs flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-rose-600" />
            <div>
              <p className="font-semibold">Attention : {error}</p>
              <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-0.5">
                Affichage des données de sauvegarde officielles pour assurer la continuité.
              </p>
            </div>
          </div>
        )}

        {/* Tab 1: Dashboard */}
        {currentTab === 'dashboard' && (
          <div className="space-y-6">
            <ControlsBar
              primaryCountry={primaryCountry}
              onSelectCountry={setPrimaryCountry}
              startQuarter={startQuarter}
              onSelectStartQuarter={setStartQuarter}
              endQuarter={endQuarter}
              onSelectEndQuarter={setEndQuarter}
              availableQuarters={allAvailableQuarters}
              indexBase={indexBase}
              onSelectIndexBase={setIndexBase}
              dwellingType={dwellingType}
              onSelectDwellingType={setDwellingType}
              indicatorMode={indicatorMode}
              onSelectIndicatorMode={setIndicatorMode}
            />

            <KpiGrid
              kpis={summaryKPIs}
              country={primaryCountryInfo}
              indexBase={indexBase}
              startPeriod={startQuarter}
            />

            <MainChart
              data={rebasedObservations}
              country={primaryCountryInfo}
              indicatorMode={indicatorMode}
              indexBase={indexBase}
              dwellingType={dwellingType}
            />
          </div>
        )}

        {/* Tab 2: Country Comparison */}
        {currentTab === 'compare' && (
          <div className="space-y-6">
            <ControlsBar
              primaryCountry={primaryCountry}
              onSelectCountry={setPrimaryCountry}
              startQuarter={startQuarter}
              onSelectStartQuarter={setStartQuarter}
              endQuarter={endQuarter}
              onSelectEndQuarter={setEndQuarter}
              availableQuarters={allAvailableQuarters}
              indexBase={indexBase}
              onSelectIndexBase={setIndexBase}
              dwellingType={dwellingType}
              onSelectDwellingType={setDwellingType}
              indicatorMode={indicatorMode}
              onSelectIndicatorMode={setIndicatorMode}
            />

            <CountryComparisonView
              comparisonSeries={comparisonSeries}
              comparisonCountries={comparisonCountries}
              onToggleCountry={handleToggleComparisonCountry}
              indexBase={indexBase}
              startQuarter={startQuarter}
              endQuarter={endQuarter}
            />
          </div>
        )}

        {/* Tab 3: Since 2010 Cumulative Explorer */}
        {currentTab === 'since2010' && (
          <Since2010View
            countryCache={comparisonSeries}
            primaryCountry={primaryCountry}
            onSelectCountry={setPrimaryCountry}
          />
        )}

        {/* Tab 4: Dwellings View (New vs Existing) */}
        {currentTab === 'dwellings' && (
          <div className="space-y-6">
            <ControlsBar
              primaryCountry={primaryCountry}
              onSelectCountry={setPrimaryCountry}
              startQuarter={startQuarter}
              onSelectStartQuarter={setStartQuarter}
              endQuarter={endQuarter}
              onSelectEndQuarter={setEndQuarter}
              availableQuarters={allAvailableQuarters}
              indexBase={indexBase}
              onSelectIndexBase={setIndexBase}
              dwellingType={dwellingType}
              onSelectDwellingType={setDwellingType}
              indicatorMode="dwellings"
              onSelectIndicatorMode={setIndicatorMode}
            />

            <DwellingsView
              observations={rebasedObservations}
              country={primaryCountryInfo}
              indexBase={indexBase}
            />
          </div>
        )}

        {/* Tab 5: Data Table */}
        {currentTab === 'table' && (
          <DataTableView
            countryCache={countryCache}
            primaryCountry={primaryCountry}
          />
        )}

        {/* Tab 6: Methodology & Sources */}
        {currentTab === 'methodology' && (
          <MethodologyView
            lastUpdated={lastUpdated}
            dataSource={dataSource}
            onRefresh={refreshData}
            isLoading={isLoading}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-12 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <AppLogo size={24} />
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>
                Données officielles : <strong>Eurostat</strong> (prc_hpi_q & prc_hicp_midx)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>PWA certifiée hors ligne</span>
            <span>•</span>
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Visite guidée
            </button>
            <span>•</span>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Paramètres Système
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentTab('methodology')}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Méthodologie
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
