import React from 'react';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiVscodium, 
  SiVercel,
  SiNextdotjs,
  SiGsap,
  SiFramer,
  SiNetlify
} from 'react-icons/si';

import { 
  FaLinkedin, 
  FaGithub, 
  FaCode, 
  FaEnvelope, 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaWhatsapp
} from 'react-icons/fa';
import { desc } from 'framer-motion/client';

// Social Profiles & CTA Links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Abdul00Kadir',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdul-kadir-b1a084310/',
    icon: FaLinkedin,
  },
  // {
  //   name: 'Code',
  //   url: 'https://leetcode.com',
  //   icon: FaCode,
  // },
  {
    name: 'Email',
    url: 'mailto:788abdulkadir788@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/918433041563',
    icon: FaWhatsapp,
  }
  
];

// Profile Branded Stats
export const STATS = [
  { value: '3+', label: 'Projects Completed' },
  { value: '100+', label: 'GitHub Commits' },
  { value: '15+', label: 'Technologies Learned' },
  { value: 'Open', label: 'to Work' }
];

// Skills dataset with glow gradients
export const SKILLS = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
  { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 88 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
  // { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', level: 80 },
  // { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 80 },
  { name: 'GSAP', icon: SiGsap, color: '#61DAFB', level: 70 },
  { name: 'Framer Motion', icon: SiFramer, color: '#F24E1E', level: 75 },
  { name: 'Netlify', icon: SiNetlify, color: '#000000', level: 90 },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', level: 90 },
  { name: 'VS Code', icon: SiVscodium, color: '#007ACC', level: 95 },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', level: 90 }
];

// Projects dataset
export const PROJECTS = [
  {
    title: 'AH Pharmacy',
    category: 'Full Stack',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'Google Sheets'],
    description: 'Product showcase website for a pharmacy business, featuring direct sync with Google Sheets backend as inventory management, dynamic listing, search indexes and clean user interaction details.',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600',
    liveUrl: 'https://ah-pharmacy.vercel.app/',
    githubUrl: 'https://github.com/Abdul00kadir/ah-pharmacy',
  },
  {
    title: 'Quiz App',
    category: 'React',
    tech: ['React.js', 'Framer Motion', 'QuizAPI.io', 'Tailwind' ],
    description: 'Immersive online quiz application featuring category filtering, difficulties, timed states, active scoreboard tracking, and premium micro-interactions built using QuizAPI endpoints.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=600',
    liveUrl: 'https://quiz-by-abdul.netlify.app/',
    githubUrl: 'https://github.com/Abdul00kadir/quiz-app',
  },
  {
    title: 'Ninja Bath & Kitchen',
    category: 'WIX Studio',
    tech: ['Wix Studio'],
    description: 'Official corporate website showcasing luxury bathroom accessories and premium modular kitchen fixtures with detailed filters, zoom galleries, and custom layouts.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600',
    liveUrl: 'https://ninjambk.com/',
    // githubUrl: 'https://github.com',
  },
  {
    title: 'Portfolio Website',
    category: 'Frontend',
    tech: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP', 'Emailjs' ],
    description: 'My personal portfolio website built with React.js, Tailwind CSS, and GSAP for smooth animations. It features a responsive design, interactive sections, and a contact form integrated with Emailjs.',
    image: 'https://images.unsplash.com/photo-1581091870622-3e0b9f1c8d6e?auto=format&fit=crop&q=80&w=600',
    liveUrl: 'https://abdulkadir.vercel.app/',
    githubUrl: 'https://github.com/Abdul00kadir/portfolio-website',
  
  }

];

// Professional Experience dataset
export const EXPERIENCE = [
  {
    year: '2024 - Present',
    role: 'Freelance Developer',
    company: 'Self Employed',
    description: 'Building modern responsive web applications using React.js, Tailwind CSS and Node.js for client specifications. Translating complex design requirements into interactive pixel-perfect pages.',
  },
  {
    year: '2023 - 2024',
    role: 'Frontend Developer Intern',
    company: 'Tech Solutions Ltd.',
    description: 'Collaborated on codebases in React.js and CSS. Worked on performance speed optimizations, UI debugging, responsive redesign layouts, and integrating REST API endpoints.',
  },
  {
    year: '2022 - 2023',
    role: 'Web Developer Intern',
    company: 'Digital Agency Co.',
    description: 'Assisted in scaffolding client websites, writing HTML/CSS/JS snippets, and implementing user interaction details on interactive landing pages.',
  }
];

// Education history dataset
export const EDUCATION = [
  {
    year: '2023 - 2026',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IFTM University',
    location: 'Moradabad, India',
    description: 'Graduated with deep foundational learning in programming, algorithms, database query languages, and web engineering principles.'
  },
  {
    year: '2022',
    degree: '12th Standard (PCM)',
    institution: 'HBM Inter College',
    location: 'Moradabad, India',
    description: 'Completed secondary education with focused tracks in Physics, Chemistry, and Advanced Mathematics.'
  },
  {
    year: '2020',
    degree: '10th Standard',
    institution: 'HBM Inter College',
    location: 'Moradabad, India',
    description: 'Completed general education focusing on science foundations and basic computing tools.'
  }
];

// Certifications dataset
export const CERTIFICATIONS = [
  {
    title: 'Google Digital Garage',
    subtitle: 'Frontend Development Fundamentals',
    year: '2023',
    issuer: 'Google',
    icon: FaAward,
  },
  {
    title: 'Meta Front-End Developer',
    subtitle: 'Professional Certificate',
    year: '2023',
    issuer: 'Coursera / Meta',
    icon: FaAward,
  },
  {
    title: 'Responsive Web Design',
    subtitle: 'Developer Certification',
    year: '2022',
    issuer: 'freeCodeCamp',
    icon: FaAward,
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    subtitle: 'Developer Certification',
    year: '2022',
    issuer: 'freeCodeCamp',
    icon: FaAward,
  }
];

// Blog Posts dataset
export const BLOGS = [
  {
    title: 'How I Built a Quiz App with React & QuizAPI.io',
    date: 'May 12, 2024',
    readTime: '5 min read',
    excerpt: 'Deep dive into managing complex quiz states, implementing score metrics, and visual feedback hooks in a React application.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400',
    slug: 'build-quiz-app-react'
  },
  {
    title: 'My Learnings in MERN Stack Development Journey',
    date: 'Apr 24, 2024',
    readTime: '8 min read',
    excerpt: 'Key takeaways from learning backend architecture, modeling Mongo schemas, and configuring JWT-based authentication pipelines.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
    slug: 'mern-stack-learnings'
  },
  {
    title: 'Tips for Fresher Developers to Get Hired in 2026',
    date: 'Apr 10, 2024',
    readTime: '6 min read',
    excerpt: 'Actionable strategies for building standout portfolios, writing clean codebases, and nailing the technical code review round.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
    slug: 'tips-fresher-devs-hired'
  }
];
