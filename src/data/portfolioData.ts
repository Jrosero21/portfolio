
import { Project, Skill, Experience } from '@/types';




 //  existing projects data
export const projects: Project[] = [
  {
    id: 'twitter-clone',
    title: 'Twitter Clone',
    description: 'A basic clone of the famous web app Twitter. Features include user creation and authentication, guest sign in, ability to create and like tweets, ability to upload images, ability to make comments, and dynamic page updates.',
    summary: 'Full-stack Social media app clone built with React, API and Database integration.',
    imageUrl: '/images/projects/twitterclonesnapshot.png',
    demoUrl: 'https://fitter-clone.vercel.app/',
    githubUrl: 'https://github.com/Jrosero21/fitter-clone',
    technologies: ['React', 'Tailwind CSS', 'Next.js', 'MongoDB', 'Prisma'],
    category: 'fullstack',
    featured: true,
    completedAt: '2025-08'
  },
  {
    id: 'library-app',
    title: 'Library',
    description: 'Library is an E-commerce website mockup. The site offers a variety of features including multiple pages, dynamic routing, sorting options, a fully functional cart, and responsive design.',
    summary: 'NFT marketplace app that brings together creators and collectors.',
    imageUrl: '/images/projects/librarysnapshot.png',
    demoUrl: 'https://e-commerce-app-main-orcin.vercel.app/',
    githubUrl: 'https://github.com/Jrosero21/e-commerce-app-main',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    category: 'web',
    featured: true,
    completedAt: '2025-08'
  },
  {
    id: 'ultraverse',
    title: 'Ultraverse',
    description: 'The final product of my internship with Frontend Simplified. This internship consisted of converting a static website into a dynamic application using various Node.js libraries such as Axios, Owl Carousel, and Animate on Scroll. Maintained version control with repository branches and pull requests on github.',
    summary: 'NFT marketplace app that brings together creators and collectors.',
    imageUrl: '/images/projects/ultraversesnapshot.png',
    demoUrl: 'https://jonny-utraverse.vercel.app/',
    githubUrl: 'https://github.com/Jrosero21/jonny-internship',
    technologies: ['React', 'JavaScript', 'Node', 'Git'],
    category: 'web',
    featured: true,
    completedAt: '2025-07'
  },
  {
    id: 'movie-db',
    title: 'My Movie DB',
    description: 'Responsive movie discovery web application that allows users to browse, search, and explore detailed information about movies in an engaging and visually appealing interface. Leveraging data from the TMDB API.',
    summary: 'Beautiful weather app with forecasts and location services',
    imageUrl: '/images/projects/mmdbsnapshot.png',
    demoUrl: 'https://mmdbv2-nine.vercel.app/',
    githubUrl: 'https://github.com/Jrosero21/mmdbv2',
    technologies: ['React', 'Vite', 'Node.js', 'TMDB API', 'CSS Modules','Bootstrap'],
    category: 'web',
    featured: false,
    completedAt: '2025-06'
  },
  {
    id: 'placeholder',
    title: 'Coming Soon',
    description: 'Mobile Apps coming soon.',
    summary: 'All web applications are mobile responsive. Mobile apps coming soon.',
    imageUrl: 'https://media.giphy.com/media/cebnL50gs0QJi53Yuj/giphy.gif',
    githubUrl: 'https://github.com/Jrosero21',
    technologies: ['React Native'],
    category: 'mobile',
    featured: false,
    completedAt: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
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