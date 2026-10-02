import React from 'react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-600 text-white px-3.5 py-2 text-xs font-semibold shadow-xl border border-amber-500 animate-fade-in">
      <WifiOff className="w-4 h-4 animate-pulse" />
      <span>Mode hors ligne actif — Données Eurostat en cache local</span>
    </div>
  );
};
