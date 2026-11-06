import { Component, computed, effect, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, MatIcon, TranslocoPipe],
  templateUrl: './project-detail.html'
})
export class ProjectDetail {
  private readonly slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';
  private readonly contentService = inject(ContentService);

  protected readonly project = computed(() => this.contentService.getProjectBySlug(this.slug));

  constructor() {
    const router = inject(Router);
    const seoService = inject(SeoService);

    effect(() => {
      const project = this.project();

      if (!project) {
        router.navigateByUrl('/pagina-nao-encontrada', { skipLocationChange: true });
        return;
      }

      seoService.update({
        title: project.name,
        description: project.shortDescription,
        path: `/projetos/${project.slug}`
      });
    });
  }
}
