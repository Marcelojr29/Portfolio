import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, MatIcon, TranslocoPipe],
  template: `
    <article class="flex flex-col gap-4 border border-outline-subtle rounded-md p-6 h-full">
      <div>
        <h3 class="font-display text-xl text-on-surface m-0">{{ project().name }}</h3>
        <p class="mt-2 text-on-surface-muted">{{ project().shortDescription }}</p>
      </div>

      <ul class="flex flex-wrap gap-2 list-none m-0 p-0 mt-auto">
        @for (tech of project().technologies; track tech) {
          <li class="text-xs border border-outline-subtle rounded-full px-2.5 py-1 text-on-surface-muted">
            {{ tech }}
          </li>
        }
      </ul>

      <div class="flex items-center gap-4 text-sm">
        <a
          class="inline-flex items-center gap-1 font-medium text-accent hover:underline underline-offset-4"
          [routerLink]="['/projetos', project().slug]"
        >
          {{ 'projects.viewDetails' | transloco }}
          <mat-icon class="text-base! leading-none! w-4! h-4!" aria-hidden="true">arrow_forward</mat-icon>
        </a>

        @if (project().repoUrl) {
          <a
            class="inline-flex items-center gap-1 text-on-surface-muted hover:text-on-surface hover:underline underline-offset-4"
            [href]="project().repoUrl"
            target="_blank"
            rel="noopener"
          >
            {{ 'projects.repository' | transloco }}
          </a>
        }

        @if (project().demoUrl) {
          <a
            class="inline-flex items-center gap-1 text-on-surface-muted hover:text-on-surface hover:underline underline-offset-4"
            [href]="project().demoUrl"
            target="_blank"
            rel="noopener"
          >
            {{ 'projects.demo' | transloco }}
          </a>
        }
      </div>
    </article>
  `
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
