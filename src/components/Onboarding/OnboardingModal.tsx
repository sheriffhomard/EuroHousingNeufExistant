import React, { useState } from 'react';
import {
  TrendingUp,
  Percent,
  Sparkles,
  Wifi,
  ChevronRight,
  ChevronLeft,
  X,
  Check,
} from 'lucide-react';
import { AppLogo } from '../Common/AppLogo';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      icon: TrendingUp,
      iconColor: 'text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-400',
      tag: 'Observatoire Européen',
      title: 'Bienvenue sur Euro Housing Data',
      subtitle: 'Comprendre et comparer les prix immobiliers et l’inflation en Europe',
      description:
        'Cette application web progressive (PWA) analyse les séries statistiques officielles d’Eurostat depuis le premier trimestre 2010 (2010-Q1) jusqu’aux données les plus récentes de 2025/2026. Explorez les trajectoires nationales et évaluez l’évolution réelle du pouvoir d’achat immobilier.',
    },
    {
      icon: Percent,
      iconColor: 'text-amber-600 bg-amber-100 dark:bg-amber-900/50 dark:text-amber-400',
      tag: 'Données Officielles',
      title: 'Double Indice Eurostat : HPI & HICP',
      subtitle: 'Prix résidentiels et inflation harmonisée à la consommation',
      description:
        'L’observatoire croise le House Price Index (prc_hpi_q) avec l’indice harmonisé des prix à la consommation (prc_hicp_midx). L’inflation mensuelle est agrégée en moyennes trimestrielles rigoureuses pour permettre une superposition mathématiquement exacte.',
    },
    {
      icon: Sparkles,
      iconColor: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 dark:text-emerald-400',
      tag: 'Analyse Économique',
      title: 'Calcul du HPI Réel & Rebasification',
      subtitle: 'Déduction nette de l’inflation & base 2015 ou 2010',
      description:
        'L’indice HPI Réel est obtenu par la formule : (HPI / HICP) × 100. Vous pouvez également rebaser dynamiquement les séries sur 2010=100 ou sur le début de la période observée pour visualiser les hausses nettes en un coup d’œil.',
    },
    {
      icon: Wifi,
      iconColor: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-400',
      tag: 'PWA & Hors-Ligne',
      title: 'Application Installable & Toujours Accessible',
      subtitle: 'Mises à jour automatiques en arrière-plan',
      description:
        'Installez Euro Housing Data sur votre ordinateur ou smartphone comme une application native. Grâce au cache IndexedDB et au Service Worker, toutes les données consultées restent disponibles même sans connexion internet. Le système se met à jour automatiquement en arrière-plan.',
    },
  ];

  const currentStep = steps[step];
  const IconComponent = currentStep.icon;

  const handleFinish = () => {
    localStorage.setItem('ehd_onboarding_completed', 'true');
    onClose();
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col relative animate-fade-in">
        {/* Top brand header */}
        <div className="p-6 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">
              Euro Housing Data
            </span>
          </div>

          <button
            onClick={handleFinish}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Passer la visite guidée"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Content */}
        <div className="px-6 py-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${currentStep.iconColor}`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {currentStep.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {currentStep.title}
              </h3>
            </div>
          </div>

          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {currentStep.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
            {currentStep.description}
          </p>

          {/* Stepper dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === step
                    ? 'w-7 bg-blue-600 dark:bg-blue-500'
                    : 'w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300'
                }`}
                aria-label={`Aller à l'étape ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={handleFinish}
            className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-medium transition cursor-pointer"
          >
            Passer
          </button>

          <div className="flex items-center gap-2">
            {step > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition shadow-xs cursor-pointer"
            >
              <span>{step === steps.length - 1 ? 'Commencer' : 'Suivant'}</span>
              {step === steps.length - 1 ? (
                <Check className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
