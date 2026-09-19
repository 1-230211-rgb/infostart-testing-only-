import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  X, 
  Volume2, 
  VolumeX, 
  Target, 
  Eye, 
  Shield, 
  Users, 
  Music, 
  ArrowRight,
  Compass,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import jaguarWaving from '../assets/images/jaguar_waving.png';
import jaguarThumbsUp from '../assets/images/jaguar_thumbsup.png';

interface JaguarAboutSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueTour?: () => void;
  onExplorePage?: () => void;
}

export const JaguarAboutSummaryModal: React.FC<JaguarAboutSummaryModalProps> = ({
  isOpen,
  onClose,
  onContinueTour,
  onExplorePage,
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [hasSpokenOnce, setHasSpokenOnce] = useState<boolean>(false);

  const narrationText = 
    "Roar! Mabuhay Asiatechian! Welcome to our About Us page. Let me give you a quick summary! " +
    "Asia Technological School of Science and Arts is located in Santa Rosa, Laguna, with our official motto: 'Your key to global success!'. " +
    "Our Mission is to ensure excellent instruction, research, and community service to develop globally competitive professionals. " +
    "Our Vision by 2035 is to be a premier academic institution developing competent, innovative, and values-driven graduates. " +
    "Everything we do is anchored on four core pillars: Competence, Character, Compassion, and Commitment. " +
    "Our experienced Academic Deans, Registrar, and support personnel are always here to assist you, and we take pride in singing our official Asiatech Hymn in gold and green. " +
    "Feel free to explore the full page or continue your orientation!";

  // Handle Speech Synthesis
  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(narrationText);
    utterance.rate = 1.0;
    utterance.pitch = 1.1; // energetic jaguar tone

    const voices = window.speechSynthesis.getVoices();
    const friendlyVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Natural') ||
          v.name.includes('Google') ||
          v.name.includes('Samantha') ||
          v.name.includes('David') ||
          v.name.includes('Female'))
    );
    if (friendlyVoice) {
      utterance.voice = friendlyVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setHasSpokenOnce(true);
  };

  // Attempt auto-speech or offer toggle on modal open
  useEffect(() => {
    if (isOpen) {
      // Small timeout to allow modal animation to settle
      const timer = setTimeout(() => {
        // Try gentle speech on open (browser may permit because user just clicked "Let's Go!")
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          try {
            handleSpeak();
          } catch {
            // fallback gracefully
          }
        }
      }, 400);

      return () => {
        clearTimeout(timer);
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
        }
      };
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    onClose();
  };

  const summaryPillars = [
    {
      id: 'identity',
      badge: 'Institution',
      title: 'School Profile & Motto',
      desc: 'Asia Technological School of Science and Arts in Santa Rosa, Laguna. Motto: "Your key to global success!"',
      icon: <Sparkles className="w-4 h-4 text-emerald-700" />,
      color: 'border-emerald-200 bg-emerald-50/70',
    },
    {
      id: 'mission',
      badge: 'Mission',
      title: 'High Quality Education',
      desc: 'To ensure excellent instruction, research, and community extension producing globally competitive professionals.',
      icon: <Target className="w-4 h-4 text-teal-700" />,
      color: 'border-teal-200 bg-teal-50/70',
    },
    {
      id: 'vision',
      badge: 'Vision 2035',
      title: 'Premiere Academic Institution',
      desc: 'To be a premier institution continuously developing highly competent, innovative, and values-driven Asiatechians.',
      icon: <Eye className="w-4 h-4 text-amber-700" />,
      color: 'border-amber-200 bg-amber-50/70',
    },
    {
      id: 'values',
      badge: '4 Core Pillars',
      title: 'Competence, Character, Compassion, Commitment',
      desc: 'Academic mastery, unyielding integrity, service to humanity, and dedication to nation-building.',
      icon: <Shield className="w-4 h-4 text-blue-700" />,
      color: 'border-blue-200 bg-blue-50/70',
    },
    {
      id: 'staff',
      badge: 'Leadership & Staff',
      title: 'Deans, Registrar, Finance & Clinic',
      desc: 'Full directory of Academic Deans and Administrative Officers ready to guide your enrollment and campus life.',
      icon: <Users className="w-4 h-4 text-indigo-700" />,
      color: 'border-indigo-200 bg-indigo-50/70',
    },
    {
      id: 'hymn',
      badge: 'Alma Mater Song',
      title: 'ASIATECH Hymn & Video',
      desc: 'Sing along in Aztec gold and emerald green: "Our Asiatech in gold and green, in prosperity we care, in prosperity we share."',
      icon: <Music className="w-4 h-4 text-purple-700" />,
      color: 'border-purple-200 bg-purple-50/70',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="relative z-10 bg-white rounded-3xl max-w-2xl w-full shadow-2xl border-2 border-emerald-600/30 overflow-hidden my-auto"
          >
            {/* Top Jaguar Mascot Stage & Header */}
            <div className="bg-gradient-to-r from-[#14532d] via-[#064e3b] to-[#14532d] text-white p-5 sm:p-6 relative overflow-hidden">
              {/* Subtle radial glow */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  {/* Popping Animated Jaguar Mascot */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [-1, 2, -1],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
                  >
                    <img
                      src={jaguarWaving}
                      alt="Asiatech Jaguar Guide"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase shadow-xs">
                      Guide
                    </span>
                  </motion.div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Jaguar's Quick Summary</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      What is ASIATECH All About? 🐆
                    </h3>
                    <p className="text-emerald-200 text-xs sm:text-sm mt-0.5">
                      Here's a condensed overview of our institution, values, and staff!
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors cursor-pointer flex-shrink-0"
                  title="Close summary"
                  aria-label="Close summary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Speech Bubble Narration & Audio Controls */}
              <div className="mt-4 bg-white/10 border border-white/20 rounded-2xl p-3 sm:p-3.5 backdrop-blur-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                  <span className="italic font-serif">
                    {isSpeaking
                      ? 'Jaguar is speaking: "Welcome to ASIATECH, your key to global success!..."'
                      : '"Click the voice button to hear me read this summary aloud!"'}
                  </span>
                </div>

                <button
                  onClick={handleSpeak}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    isSpeaking
                      ? 'bg-amber-400 text-slate-900 hover:bg-amber-300'
                      : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                  }`}
                  title={isSpeaking ? 'Mute voice' : 'Play voice summary'}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Stop Voice</span>
                      {/* Audio wave animation */}
                      <span className="flex items-center gap-0.5">
                        <span className="w-1 h-3 bg-slate-900 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-4 bg-slate-900 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-2 bg-slate-900 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>{hasSpokenOnce ? 'Replay Voice 🔊' : 'Listen to Jaguar 🔊'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Content: The 6 Summary Pillars */}
            <div className="p-4 sm:p-6 max-h-[58vh] overflow-y-auto space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {summaryPillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    className={`p-3.5 rounded-2xl border ${pillar.color} shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-600 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200/60">
                          {pillar.badge}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/70 flex items-center justify-center shadow-2xs">
                          {pillar.icon}
                        </div>
                      </div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Jaguar Tip Card */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-amber-300 bg-white shadow-2xs">
                  <img src={jaguarThumbsUp} alt="Jaguar Thumbs Up" className="w-full h-full object-contain" />
                </div>
                <div className="text-xs text-amber-950">
                  <span className="font-extrabold text-amber-900 block">Pro-Tip from Jaguar:</span>
                  <span>
                    You can watch the video accompaniment of our <strong>ASIATECH Hymn</strong> and view the direct email of all <strong>Academic Deans & Staff</strong> directly on this page!
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <button
                onClick={() => {
                  handleClose();
                  if (onExplorePage) onExplorePage();
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Explore Full About Us Page</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {onContinueTour && (
                  <button
                    onClick={() => {
                      handleClose();
                      onContinueTour();
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-slate-700" />
                    <span>Campus Tour</span>
                  </button>
                )}

                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-md"
                >
                  <span>Got it, Thanks Jaguar!</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
