
import { Project, Skill, Experience } from '@/types';


 //  existing projects data
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard built with modern technologies.',
    summary: 'Full-stack shopping app with React, Node.js, and Stripe integration',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/user/project',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
    completedAt: '2024-03'
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    summary: 'Collaborative task manager with real-time updates and drag-and-drop',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/user/project',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    category: 'web',
    featured: true,
    completedAt: '2024-01'
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A responsive weather application with beautiful visualizations and location-based services.',
    summary: 'Beautiful weather app with forecasts and location services',
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/user/project',
    technologies: ['React', 'Chart.js', 'OpenWeatherMap API'],
    category: 'web',
    featured: false,
    completedAt: '2023-11'
  },
  {
    id: 'mobile-fitness',
    title: 'Fitness Tracker',
    description: 'React Native mobile application for tracking workouts and monitoring progress.',
    summary: 'Mobile fitness tracker with workout logging and progress charts',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    githubUrl: 'https://github.com/user/project',
    technologies: ['React Native', 'Expo', 'Victory Charts'],
    category: 'mobile',
    featured: true,
    completedAt: '2024-02'
  }
];


 // existing skill data
export const skills: Skill[] = [
  { name: 'React', category: 'frontend', proficiency: 5 },
  { name: 'TypeScript', category: 'frontend', proficiency: 4 },
  { name: 'Next.js', category: 'frontend', proficiency: 4 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 5 },
  { name: 'Vue.js', category: 'frontend', proficiency: 3 },
  { name: 'Node.js', category: 'backend', proficiency: 4 },
  { name: 'PostgreSQL', category: 'backend', proficiency: 3 },
  { name: 'MongoDB', category: 'backend', proficiency: 3 },
  { name: 'Express.js', category: 'backend', proficiency: 4 },
  { name: 'Git', category: 'tools', proficiency: 4 },
  { name: 'Docker', category: 'tools', proficiency: 3 },
  { name: 'AWS', category: 'tools', proficiency: 3 },
  { name: 'Figma', category: 'tools', proficiency: 4 },
  { name: 'JavaScript', category: 'languages', proficiency: 5 },
  { name: 'Python', category: 'languages', proficiency: 3 },
  { name: 'Java', category: 'languages', proficiency: 2 },
  { name: 'SQL', category: 'languages', proficiency: 4 }
];


 //  existing experience data
export const experience: Experience[] = [
  {
    company: 'Tech Startup Inc.',
    position: 'Frontend Developer',
    description: "Developed React applications serving 10k+ users. Collaborated with design and backend teams.",
    startDate: '2023-06',
    endDate: undefined,
    location: 'Remote',
    achievements: [
      "Improved app performance by 40%",
      "Led TypeScript migration",
      "Mentored 2 junior developers"
    ]
  },
  {
    company: 'Digital Agency Co.',
    position: 'Junior Web Developer',
    description: 'Built custom websites using modern web technologies.',
    startDate: '2022-01',
    endDate: '2023-05',
    location: 'San Francisco, CA',
    achievements: [
      "Delivered 15+ client projects",
      "Reduced page load time by 30%"
    ]
  }
];