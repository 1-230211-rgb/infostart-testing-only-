import React, { useState, useRef, useEffect } from 'react';
import { NavTab } from '../types';
import { 
  Home, 
  Info, 
  GraduationCap, 
  FileText, 
  Map, 
  Landmark, 
  Users, 
  Sparkles,
  HelpCircle,
  PhoneCall,
  Menu,
  X
} from 'lucide-react';
import asiatechLogo from '../assets/images/asiatech_official_logo_1789702870781.jpg';
import { getCustomLogo } from '../utils/mediaStorage';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  progressPercent: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  progressPercent,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customLogo, setCustomLogo] = useState<string | null>(getCustomLogo());

  useEffect(() => {
    const handleUpdate = () => {
      setCustomLogo(getCustomLogo());
    };
    window.addEventListener('asiatech-logo-updated', handleUpdate);
    return () => window.removeEventListener('asiatech-logo-updated', handleUpdate);
  }, []);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: 'about',
      label: 'About Us',
      icon: <Info className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 'admission',
      label: 'Admission',
      icon: <GraduationCap className="w-5 h-5 text-slate-700" />,
    },
    {
      id: 'policies',
      label: 'Policies',
      icon: <FileText className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'map',
      label: 'Campus Map',
      icon: <Map className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'departments',
      label: 'Departments',
      icon: <Landmark className="w-5 h-5 text-slate-700" />,
    },
    {
      id: 'services',
      label: 'Student Services',
      icon: <Users className="w-5 h-5 text-slate-800" />,
    },
    {
      id: 'campus-life',
      label: 'Campus Life',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'faq',
      label: 'FAQ',
      icon: <HelpCircle className="w-5 h-5 text-red-600" />,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <PhoneCall className="w-5 h-5 text-emerald-700" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
          <div 
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 select-none flex-shrink-0 cursor-pointer group"
          >
            {/* Official Asiatech Seal Logo */}
            <img
              src={customLogo || asiatechLogo}
              alt="Asia Technological School of Science and Arts Logo"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover shadow-sm border border-emerald-800/20 group-hover:scale-105 transition-transform duration-200"
              title="Asia Technological School of Science and Arts"
            />

            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#0f3b20] tracking-tight group-hover:text-[#166534] transition-colors leading-tight">
                Asiatech
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Orientation 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 lg:space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex flex-col items-center justify-center px-2 py-1.5 rounded-2xl transition-all duration-150 cursor-pointer min-w-[58px] ${
                    isActive
                      ? 'bg-[#14532d] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#14532d] hover:bg-slate-100/70'
                  }`}
                >
                  <div className={`mb-1 transition-transform ${isActive ? 'text-white' : ''}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-semibold whitespace-nowrap ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#14532d] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-[#14532d] text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className={isActive ? 'text-white' : ''}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
