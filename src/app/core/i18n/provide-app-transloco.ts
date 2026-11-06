import { EnvironmentProviders, isDevMode } from '@angular/core';
import { provideTransloco } from '@jsverse/transloco';

import { AppTranslocoLoader } from './transloco.loader';

export function provideAppTransloco(): EnvironmentProviders[] {
  return provideTransloco({
    config: {
      availableLangs: ['pt', 'en'],
      defaultLang: 'pt',
      fallbackLang: 'pt',
      reRenderOnLangChange: true,
      prodMode: !isDevMode()
    },
    loader: AppTranslocoLoader
  });
}
