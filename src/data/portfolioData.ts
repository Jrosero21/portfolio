
import { Project, Skill, Experience } from '@/types';




 //  existing projects data
export const projects: Project[] = [
  {
    id: 'ebay-generator',
    title: 'eBay AI Listing Generator',
    description: 'AI-powered eBay listing generator that takes product photos and outputs professional descriptions, safety details, and market-based pricing (React, Node.js, AWS Rekognition, OpenAI, eBay API).',
    summary: 'Full-stack AI-powered tool that automates product listing creation from photos. ** NOT LIVE DUE TO APIS **',
    imageUrl: '/images/projects/ebaysnapshot.png',
    demoUrl: 'https://drive.google.com/file/d/1qetVBJenqMAoSXTLa2DJU84-e3EvzIZ7/view?usp=sharing',
    githubUrl: 'https://github.com/Jrosero21/ebay-listing-generator',
    technologies: ['React', 'Node.js', 'Express', 'AWS Rekognition', 'OpenAI API', 'eBay Browse API'],
    category: 'fullstack',
    featured: true,
    completedAt: '2025-09'
  },
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
    featured: false,
    completedAt: '2025-08'
  },
  {
    id: 'storage-app',
    title: 'G Drive',
    description: 'App used for cloud storage.  Implemented Google sign-in for user authentication, can upload images of all types,  create new folders for organization.',
    summary: 'Storage app built to store documents/files/images in a could database',
    imageUrl: '/images/projects/gdrivesnapshot.png',
    demoUrl: 'https://drive-tutorial-eight.vercel.app/',
    githubUrl: 'https://github.com/Jrosero21/drive-tutorial',
    technologies: ['React', 'Next', 'TypeScript', 'SingleStore', 'Tailwind CSS', 'NextAuth'],
    category: 'web',
    featured: false,
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
    description: 'A React/Vite app that uses the TMDB API to let users search, browse, and view details for movies — including current showings near their location.',
    summary: 'Interactive movie discovery app leveraging TMDB API for real-time film data.',
    imageUrl: '/images/projects/mmdbsnapshot.png',
    demoUrl: 'https://mmdbv2-nine.vercel.app/',
    githubUrl: 'https://github.com/Jrosero21/mmdbv2',
    technologies: ['React', 'Vite', 'React Router', 'TMDB API','Bootstrap'],
    category: 'web',
    featured: false,
    completedAt: '2025-06'
  },
  {
    id: 'placeholder',
    title: 'Coming Soon',
    description: 'Mobile Apps coming soon.',
    summary: 'All web applications are mobile responsive. Mobile apps coming soon.',
    imageUrl: '/images/projects/comingsoon.gif',
    githubUrl: 'https://github.com/Jrosero21',
    technologies: ['React Native'],
    category: 'mobile',
    featured: false,
    completedAt: 'TBD'
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
    company: 'Skinstric A.I.',
    position: 'Frontend Developer Intern',
    description: "Developed responsive React workflows for data capture, image processing, and demographic analysis.",
    startDate: '2025-08',
    endDate: undefined,
    location: 'Remote',
    achievements: [
      "Converted Figma designs into responsive React components",
      "Implemented multi-step workflow (data capture → image upload → results)",
      "Integrated Google Cloud Function APIs for data and image processing",
      "Added client-side form validation and error handling",
      "Enabled image capture via webcam/mobile",
      "Displayed AI demographic predictions with editable results"
    ]
  },
  {
    company: 'Frontend Simplified',
    position: 'Frontend Developer Intern',
    description: 'Built a responsive React.js NFT platform with Firebase authentication, Firestore database, and REST API integration to display and manage 1,000+ digital assets, achieving fast load times and secure user access.',
    startDate: '2025-05',
    endDate: '2025-08',
    location: 'Remote',
    achievements: [
      "Developed responsive React components for NFT display",
      "Integrated REST APIs with Axios for NFT metadata retrieval",
      "Implemented Firebase Authentication with 500+ registered users",
      "Managed user data with Firestore Database",
      "Built 15+ reusable React components with Redux & Material-UI",
      "Deployed Firebase Cloud Functions for backend operations",
      "Reduced server response time by 30% for metadata retrieval",
      "Created mobile-responsive layouts (Flexbox & Grid, 98% compatibility)",
      "Collaborated in Agile workflow, resolving 40+ Jira tickets in 3 months",
      "Used Git for version control in a 3-person dev team"
    ]
  }
];