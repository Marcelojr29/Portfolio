import { TestBed } from '@angular/core/testing';

import { provideAppTransloco } from '../i18n/provide-app-transloco';
import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideAppTransloco()] });
    service = TestBed.inject(ContentService);
  });

  it('exposes no more than 6 featured projects (RN04)', () => {
    expect(service.featuredProjects().length).toBeLessThanOrEqual(6);
  });

  it('only shows projects that have a repository or demo link (RN02)', () => {
    for (const project of service.featuredProjects()) {
      expect(project.repoUrl || project.demoUrl).toBeTruthy();
    }
  });

  it('finds a project by slug', () => {
    const [first] = service.getAllProjects();
    expect(service.getProjectBySlug(first.slug)).toEqual(first);
  });

  it('returns undefined for an unknown slug', () => {
    expect(service.getProjectBySlug('nao-existe')).toBeUndefined();
  });
});
