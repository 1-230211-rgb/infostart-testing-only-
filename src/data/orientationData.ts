import { Facility, Department, Policy, FAQItem, TourStep } from '../types';

export const facilitiesData: Facility[] = [
  {
    id: 'library',
    name: 'Library',
    shortDesc: 'Knowledge resource center and quiet collaborative study hub.',
    iconName: 'books',
    location: '3rd Floor, Main Academic Building',
    operatingHours: 'Monday – Friday: 8:00 AM – 6:00 PM | Saturday: 8:00 AM – 12:00 PM',
    description: 'The Asiatech Learning Resource Center provides a wide array of academic textbooks, peer-reviewed journals, digital research databases (e-Library terminals), and quiet reading carrels for individual and group studies.',
    servicesProvided: [
      'Book Borrowing and Returns (up to 3 academic books for 5 days)',
      'Digital OPAC terminal search & research database access',
      'Quiet individual study cubicles and group thesis discussion area',
      'Photocopying and printing service for educational materials',
      'Free high-speed campus academic Wi-Fi zone'
    ],
    contactPerson: 'Ms. Elena Ramos, Chief Librarian (library@asiatech.edu.ph)',
    requirementsOrNotes: 'Valid validated Asiatech Student ID required for entry and checkout. Bags must be placed in baggage counter.'
  },
  {
    id: 'registrar',
    name: 'Registrar',
    shortDesc: 'Official student records, credential verification, and enrollment.',
    iconName: 'building',
    location: 'Ground Floor, Administration Hall',
    operatingHours: 'Monday – Friday: 8:00 AM – 5:00 PM',
    description: 'The Office of the College Registrar manages student permanent records, Certificate of Registration (COR), official transcripts of records (TOR), graduation clearance, subject crediting, and certification requests.',
    servicesProvided: [
      'Certificate of Registration (COR) printing & validation',
      'Transcript of Records (TOR) & Honorable Dismissal processing',
      'Subject adding, dropping, and section shifting evaluation',
      'Issuance of Certificate of Enrollment and Good Moral (Co-issued)',
      'Diplomas and official academic credential releases'
    ],
    contactPerson: 'Atty. Roberto Tan, College Registrar (registrar@asiatech.edu.ph)',
    requirementsOrNotes: 'Present your Student ID or official receipt slip at Window 1 (Evaluation) or Window 2 (Releasing).'
  },
  {
    id: 'computer-lab',
    name: 'Computer Lab',
    shortDesc: 'High-performance computing workstations, programming, & networking labs.',
    iconName: 'monitor',
    location: '3rd Floor, Main Academic Building (ComLab 1, 2, & 3)',
    operatingHours: 'Monday – Saturday: 7:30 AM – 7:00 PM',
    description: 'Equipped with over 150 state-of-the-art workstations with dual-boot Linux & Windows environments, fiber-optic internet connection, Cisco routing switches, and industry-standard development software (VS Code, Python, Java, Oracle, Adobe Suite).',
    servicesProvided: [
      'Hands-on laboratory sessions for IT and Computer Science courses',
      'Network engineering and CISCO packet tracer simulations',
      'Multimedia editing, CAD rendering, and web development',
      'Open lab practice hours for student programming projects',
      'Hardware troubleshooting and server administration practicum'
    ],
    contactPerson: 'Engr. Mark Santos, IT Systems Administrator (comlab@asiatech.edu.ph)',
    requirementsOrNotes: 'No food or drinks allowed. Log in your student number at the biometric or log sheet before using any workstation.'
  },
  {
    id: 'clinic',
    name: 'Clinic',
    shortDesc: 'Comprehensive health, emergency medical, and dental care.',
    iconName: 'clinic',
    location: '2nd Floor, Main Building',
    operatingHours: 'Monday – Saturday: 7:30 AM – 5:30 PM (On-call medical staff)',
    description: 'The Campus Health Services Unit is staffed by licensed physicians, registered nurses, and visiting dental personnel dedicated to maintaining student and faculty physical health, first aid, and annual wellness examinations.',
    servicesProvided: [
      'Immediate first aid treatment for acute illnesses or injuries',
      'Free over-the-counter emergency medications and bed rest quarters',
      'Annual student physical & dental health clearance checkups',
      'Issuance of Medical Excuse Slips for excused class absences',
      'Blood pressure monitoring, BMI assessment, and wellness guidance'
    ],
    contactPerson: 'Dr. Maria Consuelo Reyes, School Physician (clinic@asiatech.edu.ph)',
    requirementsOrNotes: 'Students feeling unwell should immediately notify their class instructor and proceed directly to the clinic.'
  },
  {
    id: 'guidance',
    name: 'Office of Student Affairs (OSA)',
    shortDesc: 'Student welfare, organization accreditation, discipline, and campus activities.',
    iconName: 'guidance',
    location: 'Ground Floor, Main Academic Building',
    operatingHours: 'Monday – Friday: 8:00 AM – 5:00 PM',
    description: 'The Office of Student Affairs (OSA) fosters an empathetic and supportive environment for student welfare, co-curricular organizations, leadership development, campus activities, and discipline.',
    servicesProvided: [
      'Student organization accreditation and activity permits',
      'Student grievance and welfare assistance',
      'Leadership seminars and student development programs',
      'Campus discipline and student handbook orientation',
      'Student council and club activity coordination'
    ],
    contactPerson: 'Prof. Patricia Gomez, OSA Coordinator (osa@asiatech.edu.ph)',
    requirementsOrNotes: 'Visit during office hours on the Ground Floor for student club applications or welfare assistance.'
  },
  {
    id: 'cashier',
    name: 'Accounting',
    shortDesc: 'Tuition assessment, official receipts, and scholarship grants.',
    iconName: 'cashier',
    location: 'Ground Floor, Administration Wing',
    operatingHours: 'Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 8:00 AM – 12:00 PM',
    description: 'Handles financial assessments, tuition payments, installment schedule agreements, exam clearance validation, and scholarship grant endorsements.',
    servicesProvided: [
      'Tuition fee settlement (Cash, Maya, GCash, Bank Deposit)',
      'Official Receipt (OR) issuance and examination permit stamping',
      'Tuition installment plan arrangement and promissory evaluations',
      'CHED UniFAST, TES, and LGU scholarship liquidation assistance'
    ],
    contactPerson: 'Mr. Dennis Cruz, Head Accountant (accounting@asiatech.edu.ph)',
    requirementsOrNotes: 'Always present your Student Assessment Form (SAF) or student number when settling accounts.'
  },
  {
    id: 'cafeteria',
    name: 'Canteen',
    shortDesc: 'Nutritious meals, snacks, refreshments, and dining hall.',
    iconName: 'cafeteria',
    location: 'Ground Floor, Main Academic Building',
    operatingHours: 'Monday – Saturday: 6:30 AM – 6:30 PM',
    description: 'Features sanitary, affordable food concessionaires offering balanced hot rice meals, snacks, healthy smoothies, sandwiches, and student dining lounge tables.',
    servicesProvided: [
      'Affordable combo meals starting at ₱55 - ₱85',
      'Fresh fruit juices, pastries, and grab-and-go refreshments',
      'Water refilling station (free for personal tumblers)',
      'Clean dining tables with charging sockets for study breaks'
    ],
    contactPerson: 'Canteen Management Auxiliary (canteen@asiatech.edu.ph)',
    requirementsOrNotes: 'Clean As You Go (CLAYGO) policy is strictly observed by all Asiatech students and staff.'
  },
  {
    id: 'gym',
    name: 'Gymnasium & Sports Complex',
    shortDesc: 'Athletic training facility, intramurals venue, and university hall.',
    iconName: 'gym',
    location: 'Sports Complex (Behind Main Building)',
    operatingHours: 'Monday – Saturday: 7:00 AM – 8:00 PM',
    description: 'The home of the Asiatech Jaguars varsity teams! Includes a full FIBA-standard hardwood basketball court, volleyball courts, badminton bays, fitness weight training gym, and grandstand seating for 2,000 spectators.',
    servicesProvided: [
      'PE class instructions (Physical Fitness, Team Sports, Rhythmic Activities)',
      'Varsity Jaguar basketball, volleyball, and cheer squad training',
      'Annual Intramural Games, Founder’s Day, and University Convocations',
      'Equipment locker rooms and shower facilities for student-athletes'
    ],
    contactPerson: 'Coach Ricardo Rivera, Athletic Director (athletics@asiatech.edu.ph)',
    requirementsOrNotes: 'Appropriate non-marking athletic rubber shoes and Asiatech PE uniform required on the hardwood court.'
  }
];

export const departmentsData: Department[] = [
  {
    id: 'ceite',
    name: 'College of Engineering & Information Technology Education',
    code: 'CEITE',
    dean: 'Prof. Rozaida C. Tuazon, MIT',
    icon: 'Laptop',
    description: 'Empowers students with advanced software architecture, algorithmic computing, embedded microprocessor design, IoT networks, and enterprise IT management.',
    programs: [
      {
        title: 'BS Information Technology',
        level: '4 Years (8 Semesters)',
        tag: 'TECHNOLOGY & COMPUTING',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Focuses on practical database administration, modern web and mobile application deployment, server management, and network infrastructure.',
        programChair: 'Prof. Rozaida C. Tuazon, MIT – Program Chair',
        dean: 'Prof. Rozaida C. Tuazon, MIT',
        careerPaths: ['Full-Stack Web Developer', 'Database Administrator', 'System Administrator', 'IT Project Manager', 'Cybersecurity Analyst'],
        highlights: [
          'Web Application Development',
          'Information Assurance & Security',
          'Database Management Systems',
          'Systems Integration & Architecture'
        ]
      },
      {
        title: 'BS Computer Science',
        level: '4 Years (8 Semesters)',
        tag: 'TECHNOLOGY & COMPUTING',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Emphasizes computational math, data structures, algorithm efficiency, machine learning, and pure software engineering principles.',
        programChair: 'Prof. Rozaida C. Tuazon, MIT – OIC Dean',
        dean: 'Prof. Rozaida C. Tuazon, MIT',
        careerPaths: ['Software Engineer', 'Data Scientist', 'AI Engineer', 'Systems Analyst', 'Backend Developer'],
        highlights: [
          'Data Structures & Algorithms',
          'Theory of Computation',
          'Object-Oriented Programming',
          'Artificial Intelligence & ML Basics'
        ]
      },
      {
        title: 'BS Computer Engineering',
        level: '4 Years (8 Semesters)',
        tag: 'TECHNOLOGY & COMPUTING',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Fuses computer science theory with electrical engineering to master hardware-software co-design, microcontrollers, and IoT architectures.',
        programChair: 'Engr. Robert Allan G. Dimaranan – Faculty Head',
        careerPaths: ['Embedded Systems Engineer', 'Hardware Design Analyst', 'IoT Developer', 'Network Engineer', 'System Architect'],
        highlights: [
          'Digital Design',
          'Microprocessor Systems',
          'Embedded Systems with Arduino/Raspberry Pi',
          'Computer Networks & Security'
        ]
      },
      {
        title: 'BS Information Systems (BS Information System)',
        level: '4 Years (8 Semesters)',
        tag: 'TECHNOLOGY & COMPUTING',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Aligns business strategies with technological solutions, focusing on systems auditing, business intelligence, and enterprise software.',
        programChair: 'Prof. Rozaida C. Tuazon, MIT – OIC Dean',
        dean: 'Prof. Rozaida C. Tuazon, MIT',
        careerPaths: ['Business Systems Analyst', 'IT Auditor', 'ERP Consultant', 'Product Manager', 'Data Governance Specialist'],
        highlights: [
          'Enterprise Systems',
          'Business Process Management',
          'IT Audit & Control',
          'Data Analytics & Business Intelligence'
        ]
      },
      {
        title: 'Associate in Computer Technology',
        level: '2 Years (4 Semesters)',
        tag: 'TECHNOLOGY & COMPUTING',
        duration: '2 YEARS (4 SEMESTERS)',
        description: 'Equips students with solid hands-on knowledge of computer hardware systems, network setup, introductory programming, and IT support services.',
        programChair: 'Prof. Rozaida C. Tuazon, MIT – OIC Dean',
        dean: 'OIC Dean Prof. Rozaida C. Tuazon, MIT',
        careerPaths: ['IT Help Desk Specialist', 'Network Technician', 'Hardware Repair Specialist', 'System Installer', 'Junior Web Developer'],
        highlights: [
          'Computer Hardware Troubleshooting',
          'Introduction to Networks',
          'Python and Web Development',
          'Database Systems Design'
        ]
      }
    ]
  },
  {
    id: 'cbhtm',
    name: 'College of Business, Hospitality & Tourism Management',
    code: 'CBHTM',
    dean: 'Dr. Darle Joy B. Escuton & Prof. Lani D. Deada, PhD, LPT',
    icon: 'Briefcase',
    description: 'Equips prospective corporate leaders, CPAs, market analysts, luxury hospitality executives, and international travel consultants with professional mastery.',
    programs: [
      {
        title: 'BS Accountancy',
        level: '4 Years (8 Semesters)',
        tag: 'BUSINESS & FINANCE',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'A rigorous professional program training students in financial accounting, auditing, taxation, business law, and strategic financial management.',
        programChair: 'Dr. Darle Joy B. Escuton – Program Chair',
        careerPaths: ['Certified Public Accountant (CPA)', 'Corporate Auditor', 'Tax Consultant', 'Financial Analyst', 'Chief Financial Officer (CFO)'],
        highlights: [
          'Intermediate & Advanced Accounting',
          'Auditing Theory & Practice',
          'Business Law & Income Taxation',
          'Accounting Information Systems'
        ]
      },
      {
        title: 'BS Business Administration major in Marketing Management (BSBA Marketing)',
        level: '4 Years (8 Semesters)',
        tag: 'BUSINESS & FINANCE',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Prepares students to analyze consumer behavior, design creative marketing campaigns, manage brands, and drive commercial success.',
        programChair: 'Prof. Lani D. Deada, PhD, LPT – Business Admin Chair',
        careerPaths: ['Brand Manager', 'Digital Marketing Specialist', 'Sales Executive', 'Market Research Analyst', 'Public Relations Officer'],
        highlights: [
          'Consumer Behavior Analysis',
          'Digital & Content Marketing',
          'Professional Salesmanship',
          'Strategic Marketing Management'
        ]
      },
      {
        title: 'BS Business Administration major in Human Resource Management (BSBA HR Management)',
        level: '4 Years (8 Semesters)',
        tag: 'BUSINESS & FINANCE',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Focuses on strategic talent acquisition, labor relations, performance management systems, employee development, and corporate benefits.',
        programChair: 'Prof. Lani D. Deada, PhD, LPT – Business Admin Chair',
        careerPaths: ['HR Specialist', 'Recruitment Lead', 'Compensation & Benefits Analyst', 'Labor Relations Officer', 'Training Coordinator'],
        highlights: [
          'Human Resource Development',
          'Philippine Labor Laws',
          'Compensation and Benefits',
          'Organizational Behavior'
        ]
      },
      {
        title: 'BS Tourism Management',
        level: '4 Years (8 Semesters)',
        tag: 'HOSPITALITY & TOURISM MANAGEMENT',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Studies global tourism routes, travel agency management, tour guiding, airline ticketing systems, and eco-tourism preservation.',
        programChair: 'Prof. Marigrace R. Ramos, MBA – Program Chair',
        careerPaths: ['Travel Consultant', 'Tour Guide / Operator', 'Flight Attendant', 'Events Planner', 'Tourism Development Officer'],
        highlights: [
          'Global Destination Geography',
          'Airline GDS and Ticketing',
          'Ecotourism Development',
          'Event and Convention Planning'
        ]
      },
      {
        title: 'BS Hospitality Management',
        level: '4 Years (8 Semesters)',
        tag: 'HOSPITALITY & TOURISM MANAGEMENT',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Provides top-tier training in luxury hotel operations, bar/beverage management, culinary production, hospitality events, and guest relations.',
        programChair: 'Prof. Marigrace R. Ramos, MBA – Program Chair',
        careerPaths: ['Hotel General Manager', 'Executive Chef', 'Food & Beverage Director', 'Banquet Coordinator', 'Resort Operations Manager'],
        highlights: [
          'Advanced Culinary Arts',
          'Bar Operations and Mixology',
          'Front Office Management',
          'Quality Service Management'
        ]
      },
      {
        title: 'Associate in Hospitality Management (Associate in HRM)',
        level: '2 Years (4 Semesters)',
        tag: 'HOSPITALITY & TOURISM MANAGEMENT',
        duration: '2 YEARS (4 SEMESTERS)',
        description: 'A fast-track dual-education program focusing on core culinary skills, dining room operations, room service, and hospitality ethics.',
        programChair: 'Prof. Eduardo B. Tuquilar, MBA – Dean',
        dean: 'Prof. Eduardo B. Tuquilar, MBA',
        careerPaths: ['Hotel Receptionist', 'Junior Pastry Chef', 'Catering Coordinator', 'Cruise Crew Member', 'Restaurant Supervisor'],
        highlights: [
          'Basic Culinary Arts',
          'Front Office Operations',
          'Food & Beverage Cost Control',
          'Local & International Internships'
        ]
      }
    ]
  },
  {
    id: 'ceas',
    name: 'College of Education, Arts & Sciences',
    code: 'CEAS',
    dean: 'Dr. Marmelo V. Abante',
    icon: 'GraduationCap',
    description: 'Fosters disciplined law enforcement officers, forensic investigators, and transformative professional secondary educators built on integrity and academic rigor.',
    programs: [
      {
        title: 'BS Criminology (New)',
        level: '4 Years (8 Semesters)',
        tag: 'LAW ENFORCEMENT & SECURITY',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'A highly disciplined program covering crime detection, forensic science, penal management, traffic management, and law enforcement administration.',
        programChair: 'Dr. Marmelo V. Abante – Dean, College of Education, Arts & Sciences (CEAS)',
        dean: 'Dr. Marmelo V. Abante',
        careerPaths: ['Police Officer', 'NBI Agent', 'Forensic Investigator', 'Correctional Officer', 'Security Consultant / Officer'],
        highlights: [
          'Criminalistics & Forensics',
          'Criminal Law & Jurisprudence',
          'Law Enforcement Administration',
          'Marksmanship & Defensive Tactics'
        ]
      },
      {
        title: 'BS Education (BSEd) with Majors in English, Mathematics, and Social Studies (New)',
        level: '4 Years (8 Semesters)',
        tag: 'EDUCATION',
        duration: '4 YEARS (8 SEMESTERS)',
        description: 'Empowers future professional secondary school teachers with strong pedagogical skills, educational psychology, and specialized subject expertise. Offers majors in English, Mathematics, and Social Studies.',
        programChair: 'Prof. Ana Rose D. Lim, MAEd, LPT – Program Chair (English, Mathematics, Social Studies)',
        careerPaths: ['Secondary High School Teacher', 'Curriculum Developer', 'Educational Consultant', 'Online Tutor', 'School Administrator'],
        highlights: [
          'Pedagogical Content Knowledge',
          'Facilitating Learner-Centered Teaching',
          'Assessment in Learning',
          'Actual Field Practice Teaching (LET Optimized)'
        ]
      }
    ]
  }
];

export const policiesData: Policy[] = [
  {
    id: 'student-handbook-policy',
    title: 'Student Handbook & Code of Conduct',
    category: 'Campus',
    summary: 'Official advisory on the Code of Conduct, ID usage, grooming standards, and mandatory campus inspections.',
    details: [
      'ID Card Requirement: Students must wear the updated ID Card inside school premises and during online classes.',
      'Grooming & Decency: Students must be presentable and well-groomed in appearance and attire.',
      'Uniform Policy: Old students must wear proper uniform during classes. New students (ID starting with 1-26****) may wear civilian attire adhering to decency conventions until uniform is available.',
      'Mandatory Inspection: Implementation of mandatory inspection for everyone entering campus (frisking/body check if deemed necessary, inspection of bags/backpacks/handbags, and inspection of motorcycle compartments/storage boxes).',
      'Digital Handbook: Access full details via your official Student Gmail at https://bit.ly/ASIATECHStudentHandbook or approach your teacher.'
    ],
    importantRule: 'Disciplinary Measures: Students who violate rules and regulations shall be meted with disciplinary measures stated in Article XII, Code of Discipline.'
  },
  {
    id: 'uniform-policy',
    title: 'Dress Code & Campus Uniform Policy',
    category: 'Uniform',
    summary: 'Wearing the official Asiatech student uniform fosters pride, identity, and a safe learning environment.',
    details: [
      'Monday to Thursday: Complete prescribed institutional uniform. For male students: White polo with Asiatech patch, dark slacks, black formal leather shoes, and black socks. For female students: Prescribed blouse with necktie/ribbon, pleated skirt of institutional length (at or below knee level) or tailored slacks, and black closed shoes.',
      'Friday: Approved Asiatech College/Department organization t-shirt or official institutional polo shirt paired with modest dark denim jeans and clean sneakers.',
      'PE Classes: Official Asiatech Physical Education jogging pants and shirt must be worn exclusively on scheduled PE class hours.',
      'Prohibited on Campus: Slippers, sleeveless sandos, torn distressed jeans, crop tops, plunging necklines, and caps inside lecture rooms.'
    ],
    importantRule: 'Haircut and Grooming: Clean, professional, and well-groomed hair is encouraged. Hair colors should remain within natural color tones.'
  },
  {
    id: 'id-policy',
    title: 'Student Identification Card (ID) Protocol',
    category: 'Campus',
    summary: 'The "No ID, No Entry" policy is strictly implemented across all gates of Asiatech.',
    details: [
      'The Asiatech RFID Student ID Card must be visibly worn on your chest using the official Asiatech lanyard whenever inside campus premises.',
      'Student IDs must be tapped on the electronic RFID security turnstiles upon entrance and exit to log automated attendance and parent SMS notifications.',
      'Tampering, lending, or using another student’s ID constitutes a major disciplinary offense.',
      'In case of temporary loss or forgotten ID: Report directly to the Security Gate Officer for a Temporary Campus Pass (valid for 1 day only).'
    ],
    importantRule: 'Replacement for damaged or lost IDs can be requested at the Office of Student Affairs after submitting an Affidavit of Loss.'
  },
  {
    id: 'campus-security-emergency-policy',
    title: 'Campus Security & Emergency Procedures',
    category: 'Campus',
    summary: 'Your physical safety is our paramount priority. Security guards monitor the campus 24/7 with active emergency response drills.',
    details: [
      'Inspection of bags is conducted at the campus entrance. Prohibited substances and sharp objects are strictly confiscated.',
      'Earthquake and fire drills are conducted twice a semester in cooperation with the Santa Rosa Bureau of Fire Protection (BFP).',
      'During emergencies, sirens will sound. Evacuate to the designated Green Oval field area. Follow marshal instructions.'
    ],
    importantRule: 'Emergency evacuation assembly points are located at the ASIATECH Green Oval Field. Avoid elevator usage during tremors or fire emergency drills.'
  },
  {
    id: 'attendance-policy',
    title: 'Attendance & Excused Absences',
    category: 'Attendance',
    summary: 'ASIATECH values consistency and discipline. Attending lectures regularly is directly linked to scholastic excellence.',
    details: [
      'A student must maintain a minimum attendance of eighty percent (80%) of the total hours of a subject to earn passing status.',
      'Absences due to illness must be backed by a medical certificate verified and signed by the School Nurse within 48 hours of return.',
      'Three consecutive unexcused absences will trigger an automated email warning to parents and require a counselor\'s slip.',
      'Tardiness: Arriving 15 minutes after class commencement counts as Tardy. Three (3) recorded tardiness incidents are equivalent to one (1) unexcused absence.'
    ],
    importantRule: 'A student accumulating unexcused absences exceeding 20% of the course hours will automatically receive a grade of Dropped (DRP) or Failed due to Absences (FDA).'
  },
  {
    id: 'grading-system-policy',
    title: 'Grading System Structure',
    category: 'Academic',
    summary: 'We maintain an open, transparent, and strictly merit-based grading system accessible on the student portal.',
    details: [
      'Passing Mark: 50% overall average. General Grade range is from 1.0 (99-100% Excellent) to 3.0 (75-76% Passing) and 5.0 (Failed).',
      'Grade weight splits: 30% Prelims/Midterms Exam, 30% Final Examination, and 40% Continuous Class Standing (composed of quizzes, projects, case studies, and recitations).',
      'Completion policy: Incomplete (INC) grades must be completed within one (1) academic semester, otherwise they default to 5.0.'
    ],
    importantRule: 'Dean’s List Qualifications: Semestral GPA of 1.75 or better, with no individual course grade lower than 2.00 and no derogatory disciplinary record.'
  },
  {
    id: 'academic-integrity',
    title: 'Academic Integrity & Ethical Standards',
    category: 'Academic',
    summary: 'Asiatech upholds high ethical standards in all academic, exam, and research submissions.',
    details: [
      'The passing grade for all collegiate subjects is 75% or equivalent to a numerical grade of 3.00.',
      'Plagiarism, unauthorized collaboration, and submission of AI-generated work without attribution or instructor permission constitute academic dishonesty.',
      'Latin Honors eligibility requires continuous residency, no failing or dropped subjects, and full compliance with the institutional honor code.'
    ],
    importantRule: 'Students proven to engage in academic dishonesty will face disciplinary action through the Student Discipline Board.'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Enrollment',
    question: 'How do I officially confirm and finalize my enrollment for 2026?',
    answer: 'Once you submit your admission credentials (Form 138 / Grade 12 card, PSA Birth Certificate, Good Moral) and settle the minimum initial downpayment at the Cashier, the Registrar will issue your official stamped Certificate of Registration (COR). Your COR indicates your official block section, class schedule, and room assignments.'
  },
  {
    id: 'faq-2',
    category: 'Uniforms & ID',
    question: 'Where can I purchase the official Asiatech school uniform and PE attire?',
    answer: 'Uniforms, Asiatech lanyards, and PE uniforms are available at the Campus Bookstore / Uniform Center located next to the Student Center on the Ground Floor. Measurements can be taken on-site during weekdays from 8:30 AM to 4:30 PM.'
  },
  {
    id: 'faq-3',
    category: 'Academics',
    question: 'What is the student portal and how do I access my online grades and schedules?',
    answer: 'Every registered student receives an Asiatech Institutional Google Workspace account (e.g., student-id@asiatech.edu.ph) and login credentials for the Asiatech Student Information Portal. You can view your grades, class announcements, attendance, and tuition balance online 24/7.'
  },
  {
    id: 'faq-4',
    category: 'Tuition & Fees',
    question: 'Can I pay my tuition in monthly installments?',
    answer: 'Yes! Asiatech offers flexible installment schemes: Semi-monthly, Quarterly, or Monthly installment plans. Payments can be settled directly on-campus or via electronic channels including GCash, Maya, and partner bank transfers. Always email proof of online transfer to accounting@asiatech.edu.ph.'
  },
  {
    id: 'faq-5',
    category: 'Campus Life',
    question: 'How can I join student clubs and the Asiatech Jaguars sports varsity teams?',
    answer: 'During the first month of the semester, the Office of Student Affairs and Supreme Student Council host "Org Fair Week". You can sign up for interest clubs (IT Society, Junior Philippine Institute of Accountants, Red Cross Youth, Dance Troupe, Campus Ministry, etc.). Athletic varsity tryouts for the Jaguars are announced by the Sports Complex.'
  },
  {
    id: 'faq-6',
    category: 'Campus Life',
    question: 'What should I do if I feel unwell or have a medical emergency on campus?',
    answer: 'Inform your nearest professor or student marshal and proceed immediately to the Campus Health Clinic (2nd Floor, Main Building). Basic consultations, fever meds, first aid, and resting cots are free of charge for all registered students.'
  }
];

export const tourStepsData: TourStep[] = [
  {
    step: 1,
    title: 'Welcome to Asiatech InfoStart!',
    description: 'Welcome new Jaguar! InfoStart is your official digital orientation guide to help you navigate campus life, find your classrooms, and learn institutional policies.',
    targetTab: 'home',
    highlightText: 'Look around the home screen to find key campus spots.'
  },
  {
    step: 2,
    title: 'Explore Campus Facilities',
    description: 'Click on any facility card like the Library, Registrar, Computer Lab, or Clinic to view their location, services, and operating hours.',
    targetTab: 'home',
    highlightText: 'You can explore each facility to earn orientation progress!'
  },
  {
    step: 3,
    title: 'Review School Policies & Dress Code',
    description: 'Familiarize yourself with the Asiatech dress code, ID regulations, attendance policies, and Dean’s list grading criteria in the Policies tab.',
    targetTab: 'policies',
    highlightText: 'Staying informed ensures a smooth and rewarding college experience.'
  },
  {
    step: 4,
    title: 'Navigate the Interactive Campus Map',
    description: 'Find classrooms, science labs, registrar windows, and student lounges with our multi-level building layout directory.',
    targetTab: 'map',
    highlightText: 'Never get lost on your first day of classes!'
  },
  {
    step: 5,
    title: 'Meet Your Jaguar Orientation Assistant',
    description: 'Need quick help? Tap the green Jaguar mascot button at the bottom-right corner anytime to chat or ask questions!',
    targetTab: 'faq',
    highlightText: 'We’re here with you every step of the way toward global success.'
  }
];
