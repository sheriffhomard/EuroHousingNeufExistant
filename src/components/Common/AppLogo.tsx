import React from 'react';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = 'w-9 h-9', size = 36 }) => {
  return (
    <div
      className={`relative rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1"
      >
        {/* Subtle grid lines */}
        <line x1="15" y1="70" x2="85" y2="70" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="15" y1="30" x2="85" y2="30" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

        {/* European Stars arc */}
        <circle cx="50" cy="18" r="2.5" fill="#fde047" />
        <circle cx="38" cy="22" r="2" fill="#fde047" opacity="0.9" />
        <circle cx="62" cy="22" r="2" fill="#fde047" opacity="0.9" />
        <circle cx="28" cy="28" r="1.8" fill="#fde047" opacity="0.8" />
        <circle cx="72" cy="28" r="1.8" fill="#fde047" opacity="0.8" />

        {/* Housing outline */}
        <path
          d="M 24 55 L 50 32 L 76 55 V 76 H 24 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 43 76 V 58 H 57 V 76"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Surge growth trendline */}
        <polyline
          points="18,72 34,64 50,50 66,42 84,24"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Spark node point */}
        <circle cx="84" cy="24" r="3.5" fill="#fbbf24" />
        <circle cx="84" cy="24" r="6" fill="#fbbf24" opacity="0.35" />
      </svg>
    </div>
  );
};
