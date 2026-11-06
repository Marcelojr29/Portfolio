import { RenderMode, ServerRoute } from '@angular/ssr';

import { PROJECTS } from './core/data/projects.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projetos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS.map((project) => ({ slug: project.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
