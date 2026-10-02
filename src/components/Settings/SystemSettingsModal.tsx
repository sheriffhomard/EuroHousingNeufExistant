import React from 'react';
import { useAutoUpdate } from '../../hooks/useAutoUpdate';
import {
  X,
  RefreshCw,
  Zap,
  Clock,
  Calendar,
  HardDrive,
  Cpu,
  CheckCircle2,
  Trash2,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react';
import { cacheService } from '../../services/cache';

interface SystemSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark' | 'system';
  onSetTheme: (theme: 'light' | 'dark' | 'system') => void;
  onRefreshData: () => void;
}

export const SystemSettingsModal: React.FC<SystemSettingsModalProps> = ({
  isOpen,
  onClose,
  theme,
  onSetTheme,
  onRefreshData,
}) => {
  const {
    version,
    releaseDate,
    lastChecked,
    isChecking,
    hasUpdate,
    autoUpdateEnabled,
    checkIntervalMinutes,
    swStatus,
    cacheStorageEstimate,
    message,
    checkForUpdates,
    forceUpdate,
    setAutoUpdateEnabled,
    setCheckInterval,
  } = useAutoUpdate();

  if (!isOpen) return null;

  const handleClearCache = async () => {
    if (confirm('Voulez-vous purger le cache des données Eurostat et réinitialiser le stockage local ?')) {
      await cacheService.clear();
      onRefreshData();
      alert('Le cache local a été réinitialisé.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Paramètres Système & Mises à Jour
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Configuration de l'observatoire, du moteur PWA et du cache
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

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto text-xs sm:text-sm">
          {/* Status Message Toast if any */}
          {message && (
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {/* Version & Release info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span className="text-[11px] font-semibold uppercase text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span>Date de sortie de la version</span>
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {releaseDate}
              </div>
              <span className="inline-block font-mono text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold">
                Version {version}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span className="text-[11px] font-semibold uppercase text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Dernière vérification</span>
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {lastChecked}
              </div>
              <span className="inline-block text-[10px] text-slate-500 dark:text-slate-400">
                Synchronisation automatique active
              </span>
            </div>
          </div>

          {/* Action Buttons: Check & Force Update */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
              <span>Actions de mise à jour</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={checkForUpdates}
                disabled={isChecking}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold transition shadow-xs cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
                <span>Vérifier les mises à jour</span>
              </button>

              <button
                type="button"
                onClick={forceUpdate}
                disabled={isChecking}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-rose-300 dark:border-rose-800/80 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-700 dark:text-rose-300 font-semibold transition cursor-pointer"
              >
                <Zap className="w-4 h-4 text-rose-600" />
                <span>Forcer la mise à jour</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              « Vérifier » interroge les serveurs Eurostat et le Service Worker. « Forcer » vide le cache de données et recharge instantanément les derniers assets.
            </p>
          </div>

          {/* Automatic Background Updates settings */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider block">
                  Mises à jour automatiques en arrière-plan
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Vérifie périodiquement la disponibilité de nouvelles séries Eurostat et versions PWA
                </p>
              </div>

              {/* Toggle switch */}
              <button
                type="button"
                onClick={() => setAutoUpdateEnabled(!autoUpdateEnabled)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  autoUpdateEnabled ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    autoUpdateEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {autoUpdateEnabled && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-300">Fréquence de vérification :</span>
                <select
                  value={checkIntervalMinutes}
                  onChange={(e) => setCheckInterval(parseInt(e.target.value, 10))}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 text-xs font-semibold focus:outline-hidden"
                >
                  <option value={15}>Toutes les 15 minutes</option>
                  <option value={30}>Toutes les 30 minutes</option>
                  <option value={60}>Toutes les heures</option>
                  <option value={360}>Toutes les 6 heures</option>
                  <option value={1440}>Une fois par jour</option>
                </select>
              </div>
            )}
          </div>

          {/* Theme selector */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2.5 bg-white dark:bg-slate-900">
            <span className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider block">
              Thème visuel de l'interface
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => onSetTheme('light')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  theme === 'light'
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Thème Clair</span>
              </button>
              <button
                type="button"
                onClick={() => onSetTheme('dark')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  theme === 'dark'
                    ? 'border-blue-500 bg-blue-900/30 text-blue-300 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Moon className="w-4 h-4 text-slate-400" />
                <span>Thème Sombre</span>
              </button>
              <button
                type="button"
                onClick={() => onSetTheme('system')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  theme === 'system'
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-bold'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>Système</span>
              </button>
            </div>
          </div>

          {/* Storage & PWA Diagnostics */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <span className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-slate-500" />
              <span>Diagnostic Stockage & PWA</span>
            </span>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Service Worker :</span>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 capitalize">
                  {swStatus === 'active' ? 'Actif et opérationnel' : swStatus}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Volume de cache :</span>
                <span className="font-mono">{cacheStorageEstimate}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-end">
              <button
                type="button"
                onClick={handleClearCache}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Purger le cache local</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50/60 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold transition cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
