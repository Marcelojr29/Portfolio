import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const SITE_NAME = 'Marcelo Borges — Portfólio';
const SITE_URL = 'https://marceloborges.dev';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update(data: SeoData): void {
    const fullTitle = `${data.title} · ${SITE_NAME}`;
    const url = `${SITE_URL}${data.path}`;
    const image = data.image ?? DEFAULT_IMAGE;

    this.title.setTitle(fullTitle);

    this.setTag('description', data.description);
    this.setTag('og:title', fullTitle);
    this.setTag('og:description', data.description);
    this.setTag('og:image', image);
    this.setTag('og:url', url);
    this.setTag('og:type', 'website');
    this.setTag('twitter:card', 'summary_large_image');
    this.setTag('twitter:title', fullTitle);
    this.setTag('twitter:description', data.description);
    this.setTag('twitter:image', image);
  }

  private setTag(nameOrProperty: string, content: string): void {
    const isOpenGraph = nameOrProperty.startsWith('og:');
    const selector = isOpenGraph
      ? `property="${nameOrProperty}"`
      : `name="${nameOrProperty}"`;

    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ content }, selector);
    } else {
      this.meta.updateTag(
        isOpenGraph ? { property: nameOrProperty, content } : { name: nameOrProperty, content }
      );
    }
  }
}
