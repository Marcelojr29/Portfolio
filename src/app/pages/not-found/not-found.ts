import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './not-found.html'
})
export class NotFound {
  constructor() {
    const translocoService = inject(TranslocoService);
    const language = inject(LanguageService);
    const seoService = inject(SeoService);

    effect(() => {
      language.lang();
      seoService.update({
        title: translocoService.translate('seo.notFoundTitle'),
        description: translocoService.translate('seo.notFoundDescription'),
        path: '/pagina-nao-encontrada'
      });
    });
  }
}
