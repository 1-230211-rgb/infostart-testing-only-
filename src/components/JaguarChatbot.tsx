import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  HelpCircle,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import mascotImg from '../assets/images/main_mascot_1788954625285.jpg';
import { faqData } from '../data/orientationData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  faqCategory?: string;
}

export const JaguarChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Mabuhay! I am Jaguar, your Asiatech 2026 Orientation Guide! 🐆 Lahat ng opisyal na Frequently Asked Questions (FAQs) ay naririto. Pumili o magtanong ng kahit anong question sa FAQs sa ibaba para sa agarang sagot!',
      timestamp: 'Just now',
    },
  ]);

  // Find exact answer from faqData
  const getFaqAnswer = (text: string): { answer: string; category?: string } => {
    const q = text.toLowerCase().trim();

    // 1. Exact or substring match against FAQ questions
    for (const item of faqData) {
      if (
        item.question.toLowerCase() === q ||
        q.includes(item.question.toLowerCase()) ||
        item.question.toLowerCase().includes(q)
      ) {
        return { answer: item.answer, category: item.category };
      }
    }

    // 2. Keyword routing to the exact FAQ from the list
    // FAQ 1: Enrollment & COR
    if (
      q.includes('enroll') || 
      q.includes('cor') || 
      q.includes('registration') || 
      q.includes('admission') || 
      q.includes('credentials') || 
      q.includes('form 138') || 
      q.includes('finalize')
    ) {
      return { answer: faqData[0].answer, category: faqData[0].category };
    }

    // FAQ 2: Uniform & PE Attire
    if (
      q.includes('uniform') || 
      q.includes('pe') || 
      q.includes('attire') || 
      q.includes('lanyard') || 
      q.includes('bookstore') || 
      q.includes('bili') || 
      q.includes('damit') || 
      q.includes('dress code')
    ) {
      return { answer: faqData[1].answer, category: faqData[1].category };
    }

    // FAQ 3: Student Portal & Online Grades
    if (
      q.includes('portal') || 
      q.includes('grade') || 
      q.includes('grades') || 
      q.includes('schedule') || 
      q.includes('workspace') || 
      q.includes('login') || 
      q.includes('online') || 
      q.includes('aeris')
    ) {
      return { answer: faqData[2].answer, category: faqData[2].category };
    }

    // FAQ 4: Tuition & Installments
    if (
      q.includes('tuition') || 
      q.includes('installment') || 
      q.includes('installments') || 
      q.includes('monthly') || 
      q.includes('pay') || 
      q.includes('payment') || 
      q.includes('cashier') || 
      q.includes('accounting') || 
      q.includes('bayad') || 
      q.includes('fee') || 
      q.includes('fees') || 
      q.includes('gcash') || 
      q.includes('maya')
    ) {
      return { answer: faqData[3].answer, category: faqData[3].category };
    }

    // FAQ 5: Student Clubs & Jaguars Varsity
    if (
      q.includes('club') || 
      q.includes('clubs') || 
      q.includes('varsity') || 
      q.includes('jaguars') || 
      q.includes('sports') || 
      q.includes('org') || 
      q.includes('org fair') || 
      q.includes('tryout') || 
      q.includes('sali')
    ) {
      return { answer: faqData[4].answer, category: faqData[4].category };
    }

    // FAQ 6: Clinic & Medical Emergency
    if (
      q.includes('clinic') || 
      q.includes('unwell') || 
      q.includes('sick') || 
      q.includes('emergency') || 
      q.includes('medical') || 
      q.includes('nurse') || 
      q.includes('doctor') || 
      q.includes('first aid') || 
      q.includes('sakit')
    ) {
      return { answer: faqData[5].answer, category: faqData[5].category };
    }

    // Default friendly answer offering the exact FAQ topics
    return {
      answer: "Narito ang mga opisyal na katanungan sa aming FAQ na maaari mong itanong:\n\n1. Enrollment Confirmation & COR\n2. Purchase of Uniforms & PE Attire\n3. Student Portal & Online Grades\n4. Tuition Installment Plans\n5. Joining Student Clubs & Jaguars Varsity\n6. Medical Emergencies & Campus Clinic\n\nI-click lamang ang alinman sa mga FAQ buttons sa ibaba para sa eksaktong sagot!",
      category: 'FAQs Overview'
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Answer with the exact FAQ response
    setTimeout(() => {
      const { answer, category } = getFaqAnswer(text);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        faqCategory: category,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 350);
  };

  return (
    <>
      {/* Floating Jaguar Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center select-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 active:scale-95"
          aria-label="Open Jaguar orientation guide"
        >
          {/* Circular green container */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#14532d] hover:bg-[#0e3b20] border-2 border-emerald-400 shadow-xl flex items-center justify-center p-1 text-white relative">
            <img 
              src={mascotImg} 
              alt="Jaguar Mascot" 
              className="w-full h-full object-contain rounded-full transform group-hover:scale-110 transition-transform duration-200"
            />
            {/* Ping notification */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"></span>
            </span>
          </div>
          {/* Jaguar text pill badge */}
          <span className="mt-1 px-2.5 py-0.5 rounded-full bg-[#14532d] text-white text-[11px] font-extrabold tracking-wide uppercase shadow-sm border border-emerald-600/50">
            Jaguar
          </span>
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[92vw] sm:w-[410px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#14532d] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400 bg-emerald-900 flex-shrink-0">
                <img src={mascotImg} alt="Jaguar" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  <span>Jaguar FAQ Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                </h4>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Official Asiatech FAQs</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 overflow-y-auto max-h-80 min-h-64 space-y-3 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.faqCategory && (
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md mb-1">
                    {msg.faqCategory}
                  </span>
                )}
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-2xs whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#14532d] text-white rounded-tr-xs font-medium'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}
          </div>

          {/* Official FAQs Prompt List */}
          <div className="p-2.5 bg-slate-100 border-t border-slate-200 space-y-1.5">
            <div className="flex items-center justify-between px-1 text-[11px] font-bold text-slate-600">
              <span className="flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pumili ng FAQ Question:</span>
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                {faqData.length} FAQs
              </span>
            </div>

            {/* Scrollable / Clickable FAQ Questions */}
            <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {faqData.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleSend(faq.question)}
                  className="w-full text-left p-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-950 border border-slate-200/90 text-xs transition-colors cursor-pointer flex items-center justify-between gap-2 group"
                >
                  <span className="line-clamp-1 font-medium">{faq.question}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-700 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Magtanong o mag-type ng question..."
              className="flex-1 text-xs px-3.5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 text-slate-800"
            />
            <button
              onClick={() => handleSend()}
              className="w-9 h-9 rounded-full bg-[#14532d] hover:bg-[#0e3b20] text-white flex items-center justify-center transition-colors shadow-xs flex-shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

