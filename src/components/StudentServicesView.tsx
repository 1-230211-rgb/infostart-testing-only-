import React from 'react';
import { 
  Users, 
  Award,
  BookOpen, 
  HeartHandshake, 
  Activity, 
  HelpCircle,
  Coins, 
  Briefcase,
  MapPin,
  Mail,
  Clock
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  location: string;
  email: string;
  operatingHours: string;
  icon: React.ReactNode;
}

export const StudentServicesView: React.FC = () => {
  const services: ServiceItem[] = [
    // 1st Image Services
    {
      id: 'library',
      title: 'Presidential Library & Learning Commons',
      description: 'Features over 15,000 reference books, technical e-journals, collaborative study pods, and a high-speed research computer lab.',
      location: 'Main Building, 3rd Floor',
      email: 'library@asiatech.edu.ph',
      operatingHours: 'Mon - Sat: 8:00 AM - 5:00 PM',
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 'guidance',
      title: 'Guidance & Counseling Office',
      description: 'A quiet, confidential space offering peer counseling, mental health advocacy, stress management workshops, and career interest profiling.',
      location: 'Annex Building, Ground Floor',
      email: 'guidance@asiatech.edu.ph',
      operatingHours: 'Mon - Fri: 8:00 AM - 4:30 PM',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 'clinic',
      title: 'Campus Health & Wellness Clinic',
      description: 'Equipped to handle medical assessments and first-aid response, with a full-time resident nurse and regular physical checkups.',
      location: 'Main Building, 2nd Floor',
      email: 'clinic@asiatech.edu.ph',
      operatingHours: 'Mon - Sat: 7:30 AM - 6:00 PM',
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 'it-helpdesk',
      title: 'The IT Services & Portal Desk',
      description: 'Issues student RFID cards, configures school email accounts (@asiatech.edu.ph), and provides portal password resets.',
      location: 'Technical Lab Wing, 2nd Floor',
      email: 'ithelp@asiatech.edu.ph',
      operatingHours: 'Mon - Sat: 8:00 AM - 5:30 PM',
      icon: <HelpCircle className="w-6 h-6 text-emerald-600" />,
    },

    // 2nd Image Services
    {
      id: 'scholarship',
      title: 'Student Support & Scholarship Unit',
      description: 'Manages educational aid, financial grants (including UNIFAST and Tertiary Education Subsidy/TES), academic scholarships, and emergency student assistance services.',
      location: 'Main Building, 2nd Floor (Finance Office)',
      email: 'scholarships@asiatech.edu.ph',
      operatingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      icon: <Coins className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 'placement',
      title: 'ASIATECH Corporate Placement Unit',
      badge: 'CAREER DEVELOPMENT',
      description: "We guide students toward dynamic internship programs and local corporate placements in Laguna's Technoparks. Includes mock interview workshops and resume optimization courses.",
      location: 'Annex Wing, Ground Floor',
      email: 'careers@asiatech.edu.ph',
      operatingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
    },

    // Retained as instructed: OSA and SSC
    {
      id: 'osa',
      title: 'Office of Student Affairs (OSA)',
      badge: 'STUDENT WELFARE & DISCIPLINE',
      description: 'The umbrella body regulating student organizations, campus activities, leadership camps, student handbook implementation, and student welfare advocacy.',
      location: 'Room 104, Student Affairs Hall',
      email: 'osa@asiatech.edu.ph',
      operatingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      icon: <Users className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 'ssc',
      title: 'Supreme Student Council (SSC)',
      badge: 'STUDENT GOVERNANCE',
      description: 'The democratically elected student government advocating for student rights and welfare, organizing campus-wide events, and leading student initiatives.',
      location: 'Student Council Headquarters (Room 205)',
      email: 'ssc@asiatech.edu.ph',
      operatingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      icon: <Award className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#14532d] via-[#15803d] to-[#14532d] text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Official Campus Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Student Services & Welfare
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Access essential university offices, wellness centers, student governance, scholarships, and academic support dedicated to your success at Asiatech.
          </p>
        </div>
      </div>

      {/* Services Grid (Matches 1st and 2nd Image Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv) => (
          <div 
            key={srv.id} 
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
          >
            {/* Top row: Icon and Content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                {srv.icon}
              </div>

              <div className="space-y-1.5 flex-1">
                {srv.badge && (
                  <span className="inline-block bg-emerald-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-0.5">
                    {srv.badge}
                  </span>
                )}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </div>

            {/* Bottom metadata: Location, Email, Hours */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-y-1.5">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-medium text-slate-700">{srv.location}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <a 
                    href={`mailto:${srv.email}`} 
                    className="text-slate-600 hover:text-emerald-700 hover:underline transition-colors"
                  >
                    {srv.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Operating Hours: <strong className="text-slate-700">{srv.operatingHours}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
