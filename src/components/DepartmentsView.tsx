import React, { useState, useMemo } from 'react';
import { departmentsData } from '../data/orientationData';
import { Department, Program } from '../types';
import { 
  Laptop, 
  Briefcase, 
  GraduationCap, 
  User, 
  BookOpen,
  BriefcaseBusiness,
  Award,
  Search,
  X,
  Sparkles,
  Filter
} from 'lucide-react';

export const DepartmentsView: React.FC = () => {
  // 'all' or specific department ID
  const [selectedDeptId, setSelectedDeptId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getDeptIcon = (code: string) => {
    switch (code) {
      case 'CEITE': return <Laptop className="w-5 h-5 text-emerald-600" />;
      case 'CBHTM': return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'CEAS': return <GraduationCap className="w-5 h-5 text-purple-600" />;
      default: return <BookOpen className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getTagStyle = (tag?: string) => {
    switch (tag) {
      case 'TECHNOLOGY & COMPUTING':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'BUSINESS & FINANCE':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'HOSPITALITY & TOURISM MANAGEMENT':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'LAW ENFORCEMENT & SECURITY':
        return 'bg-orange-50 text-orange-900 border-orange-200';
      case 'EDUCATION':
        return 'bg-purple-50 text-purple-900 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  // Flattened programs with their parent department metadata
  const allProgramsWithDept = useMemo(() => {
    return departmentsData.flatMap((dept) => 
      dept.programs.map((prog) => ({
        ...prog,
        departmentId: dept.id,
        departmentName: dept.name,
        departmentCode: dept.code,
        departmentDean: dept.dean
      }))
    );
  }, []);

  // Filtered programs based on search query and selected college
  const filteredPrograms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    
    return allProgramsWithDept.filter((prog) => {
      // Check department filter
      if (selectedDeptId !== 'all' && prog.departmentId !== selectedDeptId) {
        return false;
      }

      // Check search query
      if (!q) return true;

      const titleMatch = prog.title.toLowerCase().includes(q);
      const tagMatch = prog.tag ? prog.tag.toLowerCase().includes(q) : false;
      const descMatch = prog.description.toLowerCase().includes(q);
      const chairMatch = prog.programChair ? prog.programChair.toLowerCase().includes(q) : false;
      const deptCodeMatch = prog.departmentCode.toLowerCase().includes(q);
      const deptNameMatch = prog.departmentName.toLowerCase().includes(q);
      const careerMatch = prog.careerPaths.some(c => c.toLowerCase().includes(q));
      const highlightMatch = prog.highlights ? prog.highlights.some(h => h.toLowerCase().includes(q)) : false;
      const durationMatch = prog.duration ? prog.duration.toLowerCase().includes(q) : false;

      return (
        titleMatch || 
        tagMatch || 
        descMatch || 
        chairMatch || 
        deptCodeMatch || 
        deptNameMatch || 
        careerMatch || 
        highlightMatch ||
        durationMatch
      );
    });
  }, [allProgramsWithDept, selectedDeptId, searchQuery]);

  // Count matches per department for badges
  const deptMatchCounts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const counts: Record<string, number> = { all: 0 };

    departmentsData.forEach((dept) => {
      counts[dept.id] = 0;
    });

    allProgramsWithDept.forEach((prog) => {
      let matchesQuery = true;
      if (q) {
        const titleMatch = prog.title.toLowerCase().includes(q);
        const tagMatch = prog.tag ? prog.tag.toLowerCase().includes(q) : false;
        const descMatch = prog.description.toLowerCase().includes(q);
        const chairMatch = prog.programChair ? prog.programChair.toLowerCase().includes(q) : false;
        const deptCodeMatch = prog.departmentCode.toLowerCase().includes(q);
        const deptNameMatch = prog.departmentName.toLowerCase().includes(q);
        const careerMatch = prog.careerPaths.some(c => c.toLowerCase().includes(q));
        const highlightMatch = prog.highlights ? prog.highlights.some(h => h.toLowerCase().includes(q)) : false;
        const durationMatch = prog.duration ? prog.duration.toLowerCase().includes(q) : false;

        matchesQuery = (
          titleMatch || 
          tagMatch || 
          descMatch || 
          chairMatch || 
          deptCodeMatch || 
          deptNameMatch || 
          careerMatch || 
          highlightMatch ||
          durationMatch
        );
      }

      if (matchesQuery) {
        counts.all += 1;
        counts[prog.departmentId] = (counts[prog.departmentId] || 0) + 1;
      }
    });

    return counts;
  }, [allProgramsWithDept, searchQuery]);

  const quickFilterPills = [
    'Information Technology',
    'Computer Science',
    'Computer Engineering',
    'Accountancy',
    'Marketing',
    'HR Management',
    'Hospitality',
    'Tourism',
    'Criminology',
    'Education',
    'Associate'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#14532d] via-[#166534] to-[#14532d] text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Official Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Collegiate Academic Programs
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Discover our industry-aligned colleges offering 4-year bachelor's degree programs and 2-year associate diplomas, complete with academic leadership, key curriculum specialties, and career outcomes.
          </p>
        </div>
      </div>

      {/* Program Search & Quick Filter Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="program-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs, degrees, careers, leadership (e.g. IT, Accountancy, Criminology, CPA)..."
            className="w-full pl-11 pr-11 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14532d] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              id="clear-program-search-button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              title="Clear search"
            >
              <div className="p-1 rounded-full hover:bg-slate-200">
                <X className="w-4 h-4" />
              </div>
            </button>
          )}
        </div>

        {/* Quick Filter Search Suggestions */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Popular:</span>
          </span>
          {quickFilterPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setSearchQuery(pill)}
              className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                searchQuery.toLowerCase() === pill.toLowerCase()
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-2xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-slate-300'
              }`}
            >
              {pill}
            </button>
          ))}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-emerald-700 hover:underline font-bold text-xs ml-auto"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>

      {/* College Selector Tabs (All, CEITE, CBHTM, CEAS) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* All Programs Card */}
        <button
          id="dept-tab-all"
          onClick={() => setSelectedDeptId('all')}
          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
            selectedDeptId === 'all'
              ? 'bg-white border-[#14532d] shadow-md ring-2 ring-[#14532d]/20'
              : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <BookOpen className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-xs font-black font-mono px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100">
              ALL
            </span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base leading-snug">All Colleges</h4>
            <span className="text-xs text-slate-500 mt-1 block font-medium">
              {deptMatchCounts.all} {searchQuery ? 'Matches' : 'Programs'}
            </span>
          </div>
        </button>

        {departmentsData.map((dept) => {
          const isSelected = dept.id === selectedDeptId;
          const matchCount = deptMatchCounts[dept.id] ?? 0;
          return (
            <button
              id={`dept-tab-${dept.id}`}
              key={dept.id}
              onClick={() => setSelectedDeptId(dept.id)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#14532d] shadow-md ring-2 ring-[#14532d]/20'
                  : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  {getDeptIcon(dept.code)}
                </div>
                <span className="text-xs font-black font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  {dept.code}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base leading-snug line-clamp-1">{dept.name}</h4>
                <span className="text-xs text-slate-500 mt-1 block font-medium">
                  {matchCount} {searchQuery ? 'Matches' : 'Programs'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active College Header (if a specific department is selected and no search) */}
      {selectedDeptId !== 'all' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {(() => {
            const currentDept = departmentsData.find(d => d.id === selectedDeptId);
            if (!currentDept) return null;
            return (
              <>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {currentDept.code}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{currentDept.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                    {currentDept.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Dean / College Leadership</span>
                    <div className="text-xs font-bold text-slate-800">{currentDept.dean}</div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Programs Listing */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-700" />
            <span>
              {searchQuery 
                ? `Search Results (${filteredPrograms.length})` 
                : selectedDeptId === 'all' 
                  ? 'All Academic Programs' 
                  : 'Offered Degree Programs'}
            </span>
          </h4>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Showing {filteredPrograms.length} {filteredPrograms.length === 1 ? 'Program' : 'Programs'}
          </span>
        </div>

        {/* Empty Search State */}
        {filteredPrograms.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h5 className="text-lg font-bold text-slate-800">No programs found</h5>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                No academic programs matched "{searchQuery}". Try using broader keywords like "IT", "Engineering", "Business", or "Tourism".
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDeptId('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredPrograms.map((prog, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-5 transition-all hover:border-slate-300"
            >
              {/* Header with Title, College Badge, and Tags */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {prog.departmentCode}
                  </span>
                  {prog.tag && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getTagStyle(prog.tag)}`}>
                      {prog.tag}
                    </span>
                  )}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-0.5 rounded-md">
                    {prog.duration || prog.level}
                  </span>
                </div>

                <h5 className="font-black text-slate-900 text-xl tracking-tight">
                  {prog.title}
                </h5>
              </div>

              {/* Course Description */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Course Description</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {prog.description}
                </p>
              </div>

              {/* Academic Leadership POV */}
              {(prog.programChair || prog.dean) && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 inline-block">
                    Academic Leadership
                  </span>
                  <div className="text-xs text-slate-700 space-y-0.5">
                    <p className="font-semibold text-slate-900">{prog.departmentName} ({prog.departmentCode})</p>
                    {prog.programChair && (
                      <p className="text-slate-600">
                        <span className="font-bold text-slate-800">Program Head/Chair:</span> {prog.programChair}
                      </p>
                    )}
                    {prog.dean && (
                      <p className="text-slate-600">
                        <span className="font-bold text-slate-800">Dean:</span> {prog.dean}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Grid for Specialties and Careers */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 border-t border-slate-200/70">
                {/* Prospective Careers */}
                <div className="lg:col-span-7 space-y-2">
                  <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                    <BriefcaseBusiness className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Prospective Careers & Outcomes</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.careerPaths.map((career, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-semibold bg-slate-50 text-slate-800 px-3 py-1 rounded-lg border border-slate-200 shadow-2xs"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Specialties & Highlights */}
                {prog.highlights && prog.highlights.length > 0 && (
                  <div className="lg:col-span-5 space-y-2">
                    <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Key Specialties & Highlights</span>
                    </span>
                    <ul className="space-y-1.5">
                      {prog.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
