import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-social-links',
  imports: [MatIcon, TranslocoPipe],
  template: `
    <ul class="flex flex-wrap items-center gap-x-6 gap-y-2 list-none m-0 p-0 text-sm">
      <li>
        <a
          class="inline-flex items-center gap-1 text-on-surface-muted hover:text-on-surface underline-offset-4 hover:underline"
          [href]="profile().linkedinUrl"
          target="_blank"
          rel="noopener"
        >
          {{ 'social.linkedin' | transloco }}
          <mat-icon class="text-base! leading-none! w-4! h-4!" aria-hidden="true">arrow_outward</mat-icon>
        </a>
      </li>
      <li>
        <a
          class="inline-flex items-center gap-1 text-on-surface-muted hover:text-on-surface underline-offset-4 hover:underline"
          [href]="profile().githubUrl"
          target="_blank"
          rel="noopener"
        >
          {{ 'social.github' | transloco }}
          <mat-icon class="text-base! leading-none! w-4! h-4!" aria-hidden="true">arrow_outward</mat-icon>
        </a>
      </li>
      <li>
        <a
          class="inline-flex items-center gap-1 text-on-surface-muted hover:text-on-surface underline-offset-4 hover:underline"
          [href]="'mailto:' + profile().email"
        >
          {{ profile().email }}
        </a>
      </li>
    </ul>
  `
})
export class SocialLinks {
  protected readonly profile = inject(ContentService).profile;
}
