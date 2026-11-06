import { TechnologyGroup } from '../models/technology.model';

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    category: 'frontend',
    label: 'Front-end',
    items: [
      'Angular',
      'React.js',
      'Next.js (App Router)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Signals',
      'RxJS',
      'Redux',
      'Tailwind CSS',
      'Styled Components'
    ]
  },
  {
    category: 'backend',
    label: 'Integração & Back-end',
    items: ['Node.js', 'NestJS', 'Prisma ORM', 'TypeORM', '.NET', 'Entity Framework', 'REST APIs', 'Swagger', 'OAuth 2.0', 'JWT']
  },
  {
    category: 'database',
    label: 'Banco de Dados',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB']
  },
  {
    category: 'devops',
    label: 'DevOps & Ferramentas',
    items: ['Git', 'GitHub', 'Docker', 'Azure DevOps', 'SonarQube', 'IIS', 'Jira', 'Bitbucket']
  },
  {
    category: 'tools',
    label: 'Metodologias',
    items: ['Scrum', 'Kanban', 'Clean Code', 'Modular Architecture', 'MVVM']
  }
];
