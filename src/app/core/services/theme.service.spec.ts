import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('toggles between light and dark', () => {
    const initial = service.theme();
    service.toggle();
    expect(service.theme()).not.toBe(initial);
    service.toggle();
    expect(service.theme()).toBe(initial);
  });

  it('persists the chosen theme to localStorage (RF13)', () => {
    service.toggle();
    TestBed.flushEffects();
    expect(localStorage.getItem('portfolio-theme')).toBe(service.theme());
  });

  it('reflects the current theme on the <html> element', () => {
    service.toggle();
    TestBed.flushEffects();
    expect(document.documentElement.getAttribute('data-theme')).toBe(service.theme());
  });
});
