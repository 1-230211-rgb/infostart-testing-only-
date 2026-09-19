import React from 'react';
import { X, CheckCircle, Compass, Award, BookOpen, Shield } from 'lucide-react';
import mascotImg from '../assets/images/main_mascot_1788954625285.jpg';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTour: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onStartTour,
}) => {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Navigate Through Campus Hubs',
      desc: 'Explore key offices like the Registrar, Library, Computer Labs, and Clinic to know where to submit credentials and get student support.',
      icon: <Compass className="w-5 h-5 text-emerald-700" />,
    },
    {
      num: '02',
      title: 'Master Policies & Dress Code',
      desc: 'Learn about official Asiatech uniforms, RFID ID scanning, Dean’s list criteria, and campus rules so you are fully prepared from day one.',
      icon: <Shield className="w-5 h-5 text-teal-700" />,
    },
    {
      num: '03',
      title: 'Complete Your 2026 Orientation',
      desc: 'Explore campus departments, understand university policies, and review FAQs to prepare for your Asiatech journey.',
      icon: <Award className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-b border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600 shadow-xs flex-shrink-0">
              <img src={mascotImg} alt="Jaguar" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                Freshman & Transferee Guide
              </div>
              <h3 className="text-xl font-black text-slate-900 leading-tight">
                How InfoStart Works 🎓
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            InfoStart is your interactive companion designed by the Asia Technological School of Science and Arts to streamline your college transition.
          </p>

          <div className="space-y-3 pt-1">
            {steps.map((st) => (
              <div key={st.num} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center flex-shrink-0">
                  {st.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="text-emerald-800 font-mono">{st.num}.</span>
                    <span>{st.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors"
          >
            Dismiss
          </button>

          <button
            onClick={() => {
              onClose();
              onStartTour();
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#14532d] text-white hover:bg-[#0f3d20] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Launch Orientation Tour</span>
          </button>
        </div>

      </div>
    </div>
  );
};
