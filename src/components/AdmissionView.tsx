import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  Check, 
  ExternalLink, 
  AlertCircle, 
  Clock, 
  Video,
  Eye,
  X,
  Maximize2
} from 'lucide-react';
import newStudentSlipImg from '../assets/images/enrollment_slip_new_student.svg';
import oldStudentSlipImg from '../assets/images/enrollment_slip_old_student.svg';

export const AdmissionView: React.FC = () => {
  // Modal state for full-screen document viewing ("tsaka lang makikita ng buo pag pinindot na")
  const [previewModalDoc, setPreviewModalDoc] = useState<'new' | 'old' | null>(null);

  // Freshman Requirements (From 3rd Image - no checkboxes on the side)
  const freshmanRequirements = [
    { id: 1, name: "Form 137 (Student's Permanent Record)", desc: "Must be requested from previous school upon acceptance" },
    { id: 2, name: "Form 138 (Report Card)", desc: "Original copy with passing general average" },
    { id: 3, name: "Photocopy of Diploma", desc: "Clear photocopy of Senior High / High School Diploma" },
    { id: 4, name: "Certificate of Good Moral Character", desc: "Issued by previous school Guidance Office with dry seal" },
    { id: 5, name: "Photocopy of NSO/PSA Birth Certificate", desc: "Clear authenticated copy (bring original for verification)" },
    { id: 6, name: "3pcs. Picture Passport Size, Formal, White Background", desc: "Studio taken with standard nametag" },
    { id: 7, name: "Marriage Certificate for Married Female (if applicable)", desc: "PSA authenticated copy" },
    { id: 8, name: "Long Folder", desc: "For student file physical archiving" },
    { id: 9, name: "Long Brown Envelope w/ Plastic", desc: "Complete with transparent plastic cover" }
  ];

  // Transferee Requirements (From 4th Image - no checkboxes on the side)
  const transfereeRequirements = [
    { id: 1, name: "Transcript of Records", desc: "Official TOR or Copy of Grades for academic crediting" },
    { id: 2, name: "Transfer Credentials", desc: "Official certificate from previous college or university" },
    { id: 3, name: "Honorable Dismissal", desc: "Issued by the Dean or Registrar of previous institution" },
    { id: 4, name: "Certificate of Good Moral Character", desc: "Issued by previous college Student Affairs / Guidance" },
    { id: 5, name: "Photocopy of NSO/PSA Birth Certificate", desc: "Clear authenticated copy (bring original for verification)" },
    { id: 6, name: "3 pcs. Picture Passport Size, Formal, White Background", desc: "Studio taken with standard nametag" },
    { id: 7, name: "Marriage Certificate for Married Female (if applicable)", desc: "PSA authenticated copy" },
    { id: 8, name: "Long Folder", desc: "For student file physical archiving" },
    { id: 9, name: "Long Brown Envelope w/ Plastic", desc: "Complete with transparent plastic cover" }
  ];

  // Guidelines (From 2nd Image)
  const enrollmentGuidelines = [
    {
      highlight: "Cut-off for enrollment queuing is at 5:00pm.",
      detail: "Enrollees are encouraged to be on campus before 5:00PM to complete the enrollment procedures the same day."
    },
    {
      highlight: "Have a Queuing number.",
      detail: "Upon arrival, get a number from the guard to proceed with enrollment."
    },
    {
      highlight: "Single Person Access.",
      detail: "Only one person (either the student or the guardian) is allowed in the processing areas."
    },
    {
      highlight: "Signature Requirements.",
      detail: "Please ensure all enrollment forms are duly signed. Incomplete forms will result in processing delays."
    },
    {
      highlight: "Use Active Email.",
      detail: "Use an active email address to receive enlistment/enrollment verification and avoid delays in enrollment."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* ------------------------------------------------------------- */}
      {/* 5th Image: TOP SECTION BAGO MAG-ENROLLMENT GUIDELINES           */}
      {/* ------------------------------------------------------------- */}
      <section id="top-admission-announcement-section" className="space-y-6">
        {/* Main Admission Announcement Card (From 5th Image) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 border-l-8 border-l-emerald-600 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span>ADMISSION ANNOUNCEMENT</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Enrollment for AY 2026–2027 is now ongoing!
            </h2>

            {/* Subtext */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Learn more about the Enrollment Guidelines below. Start your journey and <span className="font-bold text-emerald-700">#BeginHereinASIATECH!</span>
            </p>

            {/* Important Notice Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-medium">
              <span>📌</span>
              <span><strong>Important Notice:</strong> All requirements must be submitted in <strong>three (3) copies</strong>.</span>
            </div>

            {/* Tag */}
            <div className="pt-1">
              <span className="text-xs font-black tracking-widest text-emerald-800/80 uppercase">
                #YOURKEYTOGLOBALSUCCESS
              </span>
            </div>
          </div>

          {/* Right Action Button & Link (From 5th Image) */}
          <div className="flex flex-col items-start lg:items-end justify-center gap-2 flex-shrink-0">
            <a
              href="https://tinyurl.com/Application-Enrollment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
            >
              <span>Register for Pre-enrollment</span>
              <Check className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <span className="text-[11px] text-slate-500 font-mono">
              tinyurl.com/Application-Enrollment
            </span>
          </div>
        </div>

        {/* Classes Start On Date Card (From 5th Image bottom) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs max-w-xl flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Calendar className="w-6 h-6 text-emerald-700" />
          </div>
          <div className="space-y-1.5">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-700 text-white text-[10px] font-extrabold uppercase tracking-wider">
              ENROLLMENT ONGOING
            </span>
            <h4 className="text-lg font-black text-slate-900 leading-tight">
              College Departments
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              All first semester college course classes and orientation assemblies commence.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Classes start on:</span>
              <span className="inline-block px-3 py-1 rounded-lg bg-slate-950 text-amber-300 font-extrabold text-xs tracking-wide shadow-2xs">
                June 29, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2nd Image: ENROLLMENT GUIDELINES + YOUTUBE SHORTS SA TABI      */}
      {/* ------------------------------------------------------------- */}
      <section id="enrollment-guidelines-section" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Enrollment Guidelines Card (Exact styling from 2nd Image) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Header with Green ENROLLMENT and Yellow GUIDELINES Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <span className="px-4 py-1.5 rounded-lg bg-[#047857] text-white font-black text-sm tracking-wider uppercase shadow-2xs">
                  ENROLLMENT
                </span>
                <span className="px-4 py-1.5 rounded-lg bg-[#eab308] text-slate-950 font-black text-sm tracking-wider uppercase shadow-2xs">
                  GUIDELINES
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Please read and strictly follow the campus instructions below to ensure a fast, orderly, and hassle-free registration process.
              </p>
            </div>

            {/* Subtle Divider Line */}
            <hr className="border-slate-200" />

            {/* 5 Guidelines Bullet Cards (Exact 2nd Image Layout) */}
            <div className="space-y-3.5">
              {enrollmentGuidelines.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-700 mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">{item.highlight}</strong>{' '}
                    <span>{item.detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: YouTube Short Video (Sa tabi ng Enrollment Guidelines) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-red-600" />
                <h3 className="font-black text-slate-900 text-sm sm:text-base">
                  Official Enrollment Walkthrough
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase">
                Video Guide
              </span>
            </div>

            {/* YouTube Shorts Embed */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-inner bg-slate-950 aspect-[9/16] max-h-[580px] mx-auto border border-slate-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/H_0shObZcAE?rel=0&modestbranding=1"
                title="ASIATECH Enrollment Guidelines & Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Shorts Guide (YouTube)</span>
              <a 
                href="https://youtube.com/shorts/H_0shObZcAE?si=JuB8DpZxe62NgzO2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                <span>Open in YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6th & 7th Images: COMPACT FILE / IMAGE CARDS                   */}
      {/* ------------------------------------------------------------- */}
      <section id="enrollment-process-section" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="inline-block text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
              Campus Procedure Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Enrollment Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Click on either document card below to preview the complete institutional routing slip in full.
            </p>
          </div>

          {/* Registrar Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium self-start sm:self-auto">
            <span>ℹ️</span>
            <span><strong>Note:</strong> Physical routing slips are officially issued by the <strong>Registrar's Office</strong> during enrollment.</span>
          </div>
        </div>

        {/* Compact File Cards (English only, no download button) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* File Card 1: New College Student */}
          <div 
            id="file-card-new-student"
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all p-5 flex flex-col sm:flex-row gap-5 items-center group"
          >
            {/* Clickable Thumbnail Preview */}
            <div 
              onClick={() => setPreviewModalDoc('new')}
              className="relative w-36 h-48 sm:w-40 sm:h-52 bg-slate-50 rounded-xl border border-slate-300 overflow-hidden shadow-xs cursor-pointer flex-shrink-0 group-hover:ring-2 group-hover:ring-emerald-500 transition-all"
              title="Click to view full routing slip"
            >
              <img 
                src={newStudentSlipImg} 
                alt="New College Student Routing Slip Thumbnail" 
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
              />
              <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-slate-900 font-extrabold text-[11px] shadow-sm inline-flex items-center gap-1 group-hover:scale-105 transition-transform">
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Preview</span>
                </span>
              </div>
            </div>

            {/* Information & Action Button */}
            <div className="flex-1 flex flex-col justify-between self-stretch py-1 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Routing Slip • 7 Steps
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Official Form
                  </span>
                </div>
                <h4 
                  onClick={() => setPreviewModalDoc('new')}
                  className="font-black text-slate-900 text-base leading-snug cursor-pointer hover:text-emerald-700 transition-colors"
                >
                  ENROLLMENT PROCESS (NEW COLLEGE STUDENT)
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sequential procedure for new students: Inquiry, Registration, Subject Enlistment, Payment, Student ID, Profiling, and Official Enrollment.
                </p>
                <div className="text-[11px] text-amber-800 bg-amber-50/70 border border-amber-200/60 rounded-lg p-1.5 font-medium">
                  Physical slip issued by the Registrar's Office upon campus arrival.
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => setPreviewModalDoc('new')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-800 text-white text-xs font-bold shadow-2xs transition-all cursor-pointer active:scale-95"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span>View Full Slip</span>
                </button>
              </div>
            </div>
          </div>

          {/* File Card 2: Old Student */}
          <div 
            id="file-card-old-student"
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all p-5 flex flex-col sm:flex-row gap-5 items-center group"
          >
            {/* Clickable Thumbnail Preview */}
            <div 
              onClick={() => setPreviewModalDoc('old')}
              className="relative w-36 h-48 sm:w-40 sm:h-52 bg-slate-50 rounded-xl border border-slate-300 overflow-hidden shadow-xs cursor-pointer flex-shrink-0 group-hover:ring-2 group-hover:ring-emerald-500 transition-all"
              title="Click to view full routing slip"
            >
              <img 
                src={oldStudentSlipImg} 
                alt="Old Student Routing Slip Thumbnail" 
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
              />
              <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-slate-900 font-extrabold text-[11px] shadow-sm inline-flex items-center gap-1 group-hover:scale-105 transition-transform">
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Preview</span>
                </span>
              </div>
            </div>

            {/* Information & Action Button */}
            <div className="flex-1 flex flex-col justify-between self-stretch py-1 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Routing Slip • 6 Steps
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Official Form
                  </span>
                </div>
                <h4 
                  onClick={() => setPreviewModalDoc('old')}
                  className="font-black text-slate-900 text-base leading-snug cursor-pointer hover:text-emerald-700 transition-colors"
                >
                  ENROLLMENT PROCESS (OLD STUDENT)
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sequential procedure for continuing students: Subject Enlistment (Home/School), Enlistment Verification, Payment, Updated ID, and Profiling.
                </p>
                <div className="text-[11px] text-amber-800 bg-amber-50/70 border border-amber-200/60 rounded-lg p-1.5 font-medium">
                  Physical slip issued by the Registrar's Office upon campus arrival.
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => setPreviewModalDoc('old')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-800 text-white text-xs font-bold shadow-2xs transition-all cursor-pointer active:scale-95"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span>View Full Slip</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3rd & 4th Images: ADMISSION REQUIREMENTS (NO CHECKBOXES)       */}
      {/* ------------------------------------------------------------- */}
      <section id="admission-requirements-section" className="space-y-6 pt-4">
        <div>
          <span className="inline-block text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Documentation
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Admission Requirements
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Please prepare three (3) copies of each document for submission to the Admissions Office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* 3rd Image: COLLEGE REQUIREMENTS (FRESHMEN) - WALANG CHECKBOX */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
                  COLLEGE REQUIREMENTS (FRESHMEN)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete required documents for incoming freshman applicants
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                9 Items
              </span>
            </div>

            {/* List without checkbox boxes */}
            <div className="space-y-2.5">
              {freshmanRequirements.map((req) => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {req.id}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {req.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {req.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4th Image: TRANSFEREE REQUIREMENTS - WALANG CHECKBOX */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
                  TRANSFEREE REQUIREMENTS
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete required documents for transferees & returnees
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                9 Items
              </span>
            </div>

            {/* List without checkbox boxes */}
            <div className="space-y-2.5">
              {transfereeRequirements.map((req) => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {req.id}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {req.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {req.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Office Hours & Contact Notice */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xs">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Clock className="w-5 h-5 text-amber-700" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-amber-950">
              Admissions Office Hours & Inquiries
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              Monday to Friday: <strong>8:00 AM – 5:00 PM</strong> | Saturday: <strong>8:00 AM – 12:00 NN</strong>
            </p>
            <p className="text-xs text-amber-800">
              Email: <strong>admissions@asiatech.edu.ph</strong> | Hotline: <strong>(049) 534-1234</strong>
            </p>
          </div>
        </div>

        <a
          href="https://tinyurl.com/Application-Enrollment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <span>Online Pre-registration</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FULL DOCUMENT MODAL VIEWER ("makikita ng buo")                */}
      {/* ------------------------------------------------------------- */}
      {previewModalDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-2 sm:p-4 overflow-hidden"
          onClick={() => setPreviewModalDoc(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[96vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Toolbar (English only, download removed) */}
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 bg-slate-50 gap-3 flex-shrink-0">
              {/* Document Switcher */}
              <div className="inline-flex rounded-xl bg-slate-200/90 p-1 border border-slate-300/80">
                <button
                  onClick={() => setPreviewModalDoc('new')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    previewModalDoc === 'new'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  New College Student (7 Steps)
                </button>
                <button
                  onClick={() => setPreviewModalDoc('old')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    previewModalDoc === 'old'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Old Student (6 Steps)
                </button>
              </div>

              {/* Action: Close button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreviewModalDoc(null)}
                  className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Document Body: Fits 100% into view so all steps & signature are visible */}
            <div className="p-2 sm:p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-100/90">
              <div className="flex items-center justify-center w-full">
                <img
                  src={previewModalDoc === 'new' ? newStudentSlipImg : oldStudentSlipImg}
                  alt={previewModalDoc === 'new' ? 'Enrollment Process (New College Student)' : 'Enrollment Process (Old Student)'}
                  className="max-h-[calc(96vh-130px)] w-auto max-w-full object-contain rounded-xl border border-slate-300 shadow-md bg-white block mx-auto"
                />
              </div>
            </div>

            {/* Modal Footer Note */}
            <div className="px-4 py-2.5 bg-amber-50 border-t border-amber-200 text-amber-900 text-xs text-center font-medium flex-shrink-0">
              <strong>Official Notice:</strong> The physical routing slip is issued by the <strong>Registrar's Office</strong> during enrollment. Please secure your official copy on campus before proceeding.
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
