import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-experience',
  imports: [TranslocoPipe],
  templateUrl: './experience.html'
})
export class Experience {
  protected readonly experiences = inject(ContentService).experiences;
}
