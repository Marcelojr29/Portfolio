import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { Observable, of } from 'rxjs';

import en from './en.json';
import pt from './pt.json';

const TRANSLATIONS: Record<string, Translation> = { pt, en };

/**
 * Carrega as traduções de arquivos importados estaticamente (sem HTTP),
 * para funcionar de forma idêntica no prerender (build) e no navegador.
 */
@Injectable({ providedIn: 'root' })
export class AppTranslocoLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<Translation> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS['pt']);
  }
}
