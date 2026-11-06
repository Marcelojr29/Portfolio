import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-education',
  imports: [TranslocoPipe],
  templateUrl: './education.html'
})
export class Education {
  protected readonly education = inject(ContentService).education;
}
