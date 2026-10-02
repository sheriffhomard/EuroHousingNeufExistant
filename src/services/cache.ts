/**
 * IndexedDB & LocalStorage Cache Service for Eurostat Data
 */

const DB_NAME = 'EuroHousingDataCache';
const DB_VERSION = 1;
const STORE_NAME = 'eurostat_series';

export interface CachedSeriesRecord<T = unknown> {
  key: string;
  data: T;
  timestamp: number;
  source: 'api' | 'cache' | 'snapshot';
}

class CacheService {
  private dbPromise: Promise<IDBDatabase | null> | null = null;

  constructor() {
    this.initDb();
  }

  private initDb(): Promise<IDBDatabase | null> {
    if (this.dbPromise) return this.dbPromise;

    if (typeof window === 'undefined' || !window.indexedDB) {
      this.dbPromise = Promise.resolve(null);
      return this.dbPromise;
    }

    this.dbPromise = new Promise((resolve) => {
      try {
        const req = window.indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'key' });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => {
          console.warn('IndexedDB not available, falling back to localStorage');
          resolve(null);
        };
      } catch (e) {
        console.warn('IndexedDB error:', e);
        resolve(null);
      }
    });

    return this.dbPromise;
  }

  public async get<T>(key: string): Promise<CachedSeriesRecord<T> | null> {
    try {
      const db = await this.initDb();
      if (db) {
        return new Promise((resolve) => {
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(key);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => resolve(null);
        });
      }
    } catch {
      // Fallback to localStorage
    }

    try {
      const item = localStorage.getItem(`ehd_cache_${key}`);
      if (item) {
        return JSON.parse(item) as CachedSeriesRecord<T>;
      }
    } catch {
      // Ignore
    }

    return null;
  }

  public async set<T>(key: string, data: T, source: 'api' | 'cache' | 'snapshot' = 'api'): Promise<void> {
    const record: CachedSeriesRecord<T> = {
      key,
      data,
      timestamp: Date.now(),
      source,
    };

    try {
      const db = await this.initDb();
      if (db) {
        await new Promise<void>((resolve) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          store.put(record);
          tx.oncomplete = () => resolve();
          tx.onerror = () => resolve();
        });
        return;
      }
    } catch {
      // Fallback
    }

    try {
      localStorage.setItem(`ehd_cache_${key}`, JSON.stringify(record));
    } catch {
      // LocalStorage quota might be full
    }
  }

  public async clear(): Promise<void> {
    try {
      const db = await this.initDb();
      if (db) {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).clear();
      }
      Object.keys(localStorage)
        .filter((k) => k.startsWith('ehd_cache_'))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      // Ignore
    }
  }
}

export const cacheService = new CacheService();
