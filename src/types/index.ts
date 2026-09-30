export type SkillCategoryName =
  | "Programming"
  | "Backend"
  | "Frontend"
  | "Databases"
  | "AI / ML"
  | "Messaging / Integration"
  | "Tools"
  | "Dev / System"
  | "Core CS"
  | "Deployment";

export type ProjectCategory =
  | "Backend"
  | "Full Stack"
  | "AI/ML"
  | "Web"
  | "IoT";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  keyAchievement?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  decisions?: string[];
  results?: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
  featured?: boolean;
  priority: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  department?: string;
  organization?: string;
  period: string;
  year: string;
  location?: string;
  type: "primary" | "internship";
  summary: string;
  modernization?: string[];
  contributions?: string[];
  automation?: string;
  contexts?: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: SkillCategoryName;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  score: string;
  scoreLabel: string;
  level: "primary" | "secondary";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  url?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
