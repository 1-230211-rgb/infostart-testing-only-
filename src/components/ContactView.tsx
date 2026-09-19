import React, { useState } from 'react';
import { 
  Phone, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Flame, 
  Check, 
  Copy, 
  Building2, 
  AlertOctagon,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

interface ContactViewProps {
  onNavigateToMap?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const emergencyHotlines = [
    {
      id: 'bfp',
      name: 'Santa Rosa Bureau of Fire Protection',
      number: '049 534-1122',
      telLink: 'tel:0495341122',
      badge: 'City Fire Department',
      icon: Flame,
      accent: 'red',
      description: 'Municipal fire suppression command, disaster management, and safety drills coordination.'
    },
    {
      id: 'police',
      name: 'Santa Rosa Emergency Police Dept',
      number: '049 530-0166',
      telLink: 'tel:0495300166',
      badge: 'Philippine National Police (PNP)',
      icon: ShieldAlert,
      accent: 'amber',
      description: 'City emergency police dispatch, public safety monitoring, and community protection.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#14532d] to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-800/60 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Institutional Communications & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Contact & Emergency Directory
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Get in touch with the official administrative offices of ASIATECH or immediately reach our on-campus and municipal emergency hotlines.
          </p>
        </div>
      </div>

      {/* Main Directory & Hotlines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact Directory (5th image info) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6 text-[#14532d]" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Official Campus Headquarters
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Contact Directory
                </h3>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-emerald-700" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Campus Address
                </span>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  1506 National Highway, Brgy. Dila, Santa Rosa, Laguna
                </p>
                <span className="text-xs text-slate-500 block">
                  Philippines 4026
                </span>
              </div>
            </div>

            {/* Telephone Lines */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-emerald-700" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Trunklines / Telephone
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="tel:0493020477"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-900 hover:text-emerald-800 text-xs font-bold border border-slate-200 hover:border-emerald-300 transition-colors"
                  >
                    <span>049 302-0477</span>
                  </a>
                  <a
                    href="tel:0495302717"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-900 hover:text-emerald-800 text-xs font-bold border border-slate-200 hover:border-emerald-300 transition-colors"
                  >
                    <span>530-2717</span>
                  </a>
                  <button
                    onClick={() => handleCopy('049 302-0477 / 530-2717', 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Copy phone numbers"
                  >
                    {copiedText === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-emerald-700" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  General Inquiries & Admissions
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:info@asiatech.edu.ph"
                    className="text-sm font-bold text-emerald-800 hover:underline hover:text-emerald-900 break-all"
                  >
                    info@asiatech.edu.ph
                  </a>
                  <button
                    onClick={() => handleCopy('info@asiatech.edu.ph', 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Office Operating Hours */}
            <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-slate-600" />
              </div>
              <div className="space-y-1 text-xs">
                <span className="font-bold uppercase tracking-wider text-slate-400 block">
                  Office Hours
                </span>
                <p className="font-semibold text-slate-800">
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
                <p className="text-slate-500">
                  Saturday: 8:00 AM – 12:00 PM (Registrar & Accounting)
                </p>
              </div>
            </div>

            {/* Social Channels (From Institutional Notice) */}
            <div className="pt-4 border-t border-slate-100">
              <div className="bg-[#262626] text-white rounded-2xl p-4 sm:p-5 border border-neutral-700/90 shadow-sm space-y-3">
                <div>
                  <span className="text-[11px] font-black text-amber-400 uppercase tracking-wider block">
                    SOCIAL CHANNELS
                  </span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Follow us on social media for fast updates and storm suspensions:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://facebook.com/ASIATECHofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 text-slate-200 hover:text-white border border-neutral-700 hover:border-blue-400 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span>@ASIATECHofficial</span>
                  </a>

                  <a
                    href="https://instagram.com/ASIATECHofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 text-slate-200 hover:text-white border border-neutral-700 hover:border-pink-400 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>@ASIATECHofficial</span>
                  </a>

                  <a
                    href="https://youtube.com/@ASIATECHofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 text-slate-200 hover:text-white border border-neutral-700 hover:border-red-400 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>ASIATECH TV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Emergency Hotlines & Evacuation Protocols */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Emergency Evacuation Safety Banner */}
          <div className="bg-red-50/90 border-2 border-red-200 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-200/80 text-red-900 text-[10px] font-black uppercase tracking-wider">
                  Important Emergency Safety Directive
                </span>
                <h3 className="text-lg sm:text-xl font-black text-red-950 leading-snug">
                  Emergency Evacuation Assembly Points
                </h3>
                <p className="text-xs sm:text-sm text-red-900/90 font-medium leading-relaxed">
                  Emergency evacuation assembly points are located at the <strong className="font-extrabold text-red-950 underline decoration-red-400">ASIATECH Green Oval Field</strong>. Avoid elevator usage during tremors or fire emergency drills.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Hotlines Title */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Immediate Response Lines
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <PhoneCall className="w-6 h-6 text-red-600" />
              <span>Emergency Hotlines</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              For on-campus emergencies, medical aid, or city disaster response, contact these dispatch lines immediately.
            </p>
          </div>

          {/* Hotlines Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emergencyHotlines.map((hotline) => {
              const IconComponent = hotline.icon;
              return (
                <div
                  key={hotline.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-slate-800" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wide">
                        {hotline.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-black text-slate-900 text-sm leading-tight">
                        {hotline.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {hotline.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Hotline Number
                      </span>
                      <span className="font-black text-base text-slate-900 tracking-tight">
                        {hotline.number}
                      </span>
                    </div>
                    <a
                      href={hotline.telLink}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-800 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
                      title={`Call ${hotline.number}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
