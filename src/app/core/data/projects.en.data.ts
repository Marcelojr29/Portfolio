import { Project } from '../models/project.model';

export const PROJECTS_EN: Project[] = [
  {
    slug: 'csela',
    name: 'CSELA — Resident Management Platform',
    shortDescription:
      'Web platform for resident management, with a React/Next.js front-end integrated with a NestJS API.',
    detail: {
      context:
        'A platform for resident management, designed to centralize information and processes that used to depend on manual controls.',
      challenge:
        'Deliver a responsive, reliable interface for a non-technical audience, while keeping the code organized into reusable components.',
      solution:
        'Front-end built with React.js and Next.js using TypeScript and Tailwind CSS, integrated with a NestJS API backed by PostgreSQL via TypeORM, running in a Dockerized environment.',
      result:
        'Platform in production, with incremental fixes and improvements delivered continuously alongside a multidisciplinary team.'
    },
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker'],
    repoUrl: null,
    demoUrl: 'https://www.csela.com.br/',
    featured: true,
    order: 1
  },
  {
    slug: 'cezar-construcoes',
    name: 'Institutional Website — Cezar Construções',
    shortDescription:
      'Institutional website built with Angular, with an integrated contact form and deployment on Vercel.',
    detail: {
      context:
        'An institutional presence for a construction company, focused on conveying credibility and making it easy for clients to make first contact.',
      challenge:
        "Ensure fast load performance and a reliable contact form, without requiring the company to run its own backend.",
      solution:
        'Site built with Angular and TypeScript, with client-side validated forms and integration with external APIs to automate contact handling (Express + Nodemailer), optimized for fast loading and deployed on Vercel.',
      result:
        'Institutional site in production, with better contact-form usability and faster communication for the company.'
    },
    technologies: ['Angular', 'TypeScript', 'Express', 'Nodemailer', 'Vercel'],
    repoUrl: null,
    demoUrl: 'https://cezarconstrucoes.vercel.app/',
    featured: true,
    order: 2
  }
];
