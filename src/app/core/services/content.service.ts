import { Injectable, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

import { EDUCATION } from '../data/education.data';
import { EDUCATION_EN } from '../data/education.en.data';
import { EXPERIENCES } from '../data/experience.data';
import { EXPERIENCES_EN } from '../data/experience.en.data';
import { PROFILE } from '../data/profile.data';
import { PROFILE_EN } from '../data/profile.en.data';
import { PROJECTS } from '../data/projects.data';
import { PROJECTS_EN } from '../data/projects.en.data';
import { TECHNOLOGY_GROUPS } from '../data/technologies.data';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { TechnologyGroup } from '../models/technology.model';

const MAX_FEATURED_PROJECTS = 6;

/**
 * Único ponto de leitura do conteúdo do site (FRD seção 8). Hoje lê de
 * arquivos tipados em `core/data`, escolhendo o idioma ativo (pt/en); trocar
 * por uma API no futuro muda só esta classe.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly translocoService = inject(TranslocoService);
  private readonly lang: Signal<string> = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang()
  });

  private readonly isEn = computed(() => this.lang() === 'en');

  readonly profile = computed<Profile>(() => (this.isEn() ? PROFILE_EN : PROFILE));
  readonly experiences = computed<Experience[]>(() => (this.isEn() ? EXPERIENCES_EN : EXPERIENCES));
  readonly education = computed<Education[]>(() => (this.isEn() ? EDUCATION_EN : EDUCATION));
  readonly technologyGroups = computed<TechnologyGroup[]>(() => TECHNOLOGY_GROUPS);

  private readonly allProjects = computed<Project[]>(() => (this.isEn() ? PROJECTS_EN : PROJECTS));

  readonly featuredProjects = computed<Project[]>(() =>
    this.allProjects()
      .filter((project) => project.featured && this.hasLink(project))
      .sort((a, b) => a.order - b.order)
      .slice(0, MAX_FEATURED_PROJECTS)
  );

  getAllProjects(): Project[] {
    return this.allProjects();
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.allProjects().find((project) => project.slug === slug);
  }

  private hasLink(project: Project): boolean {
    return Boolean(project.repoUrl || project.demoUrl);
  }
}
