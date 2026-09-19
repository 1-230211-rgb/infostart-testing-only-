import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Music, 
  Copy, 
  Check, 
  ExternalLink,
  Users,
  Search,
  BookOpen
} from 'lucide-react';
import mascotImg from '../assets/images/main_mascot_1788954625285.jpg';
import heroBanner from '../assets/images/about_hero_banner.svg';

interface StaffEntry {
  name: string;
  role: string;
}

interface DepartmentGroup {
  id: string;
  name: string;
  members: StaffEntry[];
}

interface AboutViewProps {
  onOpenSummaryModal?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenSummaryModal }) => {
  const [copied, setCopied] = useState(false);
  const [searchStaff, setSearchStaff] = useState('');

  const hymnLyrics = `Alma Mater Song
ASIATECH Hymn

We are here in Asiatech
With Faith in God and Integrity
To be globally competitive
Filipino workforce in harmony
Education with high quality
For the service of humanity
Leadership with dignity
For the development of our country

So we proclaim to the world
In honor of our Alma Mater
Our Asiatech in gold and green
In prosperity we care

We unite in Asiatech
With the grace of God and humility
To be highly skilled and innovative
As citizens we are productive
Education with excellence
The mission our school is giving
Uplifting our lives to prosperity
For the progress of our country

Our Asiatech in gold and green
In prosperity we care
In prosperity we share.`;

  const handleCopyLyrics = () => {
    navigator.clipboard.writeText(hymnLyrics).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {});
  };

  // Core Values spelling ASIATECHIAN
  const coreValues = [
    {
      letter: 'A',
      title: 'Accountable',
      desc: 'Taking responsibility for one\'s actions, decisions, and outcomes with high integrity and transparency.',
    },
    {
      letter: 'S',
      title: 'Service-Oriented',
      desc: 'Dedicated to compassionate community involvement, selfless assistance, and service to the nation.',
    },
    {
      letter: 'I',
      title: 'Innovative',
      desc: 'Embracing creative problem-solving, technological advancement, and modern academic exploration.',
    },
    {
      letter: 'A',
      title: 'Adaptive',
      desc: 'Resilient and agile in evolving landscapes, turning challenges into meaningful growth opportunities.',
    },
    {
      letter: 'T',
      title: 'Team-oriented',
      desc: 'Working collaboratively in unity, mutual respect, and synergy across disciplines and cultures.',
    },
    {
      letter: 'E',
      title: 'Efficient',
      desc: 'Achieving optimal outcomes through discipline, resourcefulness, precision, and diligent execution.',
    },
    {
      letter: 'C',
      title: 'Committed',
      desc: 'Steadfast dedication to academic quality, personal mastery, and institutional progress.',
    },
    {
      letter: 'H',
      title: 'Honest',
      desc: 'Upholding truthfulness, ethical practice, and sincerity in all professional and personal dealings.',
    },
    {
      letter: 'I',
      title: 'Industrious',
      desc: 'Hardworking, persistent, and consistently striving for excellence in every academic and societal duty.',
    },
    {
      letter: 'A',
      title: 'Articulate',
      desc: 'Communicating ideas with eloquence, clarity, conviction, and refined professional polish.',
    },
    {
      letter: 'N',
      title: 'Noble',
      desc: 'Exemplifying moral dignity, honor, humility, and righteous character in everyday life.',
    },
  ];

  // Official Credentials and Accreditations
  const accreditations = [
    {
      badgeText: 'DEPED',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
      title: 'DepEd Recognized',
      subhead: 'BASIC EDUCATION PROGRAMS',
      description: 'Fully authorized by the Department of Education to offer primary and secondary education programs, ensuring a strong academic foundation.',
      footerTag: 'K-12 Compliant',
      dotColor: 'bg-blue-500',
    },
    {
      badgeText: 'TESDA',
      badgeColor: 'text-rose-600 bg-rose-50 border-rose-200',
      title: 'TESDA Accredited',
      subhead: 'TECHNICAL-VOCATIONAL COURSES',
      description: 'Certified vocational courses equipping students with practical, high-value, and job-ready technical skills in key industries.',
      footerTag: 'Skills Certified',
      dotColor: 'bg-rose-500',
    },
    {
      badgeText: 'CHED',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      title: 'CHED Certified',
      subhead: 'COLLEGE DEGREE PROGRAMS',
      description: 'Approved tertiary college courses providing globally competitive training, robust academic research, and degree certifications.',
      footerTag: 'Degree-Granting',
      dotColor: 'bg-emerald-500',
    },
  ];

  // Administration and Staff Departments
  const departmentGroups: DepartmentGroup[] = [
    {
      id: 'academic-affairs',
      name: 'ACADEMIC AFFAIRS',
      members: [
        { name: 'DR. MARMELO V. ABANTE', role: 'VICE PRESIDENT FOR ACADEMIC AFFAIRS' },
      ],
    },
    {
      id: 'school-ops',
      name: 'SCHOOL OPERATIONS DEPARTMENT',
      members: [
        { name: 'DR. SHELALIN G. MANARIN', role: 'VICE PRESIDENT FOR OPERATIONS' },
        { name: 'ALFREDO T. ORTIZ', role: 'ASSISTING STAFF' },
        { name: 'RONNIE N. LAGAJINO', role: 'ASSISTING STAFF' },
      ],
    },
    {
      id: 'finance-dept',
      name: 'FINANCE DEPARTMENT',
      members: [
        { name: 'DR. DARLE JOY B. ESCUTON', role: 'VICE PRESIDENT FOR FINANCE' },
      ],
    },
    {
      id: 'hr-dept',
      name: 'HR DEPARTMENT',
      members: [
        { name: 'AILYN BARROSO, MBA, LPT, PhD', role: 'HUMAN RESOURCE DIRECTOR' },
        { name: 'MARBERT L. BARRIENTOS', role: 'SSD OFFICER' },
        { name: 'ALFREDO T. ORTIZ', role: 'ASSISTING STAFF' },
        { name: 'RONNIE N. LAGAJINO', role: 'ASSISTING STAFF' },
      ],
    },
    {
      id: 'marketing-dept',
      name: 'MARKETING DEPARTMENT',
      members: [
        { name: 'CRESELITO G. INDINO, MBA', role: 'MARKETING DIRECTOR' },
        { name: 'RONNEL P. GUARINO', role: 'DIGITAL MARKETING OFFICER' },
      ],
    },
    {
      id: 'support-services',
      name: 'SUPPORT SERVICES DEPARTMENT',
      members: [
        { name: 'JOEL R. LAFUENTE, MBA', role: 'SUPPORT SERVICES DIRECTOR' },
        { name: 'JANICE O. DEL MUNDO', role: 'GUIDANCE COUNSELOR' },
        { name: 'JOEMARI S. SABAO', role: 'IT ADMINISTRATOR' },
        { name: 'KATE PEÑA', role: 'SCHOOL NURSE' },
      ],
    },
    {
      id: 'school-library',
      name: 'SCHOOL LIBRARY',
      members: [
        { name: 'EVELYN M. HIPOLITO, MSIS', role: 'LIBRARIAN' },
        { name: 'NERI G. IYOY', role: 'LIBRARY STAFF' },
      ],
    },
    {
      id: 'accounting-office',
      name: 'ACCOUNTING OFFICE',
      members: [
        { name: 'ELLAINE CHRISNA S. LEYNES', role: 'ACCOUNTING STAFF' },
        { name: 'MAY R. HUERGULA', role: 'ACCOUNTING STAFF' },
        { name: 'OLIVIA B. TIONGCO', role: 'CASHIER' },
      ],
    },
    {
      id: 'registrar-dept',
      name: 'REGISTRAR DEPARTMENT',
      members: [
        { name: 'MERCEDES F. EUSOYA, MBA', role: 'REGISTRAR' },
        { name: 'MARIEL ANN D. MOLINA', role: 'ASSISTANT REGISTRAR – COLLEGE DEPARTMENT' },
        { name: 'MA. CHARLENE F. DE GUZMAN', role: 'REGISTRAR STAFF – COLLEGE DEPARTMENT' },
        { name: 'JEROME C. PEREZ', role: 'REGISTRAR STAFF – BASIC EDUCATION DEPARTMENT' },
        { name: 'ELIZABETH BUHAY', role: 'REGISTRAR STAFF – BASIC EDUCATION DEPARTMENT' },
      ],
    },
    {
      id: 'cbhtm',
      name: 'COLLEGE OF BUSINESS, HOSPITALITY AND TOURISM MANAGEMENT',
      members: [
        { name: 'PROF. EDUARDO B. TUQUILAR, MBA', role: 'DEAN, CBHTM' },
        { name: 'MARIGRACE R. RAMOS, MBA', role: 'BSTM, BSHM PROGRAM CHAIR' },
        { name: 'PROF. LANI D. DEADA, PH.D., LPT', role: 'FACULTY' },
      ],
    },
    {
      id: 'ceite',
      name: 'COLLEGE OF ENGINEERING AND INFORMATION TECHNOLOGY EDUCATION',
      members: [
        { name: 'PROF. ROZAIDA C. TUAZON', role: 'OIC DEAN, CEITE & BSIT PROGRAM CHAIR' },
        { name: 'ENGR. ROBERT ALLAN G. DIMARANAN', role: 'ENGINEERING FACULTY / PROGRAM LEAD' },
      ],
    },
    {
      id: 'ceas',
      name: 'COLLEGE OF EDUCATION, ARTS AND SCIENCE',
      members: [
        { name: 'DR. MARMELO V. ABANTE', role: 'DEAN, CEAS' },
        { name: 'PROF. ANA ROSE D. LIM, MAED, LPT', role: 'BSED PROGRAM CHAIR' },
      ],
    },
    {
      id: 'coa',
      name: 'COLLEGE OF ACCOUNTANCY',
      members: [
        { name: 'DR. DARLE JOY B. ESCUTON', role: 'BSA PROGRAM CHAIR' },
      ],
    },
    {
      id: 'osa',
      name: 'OFFICE OF THE STUDENT AFFAIRS',
      members: [
        { name: 'PROF. LANI D. DEADA, Ph.D, LPT', role: 'DIRECTOR, OSA' },
        { name: 'SSC PRESIDENT AND OFFICERS', role: 'SUPREME STUDENT COUNCIL' },
        { name: 'SSG PRESIDENT AND OFFICERS', role: 'SUPREME STUDENT GOVERNMENT' },
        { name: 'CLUBS AND ORGANIZATIONS', role: 'RECOGNIZED STUDENT ORGANIZATIONS' },
      ],
    },
    {
      id: 'research-lms',
      name: 'RESEARCH AND LEARNING MANAGEMENT SYSTEM',
      members: [
        { name: 'DR. RHOWEL DELLOSA', role: 'LMS DIRECTOR' },
      ],
    },
  ];

  const filteredDepartments = departmentGroups.map(dept => {
    const query = searchStaff.toLowerCase().trim();
    if (!query) return dept;
    const matchesDept = dept.name.toLowerCase().includes(query);
    const matchedMembers = dept.members.filter(m => 
      m.name.toLowerCase().includes(query) || m.role.toLowerCase().includes(query)
    );
    if (matchesDept) return dept;
    if (matchedMembers.length > 0) return { ...dept, members: matchedMembers };
    return null;
  }).filter((dept): dept is DepartmentGroup => dept !== null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Banner with Custom Background Image & Live Overlay Text */}
      <div id="about-hero-banner-container" className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[340px] flex items-center p-8 sm:p-12 text-white bg-[#064e3b] group">
        {/* Background Image Layer */}
        <img
          id="about-hero-banner-bg-img"
          src={heroBanner}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Subtle Gradient Overlay for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-emerald-950/50 z-0 pointer-events-none" />

        {/* Live Content Layer (Stay lang ang mga nakasulat) */}
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-4">
            Institutional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Asia Technological School of Science and Arts
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-emerald-200 mt-3">
            "Your key to global success!"
          </p>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Located in the heart of Santa Rosa City, Laguna, ASIATECH is committed to providing industry-relevant education in computing, technology, business, tourism, hospitality, and secondary education, producing globally competitive graduates.
          </p>

          {onOpenSummaryModal && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                id="btn-hear-jaguar-summary"
                onClick={onOpenSummaryModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <span>Hear Jaguar's Quick Summary 🐆</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 border-l-4 border-l-emerald-700 shadow-xs flex flex-col justify-start">
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-md text-xs font-bold text-emerald-800 bg-emerald-100/90 tracking-wider uppercase">
              MISSION
            </span>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            To ensure excellent instruction, research and community extension for the overall development of Asiatechian committed in practicing professionalism and in meeting the demands of local, national and global communities
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 border-l-4 border-l-amber-400 shadow-xs flex flex-col justify-start">
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-md text-xs font-bold text-emerald-800 bg-amber-100/90 tracking-wider uppercase">
              VISION
            </span>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            By 2035, Asiatech is one of a premiere academic institution in the Country continuously developing highly competent, innovative and values-driven Asiatechian.
          </p>
        </div>
      </div>

      {/* Core Values Section (ASIATECHIAN) */}
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Institutional Tenets</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Core Values
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-xl">
            The foundational <strong className="text-emerald-800 font-extrabold">ASIATECHIAN</strong> pillars shaping excellence, character, and lifelong leadership.
          </p>
          <div className="w-12 h-1 bg-emerald-700 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {coreValues.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 font-black text-base flex items-center justify-center flex-shrink-0 shadow-xs border border-emerald-800 group-hover:scale-105 transition-transform">
                {val.letter}
              </div>
              <div className="space-y-1 min-w-0">
                <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recognition & Accreditation Section */}
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Official Credentials</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Recognition & Accreditation
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-xl">
            Asia Technological School of Science and Arts is fully recognized and accredited by the lead educational authorities of the Philippines.
          </p>
          <div className="w-12 h-1 bg-emerald-700 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accreditations.map((item) => (
            <div
              key={item.badgeText}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-black tracking-wider uppercase border ${item.badgeColor}`}>
                    {item.badgeText}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  {item.title}
                </h4>
                <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide mt-1">
                  {item.subhead}
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                <span>{item.footerTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Administration & Staff Section (Styled following Image 1) */}
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Organization Directory</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Administration & Staff
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-xl">
            Our professional institutional leaders, administrators, and dedicated services departments.
          </p>
          <div className="w-12 h-1 bg-emerald-700 rounded-full mt-3"></div>
        </div>

        {/* Executive Leadership Card */}
        <div className="bg-[#0e3b20] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-900/50">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-amber-400 uppercase">
              <span className="w-1 h-3.5 bg-amber-400 rounded-xs"></span>
              <span>Executive Leadership</span>
            </div>
            <div className="w-full max-w-xl mx-auto h-px bg-emerald-800/80 mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-center">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-black text-white tracking-wide">
                DR. MARIFE L. BARRAQUIO
              </h4>
              <p className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                SCHOOL PRESIDENT
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-black text-white tracking-wide">
                ENGR. NOEL N. BARRAQUIO
              </h4>
              <p className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                EXECUTIVE VICE PRESIDENT
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar & Directory Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-800 font-bold">{filteredDepartments.length}</strong> institutional departments & units
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchStaff}
              onChange={(e) => setSearchStaff(e.target.value)}
              placeholder="Search department or officer..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-2xs"
            />
            {searchStaff && (
              <button
                onClick={() => setSearchStaff('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Department Grid */}
        {filteredDepartments.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-2xs">
            <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold text-sm">No department or personnel found</p>
            <p className="text-slate-500 text-xs mt-1">Try checking your search query or clear the filter.</p>
            <button
              onClick={() => setSearchStaff('')}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 font-semibold text-xs hover:bg-emerald-200 transition-colors cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-start"
              >
                {/* Department Header */}
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-1.5 h-3.5 bg-emerald-600 rounded-full flex-shrink-0"></span>
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">
                    {dept.name}
                  </h4>
                </div>

                {/* Personnel List */}
                <div className="space-y-3.5">
                  {dept.members.map((member, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <p className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug">
                        {member.name}
                      </p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Alma Mater Song / ASIATECH Hymn */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xs border border-slate-200/90">
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Music className="w-3.5 h-3.5 text-emerald-700" />
                <span>Alma Mater Song</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                ASIATECH Hymn
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Official Hymn of Asia Technological School of Science and Arts
              </p>
            </div>

            <button
              onClick={handleCopyLyrics}
              className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs transition-all cursor-pointer active:scale-95"
              title="Copy official lyrics"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>Copy Lyrics</span>
                </>
              )}
            </button>
          </div>

          {/* Stanzas & Video Layout */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left/Main Column: Lyrics Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Column 1 */}
              <div className="space-y-5">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs">
                  <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-1.5">
                    <p>We are here in Asiatech</p>
                    <p>With Faith in God and Integrity</p>
                    <p>To be globally competitive</p>
                    <p>Filipino workforce in harmony</p>
                    <p>Education with high quality</p>
                    <p>For the service of humanity</p>
                    <p>Leadership with dignity</p>
                    <p>For the development of our country</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs">
                  <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-1.5">
                    <p>So we proclaim to the world</p>
                    <p>In honor of our Alma Mater</p>
                    <p>Our Asiatech in gold and green</p>
                    <p>In prosperity we care</p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-5">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs">
                  <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-1.5">
                    <p>We unite in Asiatech</p>
                    <p>With the grace of God and humility</p>
                    <p>To be highly skilled and innovative</p>
                    <p>As citizens we are productive</p>
                    <p>Education with excellence</p>
                    <p>The mission our school is giving</p>
                    <p>Uplifting our lives to prosperity</p>
                    <p>For the progress of our country</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs">
                  <div className="text-slate-800 leading-relaxed text-sm sm:text-base space-y-1.5">
                    <p>Our Asiatech in gold and green</p>
                    <p>In prosperity we care</p>
                    <p>In prosperity we share.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: YouTube Video Embed */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-3 px-1">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    Official Hymn Video
                  </span>
                  <a
                    href="https://youtu.be/mSz0OZF16Oc?si=frRKEgbTVtON6xZq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-700 hover:text-emerald-900 font-medium flex items-center gap-1 transition-colors group"
                    title="Open on YouTube in new tab"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* 16:9 Video Player */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-xs border border-slate-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/mSz0OZF16Oc?rel=0"
                    title="ASIATECH Hymn Official Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="mt-3.5 px-1 text-slate-600 text-xs leading-relaxed">
                  <p className="font-semibold text-slate-900">Sing along with the hymn accompaniment</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Stream the official video and practice the lyrics for school convocations, flag ceremonies, and graduation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Asiatech Jaguar Mascot */}
      <div className="bg-amber-50/60 rounded-3xl p-8 border border-amber-200/80 flex flex-col md:flex-row items-center gap-8">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white border-4 border-amber-300 shadow-md flex-shrink-0 overflow-hidden">
          <img src={mascotImg} alt="Asiatech Jaguar Mascot" className="w-full h-full object-contain" />
        </div>
        <div>
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
            Institutional Mascot & Spirit
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
            The Asiatech Jaguar 🐆
          </h3>
          <p className="text-sm text-slate-700 mt-2 leading-relaxed">
            The Jaguar represents agility, speed, sharp intellect, and unstoppable determination. As an Asiatech student, you embody the Jaguar spirit—always forward-looking, technologically agile, and ready to pounce on opportunities in the global arena.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-emerald-900 text-white">Official Color: Forest Green</span>
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-900">Official Accent: Aztec Gold</span>
            <span className="px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200">Motto: Agile & Fearless</span>
          </div>
        </div>
      </div>
    </div>
  );
};
