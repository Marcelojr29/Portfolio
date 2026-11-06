import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { provideAppTransloco } from '../../../../core/i18n/provide-app-transloco';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideAppTransloco()]
    });

    component = TestBed.createComponent(Contact).componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('does not submit when the form is invalid', () => {
    component.submit();
    expect(component.form.touched).toBe(true);
    httpMock.expectNone(() => true);
  });

  it('rejects an invalid e-mail', () => {
    component.form.controls.email.setValue('not-an-email');
    expect(component.form.controls.email.hasError('email')).toBe(true);
  });

  it('submits and reports success on a valid form', () => {
    component.form.setValue({
      name: 'Marcelo',
      email: 'marcelo@example.com',
      message: 'Mensagem de teste com mais de dez caracteres.'
    });

    component.submit();
    expect(component.state()).toBe('submitting');

    const req = httpMock.expectOne(() => true);
    req.flush({ ok: true });

    expect(component.state()).toBe('success');
  });

  it('reports an error state when the request fails', () => {
    component.form.setValue({
      name: 'Marcelo',
      email: 'marcelo@example.com',
      message: 'Mensagem de teste com mais de dez caracteres.'
    });

    component.submit();
    const req = httpMock.expectOne(() => true);
    req.flush('erro', { status: 500, statusText: 'Server Error' });

    expect(component.state()).toBe('error');
  });
});
