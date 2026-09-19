import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';
import jaguarHalfBody from '../assets/images/jaguar_halfbody.png';

interface FloatingJaguarGuideProps {
  onOpenWelcomeModal: () => void;
  onStartTour?: () => void;
  onOpenSummaryModal?: () => void;
}

export const FloatingJaguarGuide: React.FC<FloatingJaguarGuideProps> = ({
  onOpenWelcomeModal,
  onStartTour,
  onOpenSummaryModal,
}) => {
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(true);

  return (
    <aside
      aria-label="Jaguar Guide"
      className="fixed bottom-0 left-0 z-40 flex items-end gap-1.5 sm:gap-2.5 select-none pointer-events-none"
    >
      {/* Floating Half-Body Transparent Mascot (Enlarged, hugging the left edge so words aren't covered) */}
      <motion.button
        type="button"
        onClick={onOpenWelcomeModal}
        animate={{
          y: [0, -6, 0, -3, 0],
          rotate: [-0.5, 1.2, -0.5, 0.8, -0.5],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative group cursor-pointer origin-bottom-left flex-shrink-0 -ml-1 sm:ml-0"
        title="Click Jaguar to open Welcome Video & Guide!"
        aria-label="Open Jaguar Welcome Guide"
      >
        {/* Half-Body Mascot PNG Image (Enlarged and hugged to edge) */}
        <div className="relative w-36 sm:w-44 md:w-52 lg:w-56 h-auto filter drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)]">
          <img
            src={jaguarHalfBody}
            alt="Asiatech Jaguar Mascot (Half Body)"
            className="w-full h-auto object-contain object-bottom transition-transform duration-300 group-hover:scale-104"
            draggable={false}
          />
        </div>

        {/* Floating Jaguar badge */}
        <div className="absolute bottom-1.5 inset-x-0 flex justify-center">
          <span className="px-2.5 py-0.5 rounded-full bg-[#14532d] text-white text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase shadow-lg border border-emerald-500/60 flex items-center gap-1 backdrop-blur-xs">
            <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
            <span>Jaguar</span>
          </span>
        </div>
      </motion.button>

      {/* Floating Speech Bubble (Placed beside Jaguar down low so it doesn't block text behind it) */}
      <AnimatePresence>
        {isBubbleVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: [0, -4, 0] }}
            exit={{ opacity: 0, scale: 0.85, x: -10 }}
            transition={{
              y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
              duration: 0.25,
            }}
            className="pointer-events-auto relative bg-white text-slate-900 rounded-2xl shadow-[0_12px_28px_-4px_rgba(0,0,0,0.22)] hover:shadow-2xl border-2 border-emerald-500/50 hover:border-emerald-600 px-3.5 py-2.5 sm:px-4 sm:py-3 max-w-[170px] sm:max-w-[200px] mb-3 sm:mb-4 cursor-pointer transition-all duration-200 group"
            onClick={onOpenWelcomeModal}
          >
            {/* Speech bubble pointer tail pointing LEFT directly towards Jaguar */}
            <div
              className="absolute -left-2 bottom-3.5 w-0 h-0 
                border-t-[6px] border-t-transparent 
                border-r-[8px] border-r-white 
                border-b-[6px] border-b-transparent 
                filter drop-shadow-[-2px_0px_1px_rgba(0,0,0,0.06)]"
            />

            {/* Small Dismiss / Close button for the bubble */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsBubbleVisible(false);
              }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors border border-slate-200 shadow-xs cursor-pointer"
              title="Close message"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Bubble Content */}
            <div className="flex items-center gap-1 text-slate-900 font-extrabold text-xs sm:text-sm">
              <span>Hi there!</span>
              <span className="text-sm animate-bounce inline-block">👋</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-snug group-hover:text-emerald-950 transition-colors">
              Click any icon to explore Asiatech!
            </p>
            {onOpenSummaryModal && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenSummaryModal();
                }}
                className="mt-2 w-full px-2 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-[10px] font-bold transition-colors text-center border border-emerald-300/60 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>About Us Summary 🐆</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
