import React, { useState } from 'react';
import { faqData } from '../data/orientationData';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export const FAQView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const categories = ['All', 'Enrollment', 'Uniforms & ID', 'Academics', 'Campus Life', 'Tuition & Fees'];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Got Questions? We’re Here to Help!
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Find fast answers regarding student orientation, ID verification, uniform guidelines, and class schedules.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search orientation questions (e.g. uniform, portal, clinic, fees)..."
          className="w-full text-sm pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 shadow-xs focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white text-slate-800"
        />
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#14532d] text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-400 p-1 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-slate-700">
                      {faq.answer}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Category: <strong className="text-slate-600">{faq.category}</strong></span>
                      <span className="text-emerald-700 font-medium">Asiatech Orientation 2026</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2" />
            <p className="text-sm font-bold text-slate-700">No matching questions found</p>
            <p className="text-xs text-slate-500 mt-1">Try searching another keyword or ask our Jaguar Mascot assistant!</p>
          </div>
        )}
      </div>

      {/* Still need help callout */}
      <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 text-sm">Still have questions?</h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Contact the Asiatech Admissions Help Desk at <strong className="text-emerald-900">helpdesk@asiatech.edu.ph</strong> or tap the Jaguar assistant below.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-emerald-200">
            Hotline: (049) 534-1234
          </span>
        </div>
      </div>
    </div>
  );
};
