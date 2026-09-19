import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Volume2,
  ArrowRight,
  VolumeX,
  CheckCircle2,
  Lock,
} from 'lucide-react';

import jaguarVideoMp4 from '../assets/video/jaguar_video.mp4';
import jaguarWaving from '../assets/images/jaguar_waving.png';
import { saveVideoBlob, loadVideoBlob } from '../utils/mediaStorage';

interface WelcomePopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTour: () => void;
}

// Pleasant pop sound
const playPopSound = () => {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  } catch {
    // Fallback
  }
};

export const WelcomePopupModal: React.FC<WelcomePopupModalProps> = ({
  isOpen,
  onClose,
  onStartTour,
}) => {
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [uploadSuccessToast, setUploadSuccessToast] = useState<string | null>(null);

  // Speech completion state: Jaguar must finish speaking before "Let's Go!" and "Skip" become clickable
  const [hasFinishedSpeaking, setHasFinishedSpeaking] = useState<boolean>(false);
  const [speechProgress, setSpeechProgress] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(20);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const fullTranscript =
    "Welcome Asia Tech students! We're excited to have you as you begin this new chapter of your academic journey. I'm your Jaguar guide, and I'll help you discover everything you need to know about AsiaTech. Want a quick 1-minute tour of the website to find everything you need? Click 'Let's Go' to start the tour, or choose 'Skip' to explore on your own.";

  // Load persisted user video on initial mount if any
  useEffect(() => {
    loadVideoBlob().then((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        setCustomVideoUrl(url);
      }
    });
  }, []);

  // Play sound & video on modal open and reset speech state
  useEffect(() => {
    if (isOpen) {
      setHasFinishedSpeaking(false);
      setSpeechProgress(0);
      setRemainingSeconds(20);
      playPopSound();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        // Attempt unmuted play first
        videoRef.current.muted = isVideoMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsVideoPlaying(true))
            .catch(() => {
              // If browser blocked unmuted autoplay, start muted and allow user 1-click unmute
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsVideoMuted(true);
                videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
              }
            });
        }
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  // Video time update - track speech progress and unlock buttons when Jaguar finishes speaking
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration && duration > 0 && !isNaN(duration)) {
      const pct = Math.min(100, Math.max(0, (currentTime / duration) * 100));
      setSpeechProgress(pct);
      const remaining = Math.max(0, Math.ceil(duration - currentTime));
      setRemainingSeconds(remaining);

      // When Jaguar reaches the end of speech
      if (currentTime >= duration - 0.4) {
        setHasFinishedSpeaking(true);
      }
    }
  };

  // Video ended event - do NOT repeat or loop after speaking
  const handleVideoEnded = () => {
    setHasFinishedSpeaking(true);
    setSpeechProgress(100);
    setRemainingSeconds(0);
    setIsVideoPlaying(false);
    // Keep Jaguar at rest on the last frame, do not rewind or play again
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setRemainingSeconds(Math.ceil(videoRef.current.duration));
    }
  };

  const handleVideoError = () => {
    // Safety fallback: if video errors, unlock so user is never trapped
    setHasFinishedSpeaking(true);
  };

  const unmuteAndPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsVideoMuted(false);
      // If student was muted, rewind to start so they hear the full greeting from Jaguar
      if (!hasFinishedSpeaking) {
        videoRef.current.currentTime = 0;
        setSpeechProgress(0);
        if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
          setRemainingSeconds(Math.ceil(videoRef.current.duration));
        }
      }
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    }
  };

  // Clicking Jaguar never pauses the video. If Jaguar hasn't finished speaking and audio is muted, unmute and play.
  const handleJaguarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasFinishedSpeaking) return;
    if (isVideoMuted) {
      unmuteAndPlay();
    } else if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    }
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setSpeechProgress(0);
    setHasFinishedSpeaking(false);
    videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
  };

  const toggleVideoMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsVideoMuted(nextMuted);
    if (!nextMuted && videoRef.current.paused && !hasFinishedSpeaking) {
      videoRef.current.play().catch(() => {});
    }
  };

  // Handle uploaded MP4 video file
  const processVideoFile = (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Paki-pili ang MP4 o video file.');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setCustomVideoUrl(objectUrl);
    saveVideoBlob(file);

    setUploadSuccessToast(`Loaded: ${file.name}`);
    setTimeout(() => setUploadSuccessToast(null), 3500);

    // Unmute and play immediately
    setIsVideoMuted(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0;
        videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {
          // If browser policy blocks sound, play muted first
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsVideoMuted(true);
            videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
          }
        });
      }
    }, 100);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processVideoFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Subtle backdrop with click-outside to dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (hasFinishedSpeaking) {
                onClose();
              }
            }}
            className={`absolute inset-0 bg-slate-950/75 backdrop-blur-xs ${
              hasFinishedSpeaking ? 'cursor-pointer' : 'cursor-default'
            }`}
            title={hasFinishedSpeaking ? 'Click anywhere to close' : 'Please listen to Jaguar first'}
          />

          {/* Success toast when custom MP4 is inserted */}
          <AnimatePresence>
            {uploadSuccessToast && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="fixed top-6 z-50 flex items-center gap-2 bg-emerald-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-2xl border border-emerald-300 pointer-events-none"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>{uploadSuccessToast} is now playing!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* NO CONTAINER BOX! Exactly Jaguar Video & Connected Speech Bubble */}
          <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pointer-events-none">
            
            {/* 1. JAGUAR MP4 VIDEO (Frameless, NO BOX, standing freely) */}
            <motion.div
              initial={{ scale: 0.15, y: 150, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.2, y: 120, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative order-2 md:order-1 flex flex-col items-center flex-shrink-0 pointer-events-auto select-none group ${
                isDraggingOver ? 'ring-4 ring-emerald-400 rounded-3xl scale-105' : ''
              }`}
            >
              {/* Floating Sparkle Particles around Jaguar */}
              <div className="absolute -inset-10 pointer-events-none overflow-visible">
                <motion.div
                  animate={{ y: [0, -35], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 left-0 text-yellow-300 drop-shadow-md text-xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ y: [0, -45], opacity: [0, 1, 0], scale: [0.5, 1.4, 0.8] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute top-16 right-0 text-emerald-300 drop-shadow-md text-2xl"
                >
                  ⭐
                </motion.div>
                <motion.div
                  animate={{ y: [0, -30], opacity: [0, 0.9, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                  className="absolute bottom-16 left-4 text-white drop-shadow-md text-lg"
                >
                  ✨
                </motion.div>
              </div>

              {/* Video Player Display (Frameless, Clean Cutout Look with Drop Shadow) */}
              <div className="relative w-48 sm:w-60 md:w-72 lg:w-80 h-auto rounded-2xl overflow-hidden filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] select-none">
                <video
                  ref={videoRef}
                  src={customVideoUrl || jaguarVideoMp4}
                  autoPlay
                  muted={isVideoMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  onLoadedMetadata={handleLoadedMetadata}
                  onError={handleVideoError}
                  onClick={handleJaguarClick}
                  className="w-full h-auto max-h-[380px] sm:max-h-[460px] md:max-h-[500px] object-contain transition-transform duration-300 group-hover:scale-102"
                />

                {/* Click to Unmute banner if video started muted */}
                {isVideoMuted && !hasFinishedSpeaking && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      unmuteAndPlay();
                    }}
                    className="absolute top-3 inset-x-4 mx-auto max-w-[210px] bg-slate-950/85 hover:bg-emerald-700 text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-xl border border-white/25 flex items-center justify-center gap-1.5 backdrop-blur-md transition-all cursor-pointer animate-bounce"
                    title="Click to hear Jaguar's real voice"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>🔊 Click to Hear Voice</span>
                  </button>
                )}
              </div>
            </motion.div>


            {/* 2. THE SPEECH BUBBLE (Pointing directly to Jaguar) */}
            <motion.div
              initial={{ scale: 0.2, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.3, y: 40, opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="relative order-1 md:order-2 w-full max-w-md sm:max-w-lg bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-emerald-500/30 pointer-events-auto"
            >
              {/* Speech Bubble Pointer Tail (Desktop: points LEFT towards Jaguar) */}
              <div
                className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 
                  border-t-[14px] border-t-transparent
                  border-b-[14px] border-b-transparent
                  border-r-[16px] border-r-white
                  filter drop-shadow-[-3px_0px_2px_rgba(0,0,0,0.08)]"
              />

              {/* Speech Bubble Pointer Tail (Mobile: points DOWN towards Jaguar below) */}
              <div
                className="block md:hidden absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-0 h-0 
                  border-l-[14px] border-l-transparent
                  border-r-[14px] border-r-transparent
                  border-t-[14px] border-t-white
                  filter drop-shadow-[0px_3px_2px_rgba(0,0,0,0.08)]"
              />

              {/* Speech Bubble Content */}
              <div className="space-y-3.5">
                {/* Header Tag */}
                <div className="flex items-center gap-2 pr-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300/60">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    AsiaTech Jaguar
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Official Video Guide</span>
                </div>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Welcome, AsiaTech Students! 👋
                </h3>

                {/* Spoken Text Dialogue matching the video verbatim */}
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
                  <p>
                    We're excited to have you as you begin this new chapter of your academic journey!
                  </p>
                  <p>
                    I'm your <strong className="text-emerald-700 font-bold">Jaguar Guide</strong>, and I'll help you discover everything you need to know about AsiaTech.
                  </p>
                  <p className="text-emerald-900 font-semibold pt-1 border-t border-slate-100">
                    Want a quick 1-minute tour of the website to find everything you need?
                  </p>
                </div>

                {/* Audio Voice Player Toggle */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">
                    {!isVideoMuted ? 'Voice audio playing 🔊' : 'Audio is muted:'}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      if (isVideoMuted) {
                        unmuteAndPlay();
                      } else {
                        toggleVideoMute();
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                      !isVideoMuted
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300 animate-pulse'
                    }`}
                    title={!isVideoMuted ? 'Mute Video Voice' : 'Unmute Jaguar Voice'}
                  >
                    {!isVideoMuted ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Mute</span>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                        <span>Unmute Voice 🔊</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Action Buttons: DISABLED while Jaguar is still speaking */}
                <div className="pt-2">
                  {!hasFinishedSpeaking ? (
                    <div className="flex flex-col sm:flex-row items-center gap-2.5">
                      {/* Disabled Let's Go Button */}
                      <button
                        type="button"
                        disabled
                        className="w-full sm:flex-1 bg-slate-200/90 text-slate-400 font-bold text-sm sm:text-base px-5 py-3 rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed select-none border border-slate-300/60 transition-colors"
                      >
                        <Lock className="w-4 h-4 text-slate-400" />
                        <span>Let's Go!</span>
                      </button>

                      {/* Disabled Skip Button */}
                      <button
                        type="button"
                        disabled
                        className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 text-slate-400 font-bold text-xs sm:text-sm cursor-not-allowed select-none border border-slate-200"
                      >
                        Skip
                      </button>
                    </div>
                  ) : (
                    /* UNLOCKED & ACTIVE Buttons once finished speaking */
                    <motion.div
                      initial={{ scale: 0.96, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row items-center gap-2.5">
                        <button
                          onClick={() => {
                            onClose();
                            onStartTour();
                          }}
                          className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm sm:text-base px-5 py-3 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer ring-2 ring-emerald-400/50"
                        >
                          <span>Let's Go!</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            onClose();
                          }}
                          className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer text-center"
                        >
                          Skip
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
