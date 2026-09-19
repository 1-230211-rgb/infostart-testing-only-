import React, { useState } from 'react';
import { policiesData } from '../data/orientationData';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  BookCheck, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check
} from 'lucide-react';
import studentHandbookQr from '../assets/images/student_handbook_qr.svg';

export const PoliciesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://bit.ly/ASIATECHStudentHandbook');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const categories = ['All', 'Uniform', 'Campus', 'Attendance', 'Academic'];

  const filteredPolicies = policiesData.filter((policy) => {
    const matchesCategory = selectedCategory === 'All' || policy.category === selectedCategory;
    const matchesSearch = 
      policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.details.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#14532d] to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-800/60 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Official Student Manual 2026
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Campus Rules & Policies
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Asiatech promotes an atmosphere of discipline, safety, and academic rigor. Read these core institutional guidelines to ensure a fruitful stay.
          </p>
        </div>
      </div>

      {/* Official Student Handbook & Advisory Section (Image 5 & Advisory Notice) */}
      <section className="bg-white rounded-3xl border-2 border-emerald-800/20 shadow-sm overflow-hidden">
        {/* Banner Strip */}
        <div className="bg-gradient-to-r from-[#14532d] via-emerald-900 to-[#14532d] px-6 py-3.5 text-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-300" />
            <span className="text-xs font-black uppercase tracking-wider text-emerald-100">
              Institutional Directive & Student Handbook
            </span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-700/60 text-emerald-200 border border-emerald-500/40">
            Effective July 20, 2026
          </span>
        </div>

        {/* 2-Column Content: QR code card beside the Advisory */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Student Handbook QR Code (Matching 5th Image) */}
          <div className="lg:col-span-4 flex flex-col items-center space-y-4">
            <div className="w-full max-w-[280px] bg-slate-50 border-2 border-slate-300/80 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-between text-center relative group">
              {/* QR Code Graphic */}
              <div className="w-full bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <img 
                  src={studentHandbookQr} 
                  alt="Student Handbook QR Code" 
                  className="w-full h-auto aspect-square object-contain block mx-auto"
                />
              </div>

              {/* Title bar below QR code matching Image 5 */}
              <div className="w-full mt-3 py-2 bg-slate-800 text-white text-xs font-black tracking-[0.2em] uppercase rounded-lg shadow-2xs">
                Student Handbook
              </div>
            </div>

            {/* Quick Actions & Handbook Link */}
            <div className="w-full max-w-[280px] space-y-2.5 text-center">
              <a
                href="https://bit.ly/ASIATECHStudentHandbook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <span>Open Digital Handbook</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer border border-slate-200"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Handbook Link</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 leading-tight pt-1">
                Scan with your phone camera or sign in with your official Student Gmail (<span className="font-semibold text-slate-700">@asiatech.edu.ph</span>).
              </p>
            </div>
          </div>

          {/* Right Column: Advisory Notice (Beside Student Handbook) */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
                Official Memorandum
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                ADVISORY
              </h3>
            </div>

            {/* Citations / Legal Preamble */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <p>
                In accordance to the latest edition of the <strong>Student Handbook</strong>, specifically in <strong>Article IV Code of Conduct</strong>:
              </p>
              <ul className="space-y-1.5 pl-3 border-l-2 border-emerald-600 text-slate-800 italic">
                <li>
                  <span className="font-bold not-italic text-slate-900">Section 1: </span>
                  “Every Asiatechian shall observe the following guidelines on the use of the official identification card (ID)”
                </li>
                <li>
                  <span className="font-bold not-italic text-slate-900">Section 2: </span>
                  “Every Asiatechian must always be presentable and well-groomed. He/she must come to school wearing the official ID card and the prescribed school uniforms or any appropriate attire on selected occasions adhering to the conventions of decency and proper grooming”
                </li>
              </ul>
              <p className="pt-1">
                ...and the rest of the Code of Conduct shall be strictly observed and implemented to all students starting <strong>July 20, 2026, Monday</strong> with the following terms:
              </p>
            </div>

            {/* Implementation Terms */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-800">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <p>
                  <strong>Students must wear the updated ID Card</strong> inside the school premises and during the online classes.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <p>
                  Students must be <strong>presentable and well-groomed</strong> in appearance and attire.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <p>
                  <strong>Old Students</strong> must wear proper uniform during their classes or as required by the teacher.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <p>
                  <strong>New students</strong> (with student number starting with <strong>1-26****</strong>) may wear civilian attire adhering to the conventions of decency and proper grooming according to the school policy until the uniform is available.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <div className="space-y-2">
                  <p>
                    <strong>Implementation of mandatory inspection</strong> for everyone entering the school premises:
                  </p>
                  <ul className="pl-4 space-y-1.5 text-xs text-slate-700 italic">
                    <li className="list-disc">Frisking or body check when deemed necessary by authorized security personnel;</li>
                    <li className="list-disc">Inspection of bags, backpacks, handbags, and other carried items; and</li>
                    <li className="list-disc">Inspection of motorcycles, including compartments, storage boxes, and other accessible areas.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disciplinary Notice & Direct Link */}
            <div className="pt-3 space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Disciplinary Measure: </strong>
                  Students who violate the rules and regulations shall be meted with corresponding disciplinary measures as stated in <strong>Article XII, Code of Discipline</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="leading-relaxed">
                  To know more about the Student Handbook go to this link using your Student Gmail or approach your teacher:
                </p>
                <a
                  href="https://bit.ly/ASIATECHStudentHandbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-900 underline whitespace-nowrap"
                >
                  <span>https://bit.ly/ASIATECHStudentHandbook</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#14532d] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Policies' : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search policies, uniform, ID..."
            className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-700 text-slate-800"
          />
        </div>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPolicies.map((policy) => (
          <div key={policy.id} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  {policy.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {policy.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 leading-relaxed">
                {policy.summary}
              </p>

              <div className="space-y-2.5 border-t border-slate-100 pt-4">
                {policy.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {policy.importantRule && (
              <div className="mt-5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Sanction / Note: </span>
                  <span>{policy.importantRule}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Uniform Visual Breakdown */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BookCheck className="w-5 h-5 text-emerald-800" />
          <span>At-a-Glance Weekly Uniform Schedule</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <span className="font-bold text-emerald-800 block text-sm">Mon – Thu</span>
            <span className="font-semibold text-slate-900 mt-1 block">Full Prescribed Uniform</span>
            <p className="text-slate-500 mt-1">Official polo/blouse, tailored slacks/pleated skirt, black leather shoes, official lanyard & RFID ID.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <span className="font-bold text-blue-800 block text-sm">Friday (Org Day)</span>
            <span className="font-semibold text-slate-900 mt-1 block">College Org T-Shirt</span>
            <p className="text-slate-500 mt-1">Accredited department org shirt (CCS, CBA, CHTM, etc.) with dark modest denim jeans and clean sneakers.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <span className="font-bold text-amber-800 block text-sm">PE Schedule</span>
            <span className="font-semibold text-slate-900 mt-1 block">Physical Education Attire</span>
            <p className="text-slate-500 mt-1">Official Asiatech PE shirt and jogging pants, rubber shoes. Only worn on days with scheduled PE periods.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
