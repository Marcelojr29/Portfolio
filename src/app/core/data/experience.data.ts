import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    company: 'Jabil do Brasil Ltda.',
    role: 'Desenvolvedor de Software Frontend Jr.',
    city: 'Manaus, AM',
    startDate: 'Mai 2026',
    endDate: null,
    highlights: [
      'Evolução de aplicação Angular para monitoramento de indicadores de produção fabril, com PrimeNG e Tailwind CSS em arquitetura em camadas.',
      'Autenticação e autorização com JWT, incluindo interceptors HTTP, guards de rota e tratamento de expiração de sessão.',
      'Filtros avançados e exportação de relatórios em Excel via integração com APIs REST.',
      'Internacionalização da aplicação (pt-BR / en-US) com Transloco.',
      'Cobertura de testes unitários (Karma/Jasmine) e end-to-end (Cypress) integrados ao pipeline de CI.',
      'Evolução da pipeline de CI/CD no Azure DevOps com SonarQube, semantic-release e automação do deploy em IIS, substituindo o processo manual de publicação.'
    ],
    technologies: ['Angular', 'PrimeNG', 'Tailwind CSS', 'JWT', 'Transloco', 'Cypress', 'Azure DevOps', 'SonarQube']
  },
  {
    company: 'FIT - Instituto de Tecnologia',
    role: 'Estagiário em Desenvolvimento Web',
    city: 'Manaus, AM',
    startDate: 'Ago 2024',
    endDate: 'Abr 2026',
    highlights: [
      'Desenvolvimento e manutenção de aplicações web em ambiente de produto internacional com Angular, React.js e Next.js.',
      'Interfaces com Angular Material, Material UI e Styled Components, seguindo padrões de design e requisitos funcionais.',
      'APIs REST com NestJS, integração entre frontend e backend e correção de bugs.',
      'Login social com Google via OAuth 2.0 em Angular e Next.js, integrado a um backend NestJS.',
      'Modelagem e integração de PostgreSQL com Prisma ORM, além de consultas em BigQuery.',
      'Ambientes de desenvolvimento containerizados com Docker e Docker Compose, com apoio à sustentação em GCP.'
    ],
    technologies: ['Angular', 'React.js', 'Next.js', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'Docker', 'OAuth 2.0']
  },
  {
    company: 'Fundação HEMOAM',
    role: 'Assistente de TI',
    city: 'Manaus, AM',
    startDate: 'Dez 2021',
    endDate: 'Ago 2024',
    highlights: [
      'Desenvolvimento, manutenção e evolução de aplicações web com Angular no frontend e Django no backend.',
      'Manutenção do site institucional da fundação, implementando melhorias e corrigindo falhas.',
      'Evolução do sistema interno HemoSys AT, com melhorias e correção de problemas.',
      'Aplicações e ferramentas internas para os setores de Almoxarifado, Financeiro, Ambulatório e TI.',
      'Investigação e correção de falhas em aplicações existentes no ambiente hospitalar.'
    ],
    technologies: ['Angular', 'Django', 'Python']
  },
  {
    company: 'Secretaria de Estado do Meio Ambiente (SEMA)',
    role: 'Agente de Pesquisa',
    city: 'Manaus, AM',
    startDate: 'Fev 2020',
    endDate: 'Ago 2021',
    highlights: [
      'Análise, tratamento e organização de dados ambientais relacionados a indicadores climáticos e recursos hídricos.',
      'Dashboards interativos em Power BI para monitoramento de KPIs e visualização de dados ambientais.',
      'Pequenos sistemas e ferramentas de apoio à análise de dados.',
      'Estruturação e gerenciamento de bases de dados para estudos e análises ambientais.'
    ],
    technologies: ['Power BI']
  }
];
