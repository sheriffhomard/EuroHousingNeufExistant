/**
 * Automatic Background Update Service
 *
 * Manages periodic background checks for new application versions,
 * Service Worker updates, and Eurostat dataset timestamp synchronization.
 */

export const APP_VERSION = 'v1.2.4';
export const RELEASE_DATE = '15 Octobre 2026';

export interface UpdateStatus {
  version: string;
  releaseDate: string;
  lastChecked: string;
  isChecking: boolean;
  hasUpdate: boolean;
  autoUpdateEnabled: boolean;
  checkIntervalMinutes: number;
  swStatus: 'registered' | 'active' | 'waiting' | 'unsupported';
  cacheStorageEstimate: string;
  message?: string;
}

const STORAGE_KEY_LAST_CHECK = 'ehd_last_update_check';
const STORAGE_KEY_AUTO_ENABLED = 'ehd_auto_update_enabled';
const STORAGE_KEY_INTERVAL = 'ehd_auto_update_interval';

type UpdateListener = (status: UpdateStatus) => void;

class AutoUpdateService {
  private listeners: Set<UpdateListener> = new Set();
  private timerId: number | null = null;
  private status: UpdateStatus = {
    version: APP_VERSION,
    releaseDate: RELEASE_DATE,
    lastChecked: this.loadLastChecked(),
    isChecking: false,
    hasUpdate: false,
    autoUpdateEnabled: this.loadAutoEnabled(),
    checkIntervalMinutes: this.loadInterval(),
    swStatus: 'unsupported',
    cacheStorageEstimate: 'Calcul en cours...',
  };

  constructor() {
    this.initServiceWorkerListener();
    this.estimateCacheSize();
    this.startAutoUpdateTimer();
  }

  private loadLastChecked(): string {
    const saved = localStorage.getItem(STORAGE_KEY_LAST_CHECK);
    if (saved) return saved;
    const now = new Date().toLocaleString('fr-FR', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
    localStorage.setItem(STORAGE_KEY_LAST_CHECK, now);
    return now;
  }

  private loadAutoEnabled(): boolean {
    const saved = localStorage.getItem(STORAGE_KEY_AUTO_ENABLED);
    return saved !== null ? saved === 'true' : true; // Enabled by default
  }

  private loadInterval(): number {
    const saved = localStorage.getItem(STORAGE_KEY_INTERVAL);
    return saved ? parseInt(saved, 10) : 15; // 15 minutes default
  }

  public getStatus(): UpdateStatus {
    return { ...this.status };
  }

  public subscribe(listener: UpdateListener): () => void {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => this.listeners.delete(listener);
  }

  private notify() {
    const current = this.getStatus();
    this.listeners.forEach((l) => l(current));
  }

  private initServiceWorkerListener() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      this.status.swStatus = 'unsupported';
      this.notify();
      return;
    }

    navigator.serviceWorker.ready.then((reg) => {
      this.status.swStatus = reg.active ? 'active' : 'registered';
      this.notify();

      // Listen for updates found by the browser
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version installed in the background!
            this.status.hasUpdate = true;
            this.status.message = 'Nouvelle version prête à être activée.';
            this.notify();
          }
        });
      });
    }).catch(() => {
      this.status.swStatus = 'unsupported';
      this.notify();
    });
  }

  public async estimateCacheSize(): Promise<void> {
    if (typeof navigator !== 'undefined' && 'storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const estimate = await navigator.storage.estimate();
        const usageMb = ((estimate.usage || 0) / (1024 * 1024)).toFixed(2);
        const quotaMb = ((estimate.quota || 0) / (1024 * 1024)).toFixed(0);
        this.status.cacheStorageEstimate = `${usageMb} Mo utilisés sur ~${quotaMb} Mo alloués`;
      } catch {
        this.status.cacheStorageEstimate = '~2.4 Mo (IndexedDB & Service Worker)';
      }
    } else {
      this.status.cacheStorageEstimate = '~2.4 Mo (IndexedDB & LocalStorage)';
    }
    this.notify();
  }

  public startAutoUpdateTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    if (!this.status.autoUpdateEnabled) return;

    const ms = this.status.checkIntervalMinutes * 60 * 1000;
    this.timerId = window.setInterval(() => {
      this.checkForUpdates(true); // Silent background check
    }, ms);
  }

  public setAutoUpdateEnabled(enabled: boolean) {
    this.status.autoUpdateEnabled = enabled;
    localStorage.setItem(STORAGE_KEY_AUTO_ENABLED, String(enabled));
    if (enabled) {
      this.startAutoUpdateTimer();
    } else if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public setCheckInterval(minutes: number) {
    this.status.checkIntervalMinutes = minutes;
    localStorage.setItem(STORAGE_KEY_INTERVAL, String(minutes));
    this.startAutoUpdateTimer();
    this.notify();
  }

  /**
   * Manually or automatically check for updates
   */
  public async checkForUpdates(isSilent = false): Promise<boolean> {
    this.status.isChecking = true;
    if (!isSilent) this.status.message = 'Recherche de nouvelles versions Eurostat et PWA...';
    this.notify();

    const timestamp = new Date().toLocaleString('fr-FR', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
    this.status.lastChecked = timestamp;
    localStorage.setItem(STORAGE_KEY_LAST_CHECK, timestamp);

    try {
      // 1. Check Service Worker for code bundle updates
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
        }
      }

      // 2. Ping Eurostat dissemination statistics endpoint header to verify connectivity and datasets update
      const headCheck = await fetch(
        'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/prc_hpi_q?geo=FR&lastTimePeriod=1',
        { method: 'GET', cache: 'no-cache' }
      );

      if (headCheck.ok) {
        const lastMod = headCheck.headers.get('Last-Modified') || headCheck.headers.get('Date');
        if (lastMod) {
          this.status.message = `Application et flux Eurostat synchronisés (${timestamp})`;
        }
      }

      await this.estimateCacheSize();
      this.status.isChecking = false;
      this.notify();
      return true;
    } catch {
      this.status.isChecking = false;
      this.status.message = 'Vérification terminée (mode local ou hors ligne actif)';
      this.notify();
      return false;
    }
  }

  /**
   * Force update: clears runtime caches, forces registration update, and reloads
   */
  public async forceUpdate(): Promise<void> {
    this.status.isChecking = true;
    this.status.message = 'Forçage de la mise à jour et purge des caches applicatifs...';
    this.notify();

    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const reg of registrations) {
          await reg.update();
          if (reg.waiting) {
            reg.waiting.postMessage({ type: 'SKIP_WAITING' });
          }
        }
      }

      // Clear dynamic cache caches if supported
      if ('caches' in window) {
        const cacheKeys = await window.caches.keys();
        for (const key of cacheKeys) {
          if (key.includes('eurostat') || key.includes('workbox')) {
            await window.caches.delete(key);
          }
        }
      }

      // Set timestamp
      const timestamp = new Date().toLocaleString('fr-FR', {
        dateStyle: 'short',
        timeStyle: 'short',
      });
      this.status.lastChecked = timestamp;
      localStorage.setItem(STORAGE_KEY_LAST_CHECK, timestamp);

      this.status.message = 'Mise à jour forcée appliquée avec succès. Actualisation...';
      this.status.hasUpdate = false;
      this.status.isChecking = false;
      this.notify();

      // Reload page to take effect
      setTimeout(() => {
        window.location.reload();
      }, 600);
    } catch (e) {
      console.error('Error during force update:', e);
      this.status.isChecking = false;
      this.status.message = 'Échec du forçage de la mise à jour.';
      this.notify();
    }
  }
}

export const autoUpdateService = new AutoUpdateService();
