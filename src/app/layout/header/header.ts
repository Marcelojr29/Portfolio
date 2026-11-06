import { DOCUMENT } from '@angular/common';
import {
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { filter } from 'rxjs';

import { LanguageToggle } from '../../shared/language-toggle/language-toggle';
import { ThemeToggle } from '../../shared/theme-toggle/theme-toggle';

interface NavItem {
  labelKey: string;
  fragment: string;
}

const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.about', fragment: 'sobre' },
  { labelKey: 'nav.experience', fragment: 'experiencia' },
  { labelKey: 'nav.projects', fragment: 'projetos' },
  { labelKey: 'nav.stack', fragment: 'stack' },
  { labelKey: 'nav.education', fragment: 'formacao' },
  { labelKey: 'nav.contact', fragment: 'contato' }
];

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconButton, MatIcon, ThemeToggle, LanguageToggle, TranslocoPipe],
  templateUrl: './header.html'
})
export class Header {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private observer: IntersectionObserver | null = null;

  protected readonly navItems = NAV_ITEMS;
  readonly menuOpen = signal(false);
  protected readonly activeFragment = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      this.setupScrollSpy();

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          setTimeout(() => this.setupScrollSpy(), 0);
        });

      this.destroyRef.onDestroy(() => this.observer?.disconnect());
    });
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private setupScrollSpy(): void {
    this.observer?.disconnect();

    const sections = NAV_ITEMS.map((item) => this.document.getElementById(item.fragment)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) {
      this.activeFragment.set(null);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.activeFragment.set(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}
