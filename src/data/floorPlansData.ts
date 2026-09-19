export interface FloorRoom {
  id: string;
  code: string;
  name: string;
  category: 'Classroom' | 'Laboratory' | 'Faculty & Office' | 'Student Services' | 'Amenities' | 'Stock Room' | 'Restroom' | 'Safety';
  colorType: 'yellow' | 'orange' | 'green' | 'blue' | 'neutral';
  description: string;
  subLabel?: string;
  // SVG bounding box (in coordinate system 1000 x 600)
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FloorPlan {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  rooms: FloorRoom[];
}

export interface OfficeInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  requirements?: string[];
  operatingHours: string;
}

export const floorPlans: FloorPlan[] = [
  {
    id: 'first-floor',
    name: 'First Floor',
    subtitle: 'ASIATECH - MAIN BUILDING FIRST FLOOR',
    badge: 'Ground Level & Open Field',
    description: 'Houses student organizations, faculty offices, Criminology & ROTC headquarters, college canteen, kindergarten, and access to the Open Field.',
    rooms: [
      {
        id: '1a13',
        code: '1A13',
        name: 'Classroom 1A13',
        category: 'Classroom',
        colorType: 'orange',
        description: 'First-floor lecture classroom equipped with lecture armchairs, whiteboards, and ventilation.',
        x: 35,
        y: 310,
        width: 120,
        height: 120
      },
      {
        id: '1a12',
        code: '1A12',
        name: 'Classroom 1A12',
        category: 'Classroom',
        colorType: 'orange',
        description: 'First-floor standard lecture room for academic classes and student group discussions.',
        x: 160,
        y: 310,
        width: 115,
        height: 120
      },
      {
        id: 'crim-faculty',
        code: 'CRIM FACULTY',
        name: 'Criminology Faculty Office',
        category: 'Faculty & Office',
        colorType: 'orange',
        description: 'Faculty workspace and consultation desk for College of Criminology instructors and program heads.',
        x: 280,
        y: 335,
        width: 65,
        height: 95
      },
      {
        id: 'rotc-office',
        code: 'ROTC OFFICE',
        name: 'ROTC / NSTP Office',
        category: 'Faculty & Office',
        colorType: 'orange',
        description: 'Headquarters for Reserve Officers Training Corps (ROTC) cadre, NSTP coordinators, and field drill logistics.',
        x: 350,
        y: 335,
        width: 120,
        height: 95
      },
      {
        id: 'sbo-office',
        code: 'SBO',
        name: 'Student Body Organization (SBO)',
        category: 'Student Services',
        colorType: 'orange',
        description: 'Official office of the supreme student council. Coordinates student representation, campus events, and student welfare.',
        x: 475,
        y: 335,
        width: 135,
        height: 95
      },
      {
        id: 'jhs-faculty',
        code: 'JHS FACULTY',
        name: 'Junior High School Faculty',
        category: 'Faculty & Office',
        colorType: 'orange',
        description: 'Faculty room and consultation center for Asiatech Junior High School academic instructors.',
        x: 615,
        y: 335,
        width: 105,
        height: 95
      },
      {
        id: 'osa-office',
        code: 'OSA',
        name: 'Office of Student Affairs (OSA)',
        category: 'Student Services',
        colorType: 'yellow',
        description: 'Oversees student discipline, organization accreditations, clearance verifications, student handbook adherence, and campus activities.',
        x: 795,
        y: 335,
        width: 125,
        height: 95
      },
      {
        id: 'college-faculty',
        code: 'COLLEGE FACULTY',
        name: 'College Faculty Office',
        category: 'Faculty & Office',
        colorType: 'yellow',
        description: 'Consultation office and workspace for higher education professors across CCS, CBA, CTHM, and Education.',
        x: 925,
        y: 335,
        width: 105,
        height: 95
      },
      {
        id: 'f1-cr-canteen-left',
        code: 'CR',
        name: 'Comfort Room (Canteen Left)',
        category: 'Restroom',
        colorType: 'yellow',
        description: 'Restroom facility located next to the main campus canteen entrance.',
        x: 740,
        y: 90,
        width: 50,
        height: 35
      },
      {
        id: 'canteen-food',
        code: 'CANTEEN',
        name: 'Campus Food Stalls & Kitchen',
        category: 'Amenities',
        colorType: 'yellow',
        description: 'Main food service concessionaires serving hot rice meals, snacks, healthy breakfast, and refreshments.',
        x: 795,
        y: 90,
        width: 135,
        height: 35
      },
      {
        id: 'f1-cr-canteen-right',
        code: 'CR',
        name: 'Comfort Room (Canteen Right)',
        category: 'Restroom',
        colorType: 'yellow',
        description: 'Restroom facility situated adjacent to the canteen dining hall.',
        x: 935,
        y: 90,
        width: 45,
        height: 35
      },
      {
        id: 'canteen-hall',
        code: 'CANTEEN HALL',
        name: 'Canteen Dining Hall',
        category: 'Amenities',
        colorType: 'neutral',
        description: 'Spacious dining hall with clean tables and benches for student lunch breaks, study sessions, and relaxation. Practice CLAYGO (Clean As You Go).',
        x: 710,
        y: 130,
        width: 215,
        height: 125
      },
      {
        id: 'kinder',
        code: 'KINDER',
        name: 'Kindergarten Classroom',
        category: 'Classroom',
        colorType: 'yellow',
        description: 'Early childhood development and kindergarten learning center of Asiatech.',
        x: 930,
        y: 130,
        width: 55,
        height: 70
      },
      {
        id: 'custodian',
        code: 'CUSTODIAN',
        name: 'Custodian & Maintenance Room',
        category: 'Faculty & Office',
        colorType: 'yellow',
        description: 'Storage and headquarters for campus maintenance, physical facilities, and sanitization personnel.',
        x: 930,
        y: 205,
        width: 55,
        height: 75
      },
      {
        id: 'f1-cr-faculty-1',
        code: 'CR',
        name: 'Faculty Comfort Room 1',
        category: 'Restroom',
        colorType: 'yellow',
        description: 'Restroom located near the College Faculty and OSA wing.',
        x: 890,
        y: 435,
        width: 55,
        height: 35
      },
      {
        id: 'f1-cr-faculty-2',
        code: 'CR',
        name: 'Faculty Comfort Room 2',
        category: 'Restroom',
        colorType: 'yellow',
        description: 'Restroom located on the ground floor right wing.',
        x: 950,
        y: 435,
        width: 55,
        height: 35
      }
    ]
  },
  {
    id: 'mezzanine',
    name: 'Second Floor 2.1 (Mezzanine)',
    subtitle: 'ASIATECH - MAIN BUILDING SECOND FLOOR 2.1 (mezzanine)',
    badge: 'Intermediate Mezzanine Level',
    description: 'Contains student supply centers including the School Uniform Department, ID Lace Stock Room, and Departmental inventory facilities.',
    rooms: [
      {
        id: 'stock-uniform-dept',
        code: 'SCHOOL UNIFORM AN DEPT. STOCK ROOM',
        name: 'School Uniform & Department Stock Room',
        category: 'Stock Room',
        colorType: 'orange',
        description: 'Distribution and inventory depot for official Asiatech school uniforms, P.E. uniforms, department shirts, and faculty attire.',
        x: 885,
        y: 245,
        width: 65,
        height: 70
      },
      {
        id: 'stock-id-lace',
        code: 'ID LACE STOCK ROOM',
        name: 'ID Lace Stock Room',
        category: 'Stock Room',
        colorType: 'orange',
        description: 'Official campus repository for student lanyards, ID holders, institutional cards, and student orientation merchandise.',
        x: 815,
        y: 375,
        width: 60,
        height: 50
      },
      {
        id: 'stock-uniform',
        code: 'SCHOOL UNIFORM STOCK ROOM',
        name: 'School Uniform Stock Room',
        category: 'Stock Room',
        colorType: 'orange',
        description: 'Supplementary stock room storing reserve sizes of blouses, trousers, neckties, and blazers for the student body.',
        x: 935,
        y: 375,
        width: 60,
        height: 50
      }
    ]
  },
  {
    id: 'second-floor',
    name: 'Second Floor',
    subtitle: 'ASIATECH - MAIN BUILDING SECOND FLOOR',
    badge: 'Science Labs & Administrative Offices',
    description: 'Home to the Speech Laboratory, Chemistry Laboratory, Vice President Office, HR Office, Campus Health Clinic, Classrooms 2A1-2A4, and Comfort Rooms.',
    rooms: [
      {
        id: 'speech-lab',
        code: 'SPEECH-LAB',
        name: 'Speech & Language Laboratory',
        category: 'Laboratory',
        colorType: 'yellow',
        description: 'Acoustically treated language laboratory equipped with individual audio headsets, recording consoles, and pronunciation training modules.',
        x: 0,
        y: 230,
        width: 160,
        height: 180
      },
      {
        id: 'chem-lab',
        code: 'CHEM-LAB',
        name: 'Chemistry & Science Laboratory',
        category: 'Laboratory',
        colorType: 'yellow',
        description: 'Specialized science laboratory with chemical fume hoods, safety eyewash, titration kits, microscopes, and reagent storage.',
        x: 165,
        y: 230,
        width: 125,
        height: 180
      },
      {
        id: 'f2-cr-1',
        code: 'CR',
        name: 'Restroom Bay 1',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Restroom cubicle located on the upper hallway corridor.',
        x: 295,
        y: 230,
        width: 95,
        height: 30
      },
      {
        id: 'f2-cr-2',
        code: 'CR',
        name: 'Restroom Bay 2',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Restroom cubicle located on the upper hallway corridor.',
        x: 395,
        y: 230,
        width: 95,
        height: 30
      },
      {
        id: 'f2-cr-3',
        code: 'CR',
        name: 'Restroom Bay 3',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Restroom cubicle located on the upper hallway corridor.',
        x: 495,
        y: 230,
        width: 95,
        height: 30
      },
      {
        id: 'f2-cr-4',
        code: 'CR',
        name: 'Restroom Bay 4',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Restroom cubicle located on the upper hallway corridor.',
        x: 595,
        y: 230,
        width: 75,
        height: 30
      },
      {
        id: 'vp-office',
        code: 'VP OFFICE',
        name: 'Office of the Vice President',
        category: 'Faculty & Office',
        colorType: 'orange',
        description: 'Executive administrative suite of the Vice President for Academic and Institutional Affairs.',
        x: 295,
        y: 265,
        width: 140,
        height: 80
      },
      {
        id: 'room-2a4',
        code: '2A4',
        name: 'Classroom 2A4',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Second-floor lecture classroom with air conditioning and multimedia presentation support.',
        x: 440,
        y: 265,
        width: 110,
        height: 80
      },
      {
        id: 'room-2a2',
        code: '2A2',
        name: 'Classroom 2A2',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Second-floor lecture classroom dedicated to senior high school and tertiary education courses.',
        x: 600,
        y: 230,
        width: 150,
        height: 115
      },
      {
        id: 'room-2a1',
        code: '2A1',
        name: 'Classroom 2A1',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Standard lecture room 2A1, featuring ergonomic desks and faculty demonstration rostrum.',
        x: 755,
        y: 230,
        width: 95,
        height: 115
      },
      {
        id: 'f2-cr-large-1',
        code: 'COMFORT ROOM',
        name: 'Student Comfort Room (West)',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Multi-stall restroom facility for students with continuous water supply and vanity mirrors.',
        x: 855,
        y: 230,
        width: 125,
        height: 85
      },
      {
        id: 'f2-cr-large-2',
        code: 'COMFORT ROOM',
        name: 'Student Comfort Room (East)',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Secondary comfort room located next to the stairwell lobby.',
        x: 925,
        y: 230,
        width: 80,
        height: 85
      },
      {
        id: 'hr-office',
        code: 'HR OFFICE',
        name: 'Human Resources (HR) Office',
        category: 'Faculty & Office',
        colorType: 'orange',
        description: 'Institutional department handling personnel recruitment, employee benefits, faculty credentials, and institutional management.',
        x: 295,
        y: 365,
        width: 135,
        height: 50
      },
      {
        id: 'clinic-f2',
        code: 'CLINIC',
        name: 'Campus Health Clinic',
        category: 'Student Services',
        colorType: 'orange',
        description: 'Provides emergency triage, basic medical checkups, first-aid medication, resting quarters, and student health records.',
        x: 435,
        y: 365,
        width: 110,
        height: 50
      },
      {
        id: 'f2-cr-clinic',
        code: 'CR',
        name: 'Clinic Comfort Room',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Restroom facility situated beside the campus health clinic.',
        x: 550,
        y: 365,
        width: 45,
        height: 50
      }
    ]
  },
  {
    id: 'third-floor',
    name: 'Third Floor',
    subtitle: 'ASIATECH - MAIN BUILDING THIRD FLOOR',
    badge: 'IT Computer Labs & Learning Resource Center',
    description: 'Features Computer Laboratories 1, 2 & 3, Asiatech Main College Library, Classrooms 3A1-3A2, and Comfort Rooms.',
    rooms: [
      {
        id: 'cl1',
        code: 'CL1',
        name: 'Computer Laboratory 1',
        category: 'Laboratory',
        colorType: 'yellow',
        description: 'Equipped with 45+ high-spec desktop computers, software development IDEs, and fiber internet for computing students.',
        x: 20,
        y: 250,
        width: 105,
        height: 160
      },
      {
        id: 'cl2',
        code: 'CL2',
        name: 'Computer Laboratory 2',
        category: 'Laboratory',
        colorType: 'yellow',
        description: 'Specialized lab for network configuration, database management systems, multimedia design, and web applications.',
        x: 130,
        y: 250,
        width: 105,
        height: 160
      },
      {
        id: 'library',
        code: 'LIBRARY',
        name: 'Asiatech Main Library',
        category: 'Student Services',
        colorType: 'yellow',
        description: 'Central learning resource hub containing academic textbooks, research journals, e-library OPAC stations, and a silent study area.',
        x: 240,
        y: 250,
        width: 175,
        height: 160
      },
      {
        id: 'cl3',
        code: 'CL3',
        name: 'Computer Laboratory 3',
        category: 'Laboratory',
        colorType: 'orange',
        description: 'Third computing laboratory tailored for CISCO networking drills, cybersecurity modules, and senior capstone projects.',
        x: 420,
        y: 250,
        width: 110,
        height: 160
      },
      {
        id: 'room-3a2',
        code: '3A2',
        name: 'Classroom 3A2',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Third-floor academic classroom with high-ceiling ventilation and lecture audio-visual provisions.',
        x: 535,
        y: 250,
        width: 140,
        height: 160
      },
      {
        id: 'room-3a1',
        code: '3A1',
        name: 'Classroom 3A1',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Third-floor lecture room for business administration, hospitality management, and general education subjects.',
        x: 680,
        y: 250,
        width: 135,
        height: 160
      },
      {
        id: 'f3-cr-1',
        code: 'COMFORT ROOM',
        name: 'Comfort Room (West)',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Third-floor student restroom facility with sanitation fixtures.',
        x: 820,
        y: 250,
        width: 115,
        height: 75
      },
      {
        id: 'f3-cr-2',
        code: 'COMFORT ROOM',
        name: 'Comfort Room (East)',
        category: 'Restroom',
        colorType: 'orange',
        description: 'Third-floor restroom situated near the stairwell entry.',
        x: 940,
        y: 250,
        width: 100,
        height: 75
      }
    ]
  },
  {
    id: 'fourth-floor',
    name: 'Fourth Floor',
    subtitle: 'ASIATECH - MAIN BUILDING FOURTH FLOOR',
    badge: 'Moot Court & Senior Classrooms',
    description: 'Features the College of Criminology Court Room (4A4), and Academic Classrooms 4A1 through 4A8, along with Fire Exit corridors.',
    rooms: [
      {
        id: 'room-4a6',
        code: '4A6',
        name: 'Classroom 4A6',
        category: 'Classroom',
        colorType: 'yellow',
        description: 'Fourth-floor academic classroom situated in the north-west wing.',
        x: 20,
        y: 230,
        width: 115,
        height: 75
      },
      {
        id: 'room-4a5',
        code: '4A5',
        name: 'Classroom 4A5',
        category: 'Classroom',
        colorType: 'yellow',
        description: 'Fourth-floor lecture classroom overlooking the lower campus walkway.',
        x: 20,
        y: 310,
        width: 115,
        height: 95
      },
      {
        id: 'room-4a7',
        code: '4A7',
        name: 'Classroom 4A7',
        category: 'Classroom',
        colorType: 'yellow',
        description: 'Fourth-floor lecture hall used for advanced college subjects and seminars.',
        x: 195,
        y: 230,
        width: 150,
        height: 75
      },
      {
        id: 'court-room',
        code: 'COURT ROOM',
        subLabel: '4A4',
        name: 'Moot Court Room / 4A4',
        category: 'Laboratory',
        colorType: 'yellow',
        description: 'Authentic judicial mock trial simulation courtroom for Criminology and legal studies, featuring a judge bench, witness stand, defense and prosecution tables.',
        x: 195,
        y: 310,
        width: 150,
        height: 95
      },
      {
        id: 'room-4a3',
        code: '4A3',
        name: 'Classroom 4A3',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Spacious fourth-floor lecture hall with ample natural lighting and high airflow.',
        x: 350,
        y: 230,
        width: 130,
        height: 175
      },
      {
        id: 'room-4a2',
        code: '4A2',
        name: 'Classroom 4A2',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Fourth-floor classroom for business research, case analysis, and class presentations.',
        x: 485,
        y: 230,
        width: 145,
        height: 175
      },
      {
        id: 'room-4a1',
        code: '4A1',
        name: 'Classroom 4A1',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Fourth-floor classroom providing ergonomic seats and full presentation board space.',
        x: 635,
        y: 230,
        width: 155,
        height: 175
      },
      {
        id: 'room-4a8',
        code: '4A8',
        name: 'Classroom 4A8',
        category: 'Classroom',
        colorType: 'orange',
        description: 'Upper right wing classroom 4A8 situated above the stairwell access corridor.',
        x: 795,
        y: 230,
        width: 220,
        height: 75
      }
    ]
  }
];

// Pure informational data for Administrative Offices and Institutional Services
// ("yung mga ganyan wag mo na lagyan ng location info nalang" - info only!)
export const administrativeOfficesInfo: OfficeInfo[] = [
  {
    id: 'registrar',
    name: "Office of the University Registrar",
    category: "Academic Records & Certification",
    description: "The primary office responsible for student academic records, verification of official credentials, and graduation processing.",
    services: [
      "Official Transcript of Records (TOR) processing",
      "Certificate of Registration (COR) validation & reprinting",
      "Honorable Dismissal & Transfer Credentials",
      "Diplomas & Graduation Clearance processing",
      "Student CAV (Certification, Authentication, and Verification) for DFA/CHED"
    ],
    requirements: [
      "Official Asiatech Student ID card",
      "Clearance form (if graduating or transferring)",
      "Official Receipt from Cashier (for documentary requests)"
    ],
    operatingHours: "Monday to Friday: 8:00 AM - 5:00 PM | Saturday: 8:00 AM - 12:00 PM"
  },
  {
    id: 'cashier-accounting',
    name: "Cashier & Accounting Department",
    category: "Finance & Student Accounts",
    description: "Manages student tuition assessments, installment plans, official receipt issuance, and financial clearance.",
    services: [
      "Tuition fee payments and installment plans",
      "Official receipt (OR) issuance",
      "Examination permit validation",
      "Assessment of fees & scholarship discount application",
      "Refund requests and account ledger inquiries"
    ],
    requirements: [
      "Student ID number / Registration slip",
      "Assessment form / Billing statement"
    ],
    operatingHours: "Monday to Friday: 8:00 AM - 5:00 PM | Saturday: 8:00 AM - 12:00 PM"
  },
  {
    id: 'admissions',
    name: "Admissions & Marketing Office",
    category: "Enrollment & Inquiries",
    description: "Assists new applicants, transferees, and returning students with enrollment procedures and campus orientation.",
    services: [
      "New student enrollment processing",
      "Senior High School and College program counseling",
      "Evaluation of entrance documents and Form 138/137",
      "Scholarship program vouchers (ESC, SHS Voucher, DepEd)"
    ],
    requirements: [
      "Form 138 (Report Card)",
      "PSA Birth Certificate (Photocopy)",
      "Good Moral Certificate",
      "2x2 ID pictures with white background"
    ],
    operatingHours: "Monday to Friday: 8:00 AM - 5:00 PM | Saturday: 8:00 AM - 3:00 PM"
  },
  {
    id: 'guidance-center',
    name: "Guidance & Counseling Center",
    category: "Student Well-being & Career",
    description: "Provides a safe, welcoming, and confidential environment for counseling, emotional guidance, and career planning.",
    services: [
      "Individual and group counseling sessions",
      "Career pathway advising and job readiness profiling",
      "Psychological testing and inventory evaluations",
      "Peer facilitators network and mental wellness seminars"
    ],
    requirements: [
      "Walk-ins are always warmly accommodated",
      "Appointments can be scheduled via Student Gmail"
    ],
    operatingHours: "Monday to Friday: 8:00 AM - 5:00 PM"
  },
  {
    id: 'osa-info',
    name: "Office of Student Affairs (OSA)",
    category: "Student Life & Discipline",
    description: "Nurtures vibrant campus life, student leadership, organization accreditation, and the implementation of the Student Code of Conduct.",
    services: [
      "Student organization accreditation and renewals",
      "Campus activity permits and event endorsements",
      "Student Handbook and Code of Discipline implementation",
      "Lost and Found centralized repository",
      "Student uniform and grooming policy coordination"
    ],
    requirements: [
      "Student Organization Proposal Form for campus events",
      "Official Student ID"
    ],
    operatingHours: "Monday to Friday: 8:00 AM - 5:00 PM"
  },
  {
    id: 'clinic-info',
    name: "Campus Health & Wellness Clinic",
    category: "Health Services",
    description: "Provides first-aid emergency care, medical triage, bed rest facilities, and health clearances for students, faculty, and staff.",
    services: [
      "Emergency first aid and triage assessment",
      "Vital signs checkup and minor medical consultations",
      "Free over-the-counter medicine for common ailments (fever, headache, upset stomach)",
      "Medical clearance for sports events and OJT internships"
    ],
    requirements: [
      "Present Student ID",
      "Disclose existing medical allergies or maintenance prescriptions"
    ],
    operatingHours: "Monday to Saturday: 7:30 AM - 5:30 PM"
  }
];
