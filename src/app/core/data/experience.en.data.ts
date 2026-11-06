import { Experience } from '../models/experience.model';

export const EXPERIENCES_EN: Experience[] = [
  {
    company: 'Jabil do Brasil Ltda.',
    role: 'Frontend Software Developer Jr.',
    city: 'Manaus, AM',
    startDate: 'May 2026',
    endDate: null,
    highlights: [
      'Evolution of an Angular application for monitoring factory production indicators, with PrimeNG and Tailwind CSS in a layered architecture.',
      'Authentication and authorization with JWT, including HTTP interceptors, route guards and session-expiration handling.',
      'Advanced filters and report exports to Excel via REST API integration.',
      'Application internationalization (pt-BR / en-US) with Transloco.',
      'Unit test coverage (Karma/Jasmine) and end-to-end tests (Cypress) integrated into the CI pipeline.',
      'Evolved the Azure DevOps CI/CD pipeline with SonarQube, semantic-release and automated IIS deployment, replacing the manual publishing process.'
    ],
    technologies: ['Angular', 'PrimeNG', 'Tailwind CSS', 'JWT', 'Transloco', 'Cypress', 'Azure DevOps', 'SonarQube']
  },
  {
    company: 'FIT - Instituto de Tecnologia',
    role: 'Web Development Intern',
    city: 'Manaus, AM',
    startDate: 'Aug 2024',
    endDate: 'Apr 2026',
    highlights: [
      'Development and maintenance of web applications in an international product environment with Angular, React.js and Next.js.',
      'Interfaces built with Angular Material, Material UI and Styled Components, following design patterns and functional requirements.',
      'REST APIs with NestJS, covering feature implementation, front-end/back-end integration and bug fixes.',
      'Google social login via OAuth 2.0 in Angular and Next.js, integrated with a NestJS backend.',
      'PostgreSQL modeling and integration with Prisma ORM, plus queries in BigQuery.',
      'Containerized development environments with Docker and Docker Compose, supporting deployment on GCP.'
    ],
    technologies: ['Angular', 'React.js', 'Next.js', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'Docker', 'OAuth 2.0']
  },
  {
    company: 'Fundação HEMOAM',
    role: 'IT Assistant',
    city: 'Manaus, AM',
    startDate: 'Dec 2021',
    endDate: 'Aug 2024',
    highlights: [
      'Development, maintenance and evolution of web applications using Angular on the frontend and Django on the backend.',
      "Maintenance of the foundation's institutional website, implementing improvements and fixing issues.",
      'Evolution of the internal HemoSys AT system, implementing improvements and fixing problems.',
      'Internal web applications and tools for different departments, including Warehouse, Finance, Outpatient Care and IT.',
      'Investigation and resolution of issues in existing applications in the hospital environment.'
    ],
    technologies: ['Angular', 'Django', 'Python']
  },
  {
    company: 'Secretaria de Estado do Meio Ambiente (SEMA)',
    role: 'Research Agent',
    city: 'Manaus, AM',
    startDate: 'Feb 2020',
    endDate: 'Aug 2021',
    highlights: [
      'Analysis, processing and organization of environmental data related to climate indicators and water resources.',
      'Interactive Power BI dashboards for KPI monitoring and environmental data visualization.',
      'Small systems and tools to support data analysis.',
      'Structuring and management of databases used in environmental studies and analyses.'
    ],
    technologies: ['Power BI']
  }
];
