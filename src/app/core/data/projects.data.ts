import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'csela',
    name: 'CSELA — Plataforma de Gestão de Moradores',
    shortDescription:
      'Plataforma web para gestão de moradores, com front-end em React/Next.js integrado a uma API em NestJS.',
    detail: {
      context:
        'Plataforma para gestão de moradores, pensada para centralizar informações e processos que antes dependiam de controles manuais.',
      challenge:
        'Entregar uma interface responsiva e confiável, consumida por um público não técnico, mantendo o código organizado em componentes reutilizáveis.',
      solution:
        'Front-end em React.js e Next.js com TypeScript e Tailwind CSS, integrado a uma API em NestJS com persistência em PostgreSQL via TypeORM, em ambiente containerizado com Docker.',
      result:
        'Plataforma em produção, com correções e melhorias incrementais entregues continuamente junto a uma equipe multidisciplinar.'
    },
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker'],
    repoUrl: null,
    demoUrl: 'https://www.csela.com.br/',
    featured: true,
    order: 1
  },
  {
    slug: 'cezar-construcoes',
    name: 'Site Institucional — Cezar Construções',
    shortDescription:
      'Site institucional em Angular com formulário de contato integrado e deploy na Vercel.',
    detail: {
      context:
        'Presença institucional para uma construtora, com foco em transmitir credibilidade e facilitar o primeiro contato com clientes.',
      challenge:
        'Garantir performance de carregamento e um formulário de contato confiável, sem exigir backend próprio da empresa.',
      solution:
        'Site desenvolvido em Angular e TypeScript, com formulários validados no cliente e integração a APIs externas para automação do contato (Express + Nodemailer), otimizado para carregamento rápido e publicado na Vercel.',
      result:
        'Site institucional em produção, com melhor usabilidade no envio de contato e comunicação mais rápida para a empresa.'
    },
    technologies: ['Angular', 'TypeScript', 'Express', 'Nodemailer', 'Vercel'],
    repoUrl: null,
    demoUrl: 'https://cezarconstrucoes.vercel.app/',
    featured: true,
    order: 2
  }
];
