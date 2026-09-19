import React, { useState } from 'react';
import { 
  Video, 
  Users, 
  Calendar, 
  Sparkles, 
  Film, 
  ExternalLink, 
  Play, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Gift, 
  UserPlus, 
  Music, 
  Mic, 
  Camera, 
  PenTool, 
  Trophy, 
  Flame, 
  HeartHandshake,
  Search,
  Filter,
  CalendarDays,
  FileCheck,
  AlertCircle,
  GraduationCap,
  Award
} from 'lucide-react';

type CampusLifeSection = 'pov' | 'clubs' | 'calendar';

export const CampusLifeView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<CampusLifeSection>('pov');
  const [selectedClubCategory, setSelectedClubCategory] = useState<string>('All');
  const [clubSearch, setClubSearch] = useState<string>('');
  const [calendarMonth, setCalendarMonth] = useState<string>('All');

  // Student Clubs Data exactly from user specification
  const clubsData = [
    {
      name: 'ASIATECH Creatives',
      category: 'Creative & Arts',
      subTag: 'Multimedia Arts',
      description: 'The multimedia arts powerhouse at ASIATECH. Perfect for students interested in capturing moments and producing stunning visuals.',
      members: '40+ Creators',
      schedule: 'Thursdays 3:00 PM - 5:00 PM',
      skills: [
        'DSLR Photography',
        'Cinematic Videography',
        'Graphic Design',
        'Lights & Sounds Management'
      ],
      perks: 'Access to professional camera rigs, stabilizers, and editing suites.',
      howToJoin: 'Submit a printed portfolio of your previous photography, video, or graphic projects to the Creative Office (Room 302) during the Club Fair.',
      icon: <Camera className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'ASIATECH Musicians Club',
      category: 'Creative & Arts',
      subTag: 'Band & Instruments',
      description: 'A collaborative haven for singer-songwriters, instrumentalists, and school bands to jam, plug in, and rock the campus.',
      members: '35+ Musicians',
      schedule: 'Wednesdays 4:00 PM - 6:00 PM',
      skills: [
        'Acoustic & Electric Guitar',
        'Keyboard & Synthesizers',
        'Vocal Harmonies',
        'Stage Performance Coordination'
      ],
      perks: 'Practice in the acoustic rehearsal room and showcase your talent live at campus gigs.',
      howToJoin: 'Bring your own instrument and join the Live Audition & Jam Session held at the Campus Courtyard in the second week of June.',
      icon: <Music className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'ASIATECH Symphonic Choir',
      category: 'Creative & Arts',
      subTag: 'Formal Chorale',
      description: 'The official choral voice of ASIATECH. Performs rich harmonies at academic ceremonies, inter-collegiate tournaments, and cultural events.',
      members: '30+ Vocalists',
      schedule: 'Tuesdays 3:00 PM - 5:00 PM',
      skills: [
        'Vocal Warmups & Breathing',
        'Sight-Singing',
        'Soprano/Alto/Tenor/Bass Blending',
        'Choral Stage Etiquette'
      ],
      perks: 'Choral training under specialized directors, scholarship endorsement, and formal uniform sponsorship.',
      howToJoin: 'Undergo a vocal voice-range placement test and diagnostic audition supervised by the Choral Director at the Music Studio.',
      icon: <Mic className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'ASIATECH Static Dancers',
      category: 'Creative & Arts',
      subTag: 'Performance Dance',
      description: 'The elite dance squad of ASIATECH. Blends high-energy modern hip-hop with cultural routines to represent the school in regional matches.',
      members: '25+ Dancers',
      schedule: 'Mon & Fri 4:00 PM - 6:30 PM',
      skills: [
        'Urban Hip-Hop Choreography',
        'Contemporary & Jazz Fusion',
        'Sync & Formations',
        'Athletic Endurance'
      ],
      perks: 'Practice in our modern mirrored dance studio, official athletic apparel, and competition slots.',
      howToJoin: 'Attend the dance tryouts wearing comfortable athletic wear. Be ready to perform a 1-minute routine of your choice in the Mirrored Hall.',
      icon: <Flame className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'College Matrix',
      category: 'Communication & Media',
      subTag: 'School Paper & Press',
      description: 'The official student publication of ASIATECH. Serves as the independent, analytical journalism voice reporting on vital student issues.',
      members: '20+ Writers',
      schedule: 'Bi-weekly Tuesdays 3:00 PM',
      skills: [
        'Investigative Journalism',
        'Feature & News Writing',
        'Comic & Editorial Cartooning',
        'Newspaper Layout Design'
      ],
      perks: 'Official press credentials, publication honorarium, and priority access to state-of-the-art print labs.',
      howToJoin: "Submit a sample essay, news report, or editorial cartoon to the Editor-in-Chief's mailbox at Room 204 during the application week.",
      icon: <PenTool className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'Smart Mouth Club',
      category: 'Communication & Media',
      subTag: 'Hosting & Speech',
      description: 'The premier public speaking and emcee training society. Teaches stage confidence, voice modulation, and crowd control to lead campus festivals.',
      members: '18+ Hosts',
      schedule: 'Thursdays 1:30 PM - 3:00 PM',
      skills: [
        'Emceeing & Live Hosting',
        'Public Speaking Confidence',
        'Script & Voice Modulation',
        'Improvisational Stage Management'
      ],
      perks: 'Direct opportunities to host school programs, official institutional blazers, and microphone training.',
      howToJoin: "Deliver a short, 2-minute impromptu speech on a randomly drawn topic during the club's Open Mic and Recruitment Day.",
      icon: <Mic className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'ASIATECH Jaguars',
      category: 'Sports & Recreation',
      subTag: 'Varsity Athletics',
      description: 'The mighty athletic association of ASIATECH. Home to our elite varsity teams in Basketball, Volleyball, and Karatedo.',
      members: '80+ Athletes',
      schedule: 'Daily Varsity Slots (Varies)',
      skills: [
        'Tournament Strategy',
        'Physical Conditioning & Fitness',
        'Intramural League Planning',
        'Officiating & Fair Play'
      ],
      perks: 'Exclusive varsity gym access, premium branded jerseys, and tournament travel allowance.',
      howToJoin: 'Submit a medical clearance form and attend the official varsity selection trials organized by the Athletic Director.',
      icon: <Trophy className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'ASIATECH Flair Tending Society',
      category: 'Sports & Recreation',
      subTag: 'HRM & Tourism Skills',
      description: 'A highly specialized skills group designed for Hospitality Management and Tourism students to master bottle flips, mixology, and tableside flair.',
      members: '22+ Mixologists',
      schedule: 'Fridays 1:00 PM - 4:00 PM',
      skills: [
        'Advanced Mixology Concepts',
        'Bottle/Shaker Flair Tosses',
        'Creative Mocktail Curations',
        'Professional Customer Service'
      ],
      perks: 'Direct participation in culinary fairs, specialized practice tools, and guest chef workshops.',
      howToJoin: 'Open to HRM & Tourism majors. Register with your department head and attend the safety orientation at the campus Practice Bar.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />
    },
    {
      name: 'ASIATECH Campus Ministry',
      category: 'Values & Campus Life',
      subTag: 'Faith & Service',
      description: 'A spiritual and community leadership club dedicated to promoting character development, social outreach, and student mental wellness.',
      members: '40+ Members',
      schedule: 'Wednesdays 12:00 PM (Noon)',
      skills: [
        'Community Outreach Leadership',
        'Peer Guidance & Counseling',
        'Spiritual Mentorship',
        'Charitable Event Planning'
      ],
      perks: 'Supervised by experienced mentors, community volunteer certificates, and spiritual retreat funding.',
      howToJoin: 'Submit a recommendation form from any student guidance counselor or sign up directly at the Guidance and Ministry Office.',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />
    }
  ];

  // Calendar events data from official school calendar 1st Semester A.Y. 2026-2027 (incorporating Images 1, 2, and 5)
  const calendarEvents = [
    // JUNE
    {
      month: 'June',
      day: '01',
      activity: 'Enrollment Launch of OLD Students (First Semester AY 2026-2027)',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '02 & 03',
      activity: 'College Enrollment: BSBA (Marketing Management & HRM) Old Students',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '08',
      activity: 'START OF CLASSES: Basic Education Department | College Enrollment: BSA & BSED Old Students',
      type: 'Academic Milestone',
      color: 'emerald'
    },
    {
      month: 'June',
      day: '09',
      activity: 'College Enrollment: BSIT & ACT (Information Technology) Old Students',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '10 & 11',
      activity: 'RETREAT - Graduating College Students',
      type: 'Special Event',
      color: 'slate'
    },
    {
      month: 'June',
      day: '12',
      activity: '"Independence Day"',
      type: 'Official Holiday',
      color: 'red'
    },
    {
      month: 'June',
      day: '15',
      activity: 'College Enrollment: BSIT & ACT (2nd Window) | Student Orientation - recording per program',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '16',
      activity: 'College Enrollment: BSTM (Tourism Management) Old Students',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '17',
      activity: 'College Enrollment: BSCPE & BSCS (Comp Eng & Comp Sci) Old Students',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '18',
      activity: 'GRADUATION DAY!',
      type: 'Commencement',
      color: 'emerald'
    },
    {
      month: 'June',
      day: '22',
      activity: 'College Enrollment: BSCRIM (Criminology) Old Students',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '23',
      activity: 'College Enrollment: BSHM & AHM (Hospitality Management) Old Students',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'June',
      day: '29',
      activity: 'START OF CLASSES: College Department (First Semester AY 2026-2027)',
      type: 'Academic Milestone',
      color: 'emerald'
    },

    // JULY
    {
      month: 'July',
      day: '20 - 24',
      activity: 'PRELIM Examination (3 meetings)',
      type: 'Major Examination',
      color: 'yellow'
    },
    {
      month: 'July',
      day: '20 - 24',
      activity: 'AERIS is open for Prelim grades encoding',
      type: 'System Milestone',
      color: 'slate'
    },
    {
      month: 'July',
      day: '31',
      activity: 'Last day of Prelim Grades encoding @ 11pm',
      type: 'Grading Deadline',
      color: 'orange'
    },

    // AUGUST
    {
      month: 'August',
      day: 'All Month',
      activity: '* Class Scheduling for 2nd Semester *',
      type: 'Academic Notice',
      color: 'slate'
    },
    {
      month: 'August',
      day: '17 - 20',
      activity: 'MIDTERM Examination (3 meetings)',
      type: 'Major Examination',
      color: 'yellow'
    },
    {
      month: 'August',
      day: '24',
      activity: '"Ninoy Aquino Day"',
      type: 'Official Holiday',
      color: 'red'
    },
    {
      month: 'August',
      day: '31',
      activity: 'National Heroes Day!',
      type: 'Official Holiday',
      color: 'red'
    },

    // SEPTEMBER
    {
      month: 'September',
      day: '02',
      activity: 'Last of Midterm Grades encoding',
      type: 'Grading Deadline',
      color: 'orange'
    },
    {
      month: 'September',
      day: '01 - 05',
      activity: 'College Week / Educational Tour / Asynchronous',
      type: 'Special Activity',
      color: 'red'
    },
    {
      month: 'September',
      day: '21 - 25',
      activity: 'PRE-FINAL Examination (4 meetings)',
      type: 'Major Examination',
      color: 'yellow'
    },

    // OCTOBER
    {
      month: 'October',
      day: '02',
      activity: 'Last day of Pre-Final grades encoding @ 5pm',
      type: 'Grading Deadline',
      color: 'orange'
    },
    {
      month: 'October',
      day: '19 - 23',
      activity: 'FINAL Examination (3 meetings)',
      type: 'Major Examination',
      color: 'yellow'
    },
    {
      month: 'October',
      day: '19 - 23',
      activity: 'Last day of FINAL grades encoding (SEND Soft Copy to Registrar at registrar@asiatech.edu.ph)',
      type: 'Grading Deadline',
      color: 'orange'
    },

    // NOVEMBER
    {
      month: 'November',
      day: '02 - 06',
      activity: 'DRY RUN / AERIS',
      type: 'System Milestone',
      color: 'slate'
    },
    {
      month: 'November',
      day: '09',
      activity: 'ENROLLMENT PROPER / COLLEGE',
      type: 'Enrollment',
      color: 'blue'
    },
    {
      month: 'November',
      day: '30',
      activity: '"Bonifacio Day"',
      type: 'Official Holiday',
      color: 'red'
    },

    // DECEMBER
    {
      month: 'December',
      day: '01',
      activity: '1st Day of Class / COLLEGE (2nd Semester)',
      type: 'Academic Milestone',
      color: 'yellow'
    },
    {
      month: 'December',
      day: '08',
      activity: '"Immaculate Concepcion"',
      type: 'Official Holiday',
      color: 'red'
    },
    {
      month: 'December',
      day: '19',
      activity: '"SEMESTRAL BREAK"',
      type: 'School Break',
      color: 'red'
    }
  ];

  // Filtering clubs
  const filteredClubs = clubsData.filter((c) => {
    const matchesCat = selectedClubCategory === 'All' || c.category === selectedClubCategory;
    const q = clubSearch.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesQuery = 
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.skills.some(s => s.toLowerCase().includes(q)) ||
      c.subTag.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  // Filtering calendar events
  const filteredEvents = calendarEvents.filter((ev) => {
    return calendarMonth === 'All' || ev.month === calendarMonth;
  });

  const months = ['All', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const clubCategories = ['All', 'Creative & Arts', 'Communication & Media', 'Sports & Recreation', 'Values & Campus Life'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#14532d] via-[#166534] to-[#14532d] text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Campus Life & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Vibrant Asiatech Campus Life
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Experience the real energy of ASIATECH through student video perspectives, accredited collegiate clubs, and our official first semester academic calendar.
          </p>
        </div>
      </div>

      {/* Sub-Navigation Buttons: Campus Life POV | Student Clubs | Calendar / Events */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex flex-wrap gap-2">
        <button
          id="tab-campus-pov"
          onClick={() => setActiveSection('pov')}
          className={`flex-1 min-w-[180px] py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeSection === 'pov'
              ? 'bg-[#14532d] text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Campus Life POV</span>
        </button>

        <button
          id="tab-student-clubs"
          onClick={() => setActiveSection('clubs')}
          className={`flex-1 min-w-[180px] py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeSection === 'clubs'
              ? 'bg-[#14532d] text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Clubs</span>
        </button>

        <button
          id="tab-calendar-events"
          onClick={() => setActiveSection('calendar')}
          className={`flex-1 min-w-[180px] py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeSection === 'calendar'
              ? 'bg-[#14532d] text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Calendar / Events</span>
        </button>
      </div>

      {/* SECTION 1: CAMPUS LIFE POV (Images 3 and 4) */}
      {activeSection === 'pov' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          {/* Main Featured Video Walkthrough Card (Image 3) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column Info */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>FEATURED VIDEO WALKTHROUGH</span>
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Experience the Vibrant ASIATECH Vibe!
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Dive into student activities and real department events at ASIATECH. Check out our high-octane intramurals, dynamic team collaborations, and festive founding anniversaries. Watch our official student-led walkthrough to discover what waiting for you inside our campus!
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-900 uppercase tracking-wide">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block animate-pulse" />
                    <span>CAMPUS SPIRIT LIVE</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                    Be inspired by the talent, teamwork, and school pride of our outstanding student community.
                  </p>
                </div>
              </div>

              {/* Right Column YouTube Video Embed (Dark background matching screenshot) */}
              <div className="lg:col-span-6 bg-slate-900 p-6 sm:p-8 flex flex-col justify-center items-center">
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black relative group">
                  <iframe
                    src="https://www.youtube.com/embed/WE6viUMaKCE"
                    title="17 + 1 FOUNDING ANNIVERSARY Asia Technological School of Science and Arts - CHAMPIONS COLAB"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between w-full text-xs text-slate-400 px-1">
                  <span>Watch: Official ASIATECH Student POV & Collaboration Walkthrough</span>
                  <a
                    href="https://youtu.be/WE6viUMaKCE?si=grsp8pvUbhcFo8TH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ASIATECH Film Production Showcase (Image 4) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                  <Film className="w-6 h-6 text-emerald-700" />
                  <span>ASIATECH Film Production Showcase</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Creative media output and storytelling brought to life by Asia Technological School of Science and Arts students.
                </p>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                STUDENT SHORT FILMS
              </span>
            </div>

            {/* 2-Column Short Films Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Short Film 1 */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-900 w-full relative">
                  <iframe
                    src="https://www.youtube.com/embed/Ej4bljWNdHQ"
                    title="Kaakit-Akit (Short Film) Director's Cut"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 inline-block mb-1.5">
                      Kaakit-Akit (Short Film) Director's Cut
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">ASIATECH Film Showcase</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A collaborative visual project crafted by students, expressing campus culture and real-life stories.
                  </p>
                  <div className="pt-2 flex justify-end">
                    <a
                      href="https://youtu.be/Ej4bljWNdHQ?si=6VdnJMdEgyWj57kP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Short Film 2 */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-900 w-full relative">
                  <iframe
                    src="https://www.youtube.com/embed/_g2bV6B3whM"
                    title="ARC Short Film - 'Ayos? Ayos.'"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 inline-block mb-1.5">
                      ARC Short Film - "Ayos? Ayos."
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">ASIATECH Creative Media Presentation</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    An artistic short film capturing student life experiences, milestones, and outstanding visual designs.
                  </p>
                  <div className="pt-2 flex justify-end">
                    <a
                      href="https://youtu.be/_g2bV6B3whM?si=VxtUd6-w5Oz4Pwsk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: STUDENT CLUBS */}
      {activeSection === 'clubs' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Search & Category Filter Bar */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={clubSearch}
                onChange={(e) => setClubSearch(e.target.value)}
                placeholder="Search clubs by name, specialty, instruments, or skills (e.g. Photography, Guitar, Choir, Dance)..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {clubCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedClubCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedClubCategory === cat
                      ? 'bg-[#14532d] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top badges & icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                      {club.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                        {club.subTag}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {club.category}
                      </span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">
                      {club.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {club.description}
                    </p>
                  </div>

                  {/* Membership & Schedule */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Roster:</span>
                      <span className="font-bold text-slate-800">{club.members}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Regular Session:</span>
                      <span className="font-bold text-emerald-800">{club.schedule}</span>
                    </div>
                  </div>

                  {/* Core Skills */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide block">
                      Core Skills You'll Master:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {club.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-700 bg-emerald-50/50 p-1.5 rounded-lg border border-emerald-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Member Perks */}
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <Gift className="w-3.5 h-3.5 text-amber-700" />
                      <span>Member Perks & Access:</span>
                    </div>
                    <p className="text-amber-900/90 leading-relaxed">
                      {club.perks}
                    </p>
                  </div>
                </div>

                {/* How to Register */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-black uppercase text-slate-500">
                    <UserPlus className="w-3.5 h-3.5 text-emerald-600" />
                    <span>How to Register & Join:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {club.howToJoin}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* General Club Membership Guidelines (from User Prompt) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Official Accreditation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                General Club Membership Guidelines
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                ASIATECH maintains a high standard of co-curricular excellence. Follow these steps to officially align with any club.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center">
                  1
                </div>
                <h4 className="font-bold text-white text-base">Check Prerequisite Requirements</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Carefully read the specific recruitment instructions under each club card above. Ensure you have the required schedule availability and materials prepared.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center">
                  2
                </div>
                <h4 className="font-bold text-white text-base">Visit the Office of Student Affairs</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Head to the Office of Student Affairs (OSA) at the Ground Floor during the official Recruitment Week to file your interest form.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center">
                  3
                </div>
                <h4 className="font-bold text-white text-base">Attend the Orientation & Audition</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Await notice for the introductory orientation and audition session at the designated campus venues (Music Studio, Mirrored Hall, or OSA Bar).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: CALENDAR / EVENTS (Image 1, 2, and 5) */}
      {activeSection === 'calendar' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* FEATURED OFFICIAL ADVISORIES (Directly from Image 1 and Image 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* CARD 1: Start of Classes AY 2026-2027 (from Image 1) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#14532d] via-[#166534] to-[#0f3d20] text-white rounded-3xl p-6 sm:p-7 border border-emerald-700/50 shadow-lg flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-amber-400 text-amber-950">
                    Official Academic Advisory
                  </span>
                  <span className="text-xs text-emerald-200 font-bold">
                    A.Y. 2026-2027
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                    Start of Classes for the First Semester of AY 2026-2027
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-2 font-normal leading-relaxed">
                    Hi there ASIATECHIANS! Here is the updated start of classes for Academic Year 2026-2027:
                  </p>
                </div>

                {/* Prominent Dates Box */}
                <div className="space-y-2.5 pt-1">
                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-5 h-5 text-amber-300" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-emerald-200">Department</div>
                        <div className="text-xs sm:text-sm font-black text-white">Basic Education Department</div>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-amber-300 bg-amber-400/20 px-3 py-1 rounded-lg border border-amber-300/30 whitespace-nowrap">
                      June 08, 2026
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-5 h-5 text-emerald-300" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-emerald-200">Department</div>
                        <div className="text-xs sm:text-sm font-black text-white">College Department</div>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-white bg-emerald-500/30 px-3 py-1 rounded-lg border border-emerald-300/30 whitespace-nowrap">
                      June 29, 2026
                    </span>
                  </div>
                </div>

                <div className="bg-black/20 rounded-2xl p-3.5 border border-white/10 space-y-1.5">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>Enrollment is Still Ongoing!</span>
                  </div>
                  <p className="text-[11px] text-emerald-100 leading-relaxed">
                    Visit us on weekdays from 8:00 AM to 5:00 PM. Start your journey and #BeginHereinASIATECH! See you, Asiatechian!
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-200 font-bold">
                <span>#BeginHereinASIATECH</span>
                <span>#YourKeytoGlobalSuccess</span>
              </div>
            </div>

            {/* CARD 2: Schedule of Enrollment (Old Students) (from Image 2) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-700" />
                    <span className="text-xs font-black uppercase text-emerald-800 tracking-wider">
                      College Department • Enrollment Schedule
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
                    Old Students
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Schedule of Enrollment (Old Students) - First Semester AY 2026-2027
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Please ensure you bring all necessary documents and clearance. Strictly follow the assigned schedule for your program:
                </p>

                {/* Interactive Grid of Schedules matching Image 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 2 & 3 (Tue - Wed)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSBA (MM / HRM)</div>
                    <div className="text-[10px] text-slate-500">Marketing & Human Resource Management</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 8 (Monday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSA & BSED</div>
                    <div className="text-[10px] text-slate-500">Accountancy & Secondary Education</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 9 (Tuesday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSIT & ACT (AIT)</div>
                    <div className="text-[10px] text-slate-500">Information Tech & Assoc. in Computer Tech</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 15 (Monday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSIT & ACT (AIT)</div>
                    <div className="text-[10px] text-slate-500">2nd Window & Program Orientation Recording</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 16 (Tuesday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSTM</div>
                    <div className="text-[10px] text-slate-500">Tourism Management</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 17 (Wednesday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSCPE & BSCS</div>
                    <div className="text-[10px] text-slate-500">Computer Engineering & Computer Science</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 22 (Monday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSCRIM</div>
                    <div className="text-[10px] text-slate-500">Criminology</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-colors">
                    <div className="text-[11px] font-black text-emerald-800">June 23 (Tuesday)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">BSHM & AHM</div>
                    <div className="text-[10px] text-slate-500">Hospitality Management & Assoc. in HM</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-xs font-black text-[#14532d] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Incoming Freshmen: Enrollment is STILL ONGOING on weekdays!</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                  <span>#BeginHereinASIATECH</span>
                  <span>#YourKeytoGlobalSuccess</span>
                </div>
              </div>
            </div>

          </div>

          {/* Calendar Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-emerald-700" />
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  SCHOOL CALENDAR For College
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Academic Year 2026-2027 • 1st SEMESTER Official Schedule of Activities
              </p>
            </div>

            {/* Legend Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-yellow-100 text-yellow-900 border border-yellow-300">
                Major Examinations
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-rose-100 text-rose-900 border border-rose-200">
                Official Holidays & Breaks
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-900 border border-blue-200">
                Enrollment & Term Openings
              </span>
            </div>
          </div>

          {/* Month Filter Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setCalendarMonth(m)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  calendarMonth === m
                    ? 'bg-[#14532d] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {m === 'All' ? 'Full Semester' : m}
              </button>
            ))}
          </div>

          {/* Tabular Calendar View directly mirroring Image 5 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider">
                    <th className="py-4 px-6 w-36">Month</th>
                    <th className="py-4 px-6 w-36">Day / Date</th>
                    <th className="py-4 px-6">School Activities & Academic Schedule</th>
                    <th className="py-4 px-6 w-44 text-right">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredEvents.map((item, idx) => {
                    // Match highlights from Image 5
                    const isExam = item.color === 'yellow';
                    const isHoliday = item.color === 'red';
                    const isEnrollment = item.color === 'blue';

                    return (
                      <tr 
                        key={idx} 
                        className={`transition-colors ${
                          isExam 
                            ? 'bg-yellow-50/70 hover:bg-yellow-100/70 font-semibold' 
                            : isHoliday 
                              ? 'bg-rose-50/40 hover:bg-rose-100/50' 
                              : 'hover:bg-slate-50/80'
                        }`}
                      >
                        <td className="py-3.5 px-6 font-bold text-slate-800 whitespace-nowrap">
                          {item.month}
                        </td>
                        <td className="py-3.5 px-6 font-black whitespace-nowrap">
                          <span className={`inline-block px-2.5 py-0.5 rounded-md ${
                            isExam 
                              ? 'bg-yellow-200 text-yellow-950 font-black' 
                              : isHoliday 
                                ? 'text-rose-700 font-extrabold' 
                                : 'text-slate-900'
                          }`}>
                            {item.day}
                          </span>
                        </td>
                        <td className="py-3.5 px-6">
                          <span className={`${
                            isExam 
                              ? 'text-yellow-950 font-bold' 
                              : isHoliday 
                                ? 'text-rose-900 font-bold' 
                                : 'text-slate-800'
                          }`}>
                            {item.activity}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-right whitespace-nowrap">
                          <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md ${
                            isExam 
                              ? 'bg-yellow-200 text-yellow-900 border border-yellow-300' 
                              : isHoliday 
                                ? 'bg-rose-100 text-rose-800 border border-rose-200' 
                                : isEnrollment
                                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                  : 'bg-slate-100 text-slate-600'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Notice Card regarding AERIS & Grades Encoding */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>AERIS Faculty Grade Encoding & Soft Copy Submissions</span>
            </div>
            <p className="leading-relaxed">
              Faculty members must strictly adhere to the cut-off dates for encoding student marks in the AERIS portal (Prelim, Midterm, Pre-Final, and Finals). Soft copies of final grading sheets must be emailed directly to the Registrar at <strong>registrar@asiatech.edu.ph</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
