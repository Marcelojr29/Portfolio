import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslocoPipe } from '@jsverse/transloco';

import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [MatIconButton, MatIcon, MatTooltip, TranslocoPipe],
  template: `
    <button
      mat-icon-button
      type="button"
      [matTooltip]="(theme.theme() === 'light' ? 'theme.enableDark' : 'theme.enableLight') | transloco"
      [attr.aria-label]="(theme.theme() === 'light' ? 'theme.enableDark' : 'theme.enableLight') | transloco"
      (click)="theme.toggle()"
    >
      <mat-icon>{{ theme.theme() === 'light' ? 'dark_mode' : 'light_mode' }}</mat-icon>
    </button>
  `
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
}
