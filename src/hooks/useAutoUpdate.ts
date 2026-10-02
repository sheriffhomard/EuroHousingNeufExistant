import { useState, useEffect } from 'react';
import { autoUpdateService, UpdateStatus } from '../services/autoUpdateService';

export function useAutoUpdate() {
  const [status, setStatus] = useState<UpdateStatus>(autoUpdateService.getStatus());

  useEffect(() => {
    const unsubscribe = autoUpdateService.subscribe(setStatus);
    return () => unsubscribe();
  }, []);

  return {
    ...status,
    checkForUpdates: () => autoUpdateService.checkForUpdates(false),
    forceUpdate: () => autoUpdateService.forceUpdate(),
    setAutoUpdateEnabled: (enabled: boolean) => autoUpdateService.setAutoUpdateEnabled(enabled),
    setCheckInterval: (minutes: number) => autoUpdateService.setCheckInterval(minutes),
  };
}
