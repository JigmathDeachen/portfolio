export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  location?: string;
  description?: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface ProjectWorkflowStep {
  step: number;
  title: string;
  subtitle?: string;
  iconName?: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  typeLabel: string;
  isCompanyProject?: boolean;
  tagline?: string;
  description: string;
  technologies: string[];
  techLine?: string;
  myRoleTitle?: string;
  myRoleDistinction?: {
    systemOverview: string;
    myFocus: string;
  };
  businessPurpose?: string;
  functionalities?: string[];
  workflow?: ProjectWorkflowStep[];
  myContributions?: string[];
  challenges?: string[];
  highlights?: ProjectHighlight[];
  eventProcessing?: {
    title: string;
    subtitle?: string;
    description: string;
    flow?: string[];
  };
  apiIntegration?: {
    title: string;
    description: string;
  };
  confidentialityNotice?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  status: 'Certified' | 'Currently Pursuing' | 'Completed';
  level: string;
  dateOrPeriod: string;
  details: string;
  badge: string;
}

export interface EngineeringStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyPractices: string[];
}

export interface ArchitectureConcept {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  keyComponent: string;
  codeSnippet?: string;
}
