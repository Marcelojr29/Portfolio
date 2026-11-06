import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslocoPipe } from '@jsverse/transloco';

import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-toggle',
  imports: [MatIconButton, MatTooltip, TranslocoPipe],
  template: `
    <button
      mat-icon-button
      type="button"
      [matTooltip]="'language.switchLabel' | transloco"
      [attr.aria-label]="'language.switchLabel' | transloco"
      (click)="language.toggle()"
    >
      <span class="text-xs font-medium tracking-wide">{{ language.lang() === 'pt' ? 'EN' : 'PT' }}</span>
    </button>
  `
})
export class LanguageToggle {
  protected readonly language = inject(LanguageService);
}
