// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'other';
  featured: boolean;
  completedAt: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  achievements: string[];
}