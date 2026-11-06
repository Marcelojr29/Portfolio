import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TranslocoPipe } from '@jsverse/transloco';
import { catchError, of } from 'rxjs';

import { FORMSPREE_ENDPOINT } from '../../../../core/data/contact.config';
import { ContentService } from '../../../../core/services/content.service';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput, TranslocoPipe],
  templateUrl: './contact.html'
})
export class Contact {
  private readonly http = inject(HttpClient);

  protected readonly profile = inject(ContentService).profile;
  readonly state = signal<SubmitState>('idle');

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    })
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('submitting');

    this.http
      .post(FORMSPREE_ENDPOINT, this.form.getRawValue(), {
        headers: { Accept: 'application/json' }
      })
      .pipe(
        catchError(() => {
          this.state.set('error');
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response === null) {
          return;
        }
        this.state.set('success');
        this.form.reset();
      });
  }
}
