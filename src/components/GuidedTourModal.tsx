import React, { useState } from 'react';
import { tourStepsData } from '../data/orientationData';
import { NavTab } from '../types';
import { X, ArrowRight, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';
import mascotImg from '../assets/images/main_mascot_1788954625285.jpg';

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: NavTab) => void;
  onCompleteTour: () => void;
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onCompleteTour,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!isOpen) return null;

  const currentStep = tourStepsData[currentStepIndex];
  const isLastStep = currentStepIndex === tourStepsData.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onCompleteTour();
      onClose();
    } else {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      const nextStep = tourStepsData[nextIndex];
      if (nextStep.targetTab) {
        onNavigateTab(nextStep.targetTab);
      }
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      const prevStep = tourStepsData[prevIndex];
      if (prevStep.targetTab) {
        onNavigateTab(prevStep.targetTab);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Progress Bar */}
        <div className="bg-slate-100 h-1.5 w-full">
          <div 
            className="bg-[#15803d] h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentStepIndex + 1) / tourStepsData.length) * 100}%` }}
          />
        </div>

        {/* Header with Mascot */}
        <div className="p-6 pb-2 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shadow-xs flex-shrink-0">
              <img src={mascotImg} alt="Mascot" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase">
                Step {currentStep.step} of {tourStepsData.length}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 leading-tight mt-0.5">
                {currentStep.title}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-3 space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {currentStep.description}
          </p>

          {currentStep.highlightText && (
            <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 font-medium flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>{currentStep.highlightText}</span>
            </div>
          )}

          {/* Indicators */}
          <div className="flex justify-center gap-1.5 pt-2">
            {tourStepsData.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === currentStepIndex 
                    ? 'w-6 bg-[#14532d]' 
                    : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentStepIndex === 0 
                ? 'opacity-40 cursor-not-allowed text-slate-400' 
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#14532d] text-white hover:bg-[#0f3d20] shadow-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            {isLastStep ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Finish & Complete Tour (+25%)</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
