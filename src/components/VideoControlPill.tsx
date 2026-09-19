import React, { useRef } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX, Upload } from 'lucide-react';

interface VideoControlPillProps {
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onRestart: () => void;
  onToggleMute: () => void;
  onVideoSelected: (file: File) => void;
  className?: string;
}

export const VideoControlPill: React.FC<VideoControlPillProps> = ({
  isPlaying,
  isMuted,
  onTogglePlay,
  onRestart,
  onToggleMute,
  onVideoSelected,
  className = '',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onVideoSelected(file);
      // Reset input value so re-selecting the same file also triggers
      e.target.value = '';
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-[#111827]/95 hover:bg-[#0f172a] border border-slate-700/70 shadow-2xl backdrop-blur-md text-white select-none transition-all ${className}`}
    >
      {/* Play / Pause Toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onTogglePlay();
        }}
        className="p-0.5 text-white/90 hover:text-white transition-colors cursor-pointer"
        title={isPlaying ? 'Pause' : 'Play'}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 fill-current" />
        )}
      </button>

      {/* Replay / Restart */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRestart();
        }}
        className="p-0.5 text-white/90 hover:text-white transition-colors cursor-pointer"
        title="Restart video from beginning"
        aria-label="Restart video"
      >
        <RotateCcw className="w-4 h-4" />
      </button>

      {/* Volume Mute / Unmute (Mint green as in user screenshot) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleMute();
        }}
        className="p-0.5 text-[#10b981] hover:text-[#34d399] transition-colors cursor-pointer"
        title={isMuted ? 'Unmute sound' : 'Mute sound'}
        aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-amber-400" />
        ) : (
          <Volume2 className="w-4 h-4 text-[#10b981]" />
        )}
      </button>

      {/* Subtle Vertical Divider */}
      <div className="h-4 w-[1px] bg-slate-700/80" />

      {/* Insert MP4 Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }}
        className="inline-flex items-center gap-1.5 text-[#10b981] hover:text-[#34d399] font-bold text-sm tracking-tight transition-colors cursor-pointer"
        title="Upload your MP4 video for Jaguar"
        aria-label="Insert MP4 video"
      >
        <Upload className="w-4 h-4" />
        <span>Insert MP4</span>
      </button>

      {/* Hidden File Input for video selection */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
