import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

export type AppLang = 'pt' | 'en';

const STORAGE_KEY = 'portfolio-lang';
const HTML_LANG: Record<AppLang, string> = { pt: 'pt-BR', en: 'en-US' };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translocoService = inject(TranslocoService);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly lang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.resolveInitialLang()
  });

  constructor() {
    this.translocoService.setActiveLang(this.resolveInitialLang());

    effect(() => {
      const lang = this.lang() as AppLang;
      this.document.documentElement.setAttribute('lang', HTML_LANG[lang] ?? HTML_LANG.pt);
      if (this.isBrowser) {
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch {
          // localStorage pode estar indisponível (modo privado, cookies bloqueados); ignora.
        }
      }
    });
  }

  toggle(): void {
    const next: AppLang = this.lang() === 'pt' ? 'en' : 'pt';
    this.translocoService.setActiveLang(next);
  }

  private resolveInitialLang(): AppLang {
    if (!this.isBrowser) {
      return 'pt';
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') {
        return stored;
      }
    } catch {
      // Ignora e cai para o padrão.
    }

    return 'pt';
  }
}
