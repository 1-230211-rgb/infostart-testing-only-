import React from 'react';
import { Facility } from '../types';
import { 
  BookOpen, 
  Landmark, 
  Monitor, 
  Cross, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  Coins,
  GraduationCap,
  Award,
  Users,
  Building
} from 'lucide-react';
import campusBg from '../assets/images/campus_bg.jpg';

interface HeroSectionProps {
  facilities: Facility[];
  onSelectFacility: (facility: Facility) => void;
  onStartTour: () => void;
  onOpenHowItWorks: () => void;
  onOpenWelcomeModal?: () => void;
  exploredFacilityIds: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  facilities,
  onSelectFacility,
  onStartTour,
  onOpenHowItWorks,
  exploredFacilityIds,
}) => {
  // Key facilities for the hero grid (Library, Registrar, Computer Lab, Clinic)
  const coreFacilityIds = ['library', 'registrar', 'computer-lab', 'clinic'];
  const heroFacilities = facilities.filter(f => coreFacilityIds.includes(f.id));
  const otherFacilities = facilities.filter(f => !coreFacilityIds.includes(f.id));

  // Helper for card icons
  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'books':
        return (
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shadow-xs group-hover:scale-110 transition-transform">
            <BookOpen className="w-7 h-7" />
          </div>
        );
      case 'building':
        return (
          <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 shadow-xs group-hover:scale-110 transition-transform">
            <Landmark className="w-7 h-7" />
          </div>
        );
      case 'monitor':
        return (
          <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-800 shadow-xs group-hover:scale-110 transition-transform">
            <Monitor className="w-7 h-7" />
          </div>
        );
      case 'clinic':
        return (
          <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-red-600 shadow-xs group-hover:scale-110 transition-transform">
            <Cross className="w-7 h-7" />
          </div>
        );
      default:
        return (
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Sparkles className="w-7 h-7" />
          </div>
        );
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#133e25] border-b border-emerald-950/20 min-h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* Official Asiatech Campus Background Banner */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img 
          src={campusBg} 
          alt="Asiatech Campus Background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Balanced contrast overlay: preserves the authentic green-gold campus atmosphere while ensuring excellent text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/80 to-white/50 md:from-white/90 md:via-white/75 md:to-white/30 backdrop-blur-[0.3px]" />
      </div>

      {/* Main Content Container with safe bottom buffer for floating guides */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-28 sm:pb-36 w-full flex-grow flex flex-col justify-center space-y-12">
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/10 text-emerald-900 font-semibold text-xs mb-4 w-fit border border-emerald-800/15">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Official Student Portal • Academic Year 2026-2027</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#15532d] tracking-tight leading-[1.15]">
              Welcome to InfoStart
            </h1>

            {/* Official Asiatech Campaign Hashtags */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#14532d] text-white font-black text-xs sm:text-sm tracking-wide shadow-xs">
                #BeginHereinASIATECH
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-black text-xs sm:text-sm tracking-wide shadow-2xs">
                #YourKeytoGlobalSuccess
              </span>
            </div>

            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Congratulations on taking your first steps toward higher education! Asia Technological School of Science and Arts (ASIATECH) welcomes you. InfoStart is your official orientation gateway—specially made for new students, enrollees, and transferees to learn about campus guidelines, core course details, and active campus student life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="hero-start-tour-button"
                onClick={onStartTour}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#14532d] text-white font-bold text-base hover:bg-[#0f3d20] active:scale-98 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Start Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-how-it-works-button"
                onClick={onOpenHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-semibold text-base hover:bg-slate-50 border border-slate-300/80 shadow-xs hover:shadow-sm active:scale-98 transition-all duration-200 cursor-pointer"
              >
                <span>How It Works</span>
                <span className="text-lg">🎓</span>
              </button>
            </div>

            {/* Quick stats indicator */}
            <div className="mt-8 pt-6 border-t border-emerald-800/15 flex items-center gap-6 text-xs text-slate-600 font-medium">
              <div>
                <span className="font-bold text-emerald-900 text-sm">{exploredFacilityIds.length}</span> of {facilities.length} Campus Hubs Explored
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div>
                📍 Santa Rosa City, Laguna
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div>
                🐆 Home of the Jaguars
              </div>
            </div>
          </div>

          {/* Right Hero Column: Facility Grid (Based on Campus Map) */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {heroFacilities.map((facility) => {
                const isExplored = exploredFacilityIds.includes(facility.id);
                return (
                  <div
                    key={facility.id}
                    id={`hero-facility-${facility.id}`}
                    onClick={() => onSelectFacility(facility)}
                    className="group relative bg-white/90 hover:bg-white backdrop-blur-md border border-slate-200/80 hover:border-emerald-500 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer min-h-[165px]"
                  >
                    {isExplored && (
                      <span className="absolute top-2.5 right-2.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                        Explored ✓
                      </span>
                    )}

                    <div className="mb-3">
                      {renderFacilityIcon(facility.iconName)}
                    </div>

                    <span className="font-bold text-slate-800 text-base group-hover:text-emerald-900 transition-colors">
                      {facility.name}
                    </span>

                    <span className="text-[11px] text-slate-500 mt-1 line-clamp-1 font-medium">
                      {facility.location.split(',')[0]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* View More Facilities Button with updated hubs: Accounting, OSA, Canteen, Sports Gym */}
            {otherFacilities.length > 0 && (
              <div className="mt-4">
                <div className="bg-emerald-900/5 hover:bg-emerald-900/10 border border-emerald-900/10 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors">
                  <div className="text-xs font-semibold text-emerald-950 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>More hubs: Accounting, OSA, Canteen, Sports Gym</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {otherFacilities.map((f) => {
                      const displayName = 
                        f.name.includes('OSA') ? 'OSA' :
                        f.name === 'Accounting' ? 'Accounting' :
                        f.name === 'Canteen' ? 'Canteen' :
                        f.name.includes('Gym') ? 'Gym' : f.name.split(' ')[0];
                      return (
                        <button
                          key={f.id}
                          id={`btn-hub-${f.id}`}
                          onClick={() => onSelectFacility(f)}
                          className="text-[11px] font-bold bg-white px-2.5 py-1 rounded-lg border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-900 transition-colors shadow-2xs cursor-pointer"
                        >
                          {displayName}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* SECTION FROM 3RD SCREENSHOT: Official Freshmen Enrollment Lower Downpayment Advisory */}
        <div 
          id="home-freshmen-enrollment-advisory"
          className="relative z-10 bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-600/30 shadow-xl overflow-hidden"
        >
          {/* Top Green Accent Bar */}
          <div className="bg-gradient-to-r from-[#14532d] via-[#166534] to-[#14532d] text-white px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase">
                Asia Technological School of Science and Arts • Official Advisory
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-100 font-bold">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Monday to Friday: 8:00 AM – 5:00 PM</span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Announcement Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                  <span>To all future ASIATECHIANS, this is for you! 🐆</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Secure Your Enrollment with a <span className="text-emerald-700 underline decoration-amber-400 decoration-4">Lower Downpayment!</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Starting today, you may enroll with a lower minimum down payment for your college journey here at ASIATECH. Don't miss this opportunity, future Asiatechians! Visit us every Monday to Friday, 8:00 AM to 5:00 PM.
                </p>

                {/* 4 Core Pillars from 3rd Screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase">Career-Focused Education</h4>
                      <p className="text-[11px] text-slate-600">Industry-aligned curricula with technopark partnerships</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase">Student-Centered Environment</h4>
                      <p className="text-[11px] text-slate-600">Modern labs, active collegiate clubs, and hands-on faculty</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase">High Quality & Reasonable Tuition</h4>
                      <p className="text-[11px] text-slate-600">Affordable payment terms with no hidden surprise fees</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase">Scholarships & Academic Discounts</h4>
                      <p className="text-[11px] text-slate-600">UniFAST, TES, honor student grants, and sibling discounts</p>
                    </div>
                  </div>
                </div>

                {/* Official Hashtags & Social Handles */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <span className="font-extrabold text-xs text-emerald-800">
                    #BeginHereinASIATECH
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="font-extrabold text-xs text-amber-700">
                    #YourKeytoGlobalSuccess
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-medium">
                    Follow @ASIATECH.official & @ASIATECHtv
                  </span>
                </div>
              </div>

              {/* Right Column: Prominent Rate Card & Action (matching graphic) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-[#14532d] to-[#0f3d20] text-white rounded-2xl p-7 sm:p-8 text-center shadow-lg border border-emerald-700/50 space-y-6">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-black tracking-wider uppercase shadow-xs">
                    SPECIAL FRESHMEN ADVISORY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    MINIMUM DOWN PAYMENT
                  </h3>
                  <p className="text-xs text-emerald-200">
                    For all incoming Freshmen Students (A.Y. 2026-2027)
                  </p>
                </div>

                <div className="py-5 px-6 rounded-2xl bg-white text-slate-900 shadow-inner space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                    Starting At Only
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-[#14532d] tracking-tight">
                    ₱ 1,500<span className="text-2xl font-bold">.00</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                    Enrollment is Still Ongoing
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-emerald-100 flex items-center justify-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-300" />
                    <span>Visit the Admissions & Accounting Offices at the Ground Floor</span>
                  </div>
                  <p className="text-[11px] text-emerald-200/80">
                    Monday to Friday, 8:00 AM – 5:00 PM • Bring your Form 138 / Report Card & PSA Birth Certificate
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

