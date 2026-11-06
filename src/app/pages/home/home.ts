import { Component, effect, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Stack } from './sections/stack/stack';

@Component({
  selector: 'app-home',
  imports: [About, Experience, Projects, Stack, Education, Contact],
  templateUrl: './home.html'
})
export class Home {
  constructor() {
    const translocoService = inject(TranslocoService);
    const language = inject(LanguageService);
    const seoService = inject(SeoService);

    effect(() => {
      language.lang();
      seoService.update({
        title: translocoService.translate('seo.homeTitle'),
        description: translocoService.translate('seo.homeDescription'),
        path: '/'
      });
    });
  }
}
