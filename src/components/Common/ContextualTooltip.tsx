import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, Info } from 'lucide-react';

interface ContextualTooltipProps {
  title: string;
  content: string;
  source?: string;
  formula?: string;
  icon?: 'help' | 'info';
  className?: string;
}

export const ContextualTooltip: React.FC<ContextualTooltipProps> = ({
  title,
  content,
  source,
  formula,
  icon = 'info',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  const IconComponent = icon === 'help' ? HelpCircle : Info;

  return (
    <div ref={containerRef} className={`relative inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="p-0.5 rounded-full text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-hidden cursor-pointer"
        aria-label={`Aide contextuelle : ${title}`}
      >
        <IconComponent className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <div
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 p-3 bg-slate-900/95 dark:bg-slate-900/95 text-white text-xs rounded-xl shadow-2xl border border-slate-700 backdrop-blur-md animate-fade-in pointer-events-none"
        >
          <div className="font-bold text-slate-100 flex items-center justify-between pb-1 mb-1 border-b border-slate-800">
            <span>{title}</span>
            {source && (
              <span className="text-[10px] text-blue-400 font-mono font-medium">
                {source}
              </span>
            )}
          </div>

          <p className="text-slate-300 text-[11px] leading-relaxed mb-1.5">
            {content}
          </p>

          {formula && (
            <div className="mt-1.5 p-1.5 rounded-md bg-slate-950 font-mono text-[10px] text-emerald-400 border border-slate-800 text-center">
              {formula}
            </div>
          )}

          {/* Pointer triangle */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
        </div>
      )}
    </div>
  );
};
