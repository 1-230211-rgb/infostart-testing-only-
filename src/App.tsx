import React, { useState, useEffect } from 'react';
import { NavTab, Facility } from './types';
import { facilitiesData } from './data/orientationData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FacilityModal } from './components/FacilityModal';
import { GuidedTourModal } from './components/GuidedTourModal';
import { HowItWorksModal } from './components/HowItWorksModal';
import { AboutView } from './components/AboutView';
import { AdmissionView } from './components/AdmissionView';
import { PoliciesView } from './components/PoliciesView';
import { CampusMapView } from './components/CampusMapView';
import { DepartmentsView } from './components/DepartmentsView';
import { StudentServicesView } from './components/StudentServicesView';
import { CampusLifeView } from './components/CampusLifeView';
import { FAQView } from './components/FAQView';
import { ContactView } from './components/ContactView';
import { JaguarChatbot } from './components/JaguarChatbot';
import { WelcomePopupModal } from './components/WelcomePopupModal';
import { JaguarAboutSummaryModal } from './components/JaguarAboutSummaryModal';
import { FloatingJaguarGuide } from './components/FloatingJaguarGuide';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import asiatechLogo from './assets/images/asiatech_official_logo_1789702870781.jpg';
import { getCustomLogo } from './utils/mediaStorage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [customLogo, setCustomLogo] = useState<string | null>(getCustomLogo());
  // Starts at 35% to match the screenshot!
  const [progressPercent, setProgressPercent] = useState<number>(35);
  const [exploredFacilityIds, setExploredFacilityIds] = useState<string[]>(['library']);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isFacilityModalOpen, setIsFacilityModalOpen] = useState<boolean>(false);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  // Pops up with sudden bouncy excitement right after website opens!
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(false);
  // Jaguar About Us Summary Modal (pops up when clicking Let's Go!)
  const [isAboutSummaryOpen, setIsAboutSummaryOpen] = useState<boolean>(false);
  const [visitedTabs, setVisitedTabs] = useState<Set<NavTab>>(new Set(['home']));
  const [showCompletionBanner, setShowCompletionBanner] = useState<boolean>(false);

  useEffect(() => {
    // "Biglang mag-popop up" right as website opens
    const timer = setTimeout(() => {
      setIsWelcomeModalOpen(true);
    }, 400);

    const handleLogoUpdate = () => {
      setCustomLogo(getCustomLogo());
    };
    window.addEventListener('asiatech-logo-updated', handleLogoUpdate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('asiatech-logo-updated', handleLogoUpdate);
    };
  }, []);

  // When changing tabs, mark tab as visited and update progress slightly
  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!visitedTabs.has(tab)) {
      setVisitedTabs((prev) => {
        const next = new Set(prev);
        next.add(tab);
        return next;
      });
      setProgressPercent((prev) => Math.min(100, prev + 5));
    }
  };

  const handleOpenFacility = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsFacilityModalOpen(true);
  };

  const handleMarkExplored = (id: string) => {
    if (!exploredFacilityIds.includes(id)) {
      setExploredFacilityIds((prev) => [...prev, id]);
      setProgressPercent((prev) => {
        const updated = Math.min(100, prev + 10);
        if (updated >= 100) {
          setShowCompletionBanner(true);
        }
        return updated;
      });
    }
  };

  const handleCompleteTour = () => {
    setProgressPercent((prev) => {
      const updated = Math.min(100, prev + 25);
      if (updated >= 100) {
        setShowCompletionBanner(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 100% Completion Notification Banner */}
      {showCompletionBanner && (
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm animate-in slide-in-from-top duration-300">
          <Award className="w-4 h-4 text-yellow-300 animate-bounce" />
          <span>Congratulations! You have completed 100% of your Asiatech InfoStart 2026 Orientation!</span>
          <button 
            onClick={() => setShowCompletionBanner(false)}
            className="ml-3 underline text-emerald-200 hover:text-white text-xs cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Official Sticky Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        progressPercent={progressPercent}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HeroSection
            facilities={facilitiesData}
            onSelectFacility={handleOpenFacility}
            onStartTour={() => setIsTourOpen(true)}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
            onOpenWelcomeModal={() => setIsWelcomeModalOpen(true)}
            exploredFacilityIds={exploredFacilityIds}
          />
        )}

        {currentTab === 'about' && (
          <AboutView onOpenSummaryModal={() => setIsAboutSummaryOpen(true)} />
        )}
        {currentTab === 'admission' && <AdmissionView />}
        {currentTab === 'policies' && <PoliciesView />}
        {currentTab === 'map' && <CampusMapView />}
        {currentTab === 'departments' && <DepartmentsView />}
        {currentTab === 'services' && <StudentServicesView />}
        {currentTab === 'campus-life' && <CampusLifeView />}
        {currentTab === 'faq' && <FAQView />}
        {currentTab === 'contact' && <ContactView onNavigateToMap={() => handleSelectTab('map')} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <img
                  src={customLogo || asiatechLogo}
                  alt="Asiatech Logo"
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover border border-emerald-600/50 shadow-xs"
                />
                <span className="font-extrabold text-white text-lg tracking-tight">ASIATECH</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Asia Technological School of Science and Arts. InfoStart Official Orientation Gateway 2026.
              </p>
              <div className="font-serif italic text-emerald-400 text-xs">
                "Your key to global success!"
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Quick Navigation</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => handleSelectTab('home')} className="hover:text-emerald-400 transition-colors cursor-pointer">Home Overview</button></li>
                <li><button onClick={() => handleSelectTab('about')} className="hover:text-emerald-400 transition-colors cursor-pointer">About Us & Values</button></li>
                <li><button onClick={() => handleSelectTab('admission')} className="hover:text-emerald-400 transition-colors cursor-pointer">Admission & Enrollment</button></li>
                <li><button onClick={() => handleSelectTab('policies')} className="hover:text-emerald-400 transition-colors cursor-pointer">Policies & Uniforms</button></li>
                <li><button onClick={() => handleSelectTab('contact')} className="hover:text-emerald-400 transition-colors cursor-pointer">Contact & Hotlines</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Campus Hubs</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => handleSelectTab('map')} className="hover:text-emerald-400 transition-colors cursor-pointer">Interactive Campus Map</button></li>
                <li><button onClick={() => handleSelectTab('departments')} className="hover:text-emerald-400 transition-colors cursor-pointer">Academic Colleges</button></li>
                <li><button onClick={() => handleSelectTab('services')} className="hover:text-emerald-400 transition-colors cursor-pointer">Student Services</button></li>
                <li><button onClick={() => handleSelectTab('campus-life')} className="hover:text-emerald-400 transition-colors cursor-pointer">Campus Life & Clubs</button></li>
                <li><button onClick={() => handleSelectTab('faq')} className="hover:text-emerald-400 transition-colors cursor-pointer">Frequently Asked Questions</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Contact Directory</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                1506 National Highway, Brgy. Dila, Santa Rosa, Laguna
              </p>
              <p className="text-xs text-slate-400 mt-2">
                049 302-0477 / 530-2717<br />
                info@asiatech.edu.ph
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2026 Asia Technological School of Science and Arts (ASIATECH). All rights reserved.</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Accredited Student Portal
            </span>
          </div>
        </div>
      </footer>

      {/* Facility Detail Modal */}
      <FacilityModal
        facility={selectedFacility}
        isOpen={isFacilityModalOpen}
        onClose={() => setIsFacilityModalOpen(false)}
        isExplored={selectedFacility ? exploredFacilityIds.includes(selectedFacility.id) : false}
        onMarkExplored={handleMarkExplored}
        onOpenMapLocation={() => {
          handleSelectTab('map');
        }}
      />

      {/* Guided Tour Modal */}
      <GuidedTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onNavigateTab={handleSelectTab}
        onCompleteTour={handleCompleteTour}
      />

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onStartTour={() => {
          setIsHowItWorksOpen(false);
          setIsTourOpen(true);
        }}
      />

      {/* Immediate Mascot Welcome Popup (Pops up immediately on open) */}
      <WelcomePopupModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
        onStartTour={() => {
          setIsWelcomeModalOpen(false);
          handleSelectTab('about');
          setIsAboutSummaryOpen(true);
        }}
      />

      {/* Jaguar About Us Summary Modal (Pops up when clicking Let's Go!) */}
      <JaguarAboutSummaryModal
        isOpen={isAboutSummaryOpen}
        onClose={() => setIsAboutSummaryOpen(false)}
        onContinueTour={() => {
          setIsAboutSummaryOpen(false);
          setIsTourOpen(true);
        }}
        onExplorePage={() => {
          setIsAboutSummaryOpen(false);
          handleSelectTab('about');
        }}
      />

      {/* Floating Mascot with "Hi there!" Speech Bubble (floating like the chatbot on bottom left) */}
      <FloatingJaguarGuide
        onOpenWelcomeModal={() => setIsWelcomeModalOpen(true)}
        onStartTour={() => setIsTourOpen(true)}
        onOpenSummaryModal={() => setIsAboutSummaryOpen(true)}
      />

      {/* Floating Jaguar Chatbot & Guide (on bottom right) */}
      <JaguarChatbot />

    </div>
  );
}
