export type NavTab = 
  | 'home' 
  | 'about' 
  | 'admission' 
  | 'policies' 
  | 'map' 
  | 'departments' 
  | 'services' 
  | 'campus-life'
  | 'faq'
  | 'contact';

export interface Facility {
  id: string;
  name: string;
  shortDesc: string;
  iconName: 'books' | 'building' | 'monitor' | 'clinic' | 'guidance' | 'cafeteria' | 'science' | 'gym' | 'cashier';
  location: string;
  operatingHours: string;
  description: string;
  servicesProvided: string[];
  contactPerson: string;
  requirementsOrNotes?: string;
  bgHighlight?: string;
}

export interface Program {
  title: string;
  level: string;
  tag?: string;
  duration?: string;
  description: string;
  programChair?: string;
  dean?: string;
  careerPaths: string[];
  highlights?: string[];
}

export interface Department {
  id: string;
  name: string;
  code: string;
  dean: string;
  description: string;
  icon: string;
  programs: Program[];
}

export interface Policy {
  id: string;
  title: string;
  category: 'Uniform' | 'Academic' | 'Conduct' | 'Attendance' | 'Campus';
  summary: string;
  details: string[];
  importantRule?: string;
}

export interface FAQItem {
  id: string;
  category: 'Enrollment' | 'Uniforms & ID' | 'Academics' | 'Campus Life' | 'Tuition & Fees';
  question: string;
  answer: string;
}

export interface TourStep {
  step: number;
  title: string;
  description: string;
  targetTab?: NavTab;
  highlightText?: string;
}
