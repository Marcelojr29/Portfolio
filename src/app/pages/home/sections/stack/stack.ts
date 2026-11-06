import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-stack',
  imports: [TranslocoPipe],
  templateUrl: './stack.html'
})
export class Stack {
  protected readonly groups = inject(ContentService).technologyGroups;
}
