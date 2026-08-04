import {
  Smartphone,
  Database,
  Sparkles,
  Layers,
  GitBranch,
  Wrench,
  Code2,
  type LucideIcon,
} from 'lucide-react';

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'Android App Development', 'Cross-platform (Android & Windows)'],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Firebase Firestore', 'Firebase Auth', 'Firebase Storage', 'Cloud Functions', 'Hive (NoSQL)'],
  },
  {
    title: 'AI & APIs',
    icon: Sparkles,
    skills: ['Gemini AI API', 'Google Maps API', 'Google Places API', 'RESTful API Design & Integration'],
  },
  {
    title: 'State Management',
    icon: Layers,
    skills: ['Provider', 'SharedPreferences'],
  },
  {
    title: 'Dev Practices',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Agile / Scrum', 'Unit Testing', 'CI/CD basics'],
  },
  {
    title: 'Dev Tools',
    icon: Wrench,
    skills: ['Android Studio', 'VS Code', 'Linux (Fedora)', 'Bash'],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Dart', 'Java', 'C', 'JavaScript', 'HTML / CSS', 'SQL'],
  },
];

export type Project = {
  title: string;
  stack: string;
  description: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: 'ReliefNet',
    stack: 'Flutter · Firebase · Gemini AI · Maps API',
    description:
      'Production-grade AI-powered disaster relief and volunteer coordination platform submitted to the Google Solution Challenge 2026. Lead engineer on a 3-member team; achieved Top 106 of 85,000+ teams (top 0.13%) in India. Features a Firestore data model, a Gemini AI triage engine, a real-time crisis dashboard with Haversine-based GPS sorting, a 4-stage volunteer task workflow with geofence confirmation, offline report queuing, and role-based access control.',
    image:
      'https://images.pexels.com/photos/15545136/pexels-photo-15545136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rescue workers searching through rubble after an earthquake',
  },
  {
    title: 'Notes App',
    stack: 'Flutter · Dart · Firebase',
    description:
      'Cross-platform note-taking app with full CRUD, search and favorites, PIN-protected notes, and Firebase Cloud Firestore sync across devices.',
    image:
      'https://images.pexels.com/photos/6687738/pexels-photo-6687738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Top view of a person writing on paper with a smartphone',
  },
];

export const achievements = [
  {
    title: 'Google Solution Challenge 2026',
    detail:
      'Ranked Top 106 in India out of 85,000+ registrations and 6,700+ prototype submissions — top 0.13% nationally.',
  },
  {
    title: 'Academic Excellence',
    detail:
      'Maintained a CGPA of 8+ throughout two years of B.Tech CSE at GTBIT, Guru GGSIPU, New Delhi.',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
