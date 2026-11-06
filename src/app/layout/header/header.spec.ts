import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { provideAppTransloco } from '../../core/i18n/provide-app-transloco';
import { Header } from './header';

describe('Header', () => {
  let component: Header;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([]), provideAppTransloco()]
    });

    const fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts with the mobile menu closed', () => {
    expect(component.menuOpen()).toBe(false);
  });

  it('opens the mobile menu on toggle', () => {
    component.toggleMenu();
    expect(component.menuOpen()).toBe(true);
  });

  it('closes the mobile menu when an item is selected (RF03)', () => {
    component.toggleMenu();
    component.closeMenu();
    expect(component.menuOpen()).toBe(false);
  });
});
