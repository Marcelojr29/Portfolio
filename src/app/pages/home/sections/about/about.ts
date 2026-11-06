import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../../../core/services/content.service';
import { Avatar } from '../../../../shared/avatar/avatar';

@Component({
  selector: 'app-about',
  imports: [Avatar, MatIcon, RouterLink, TranslocoPipe],
  templateUrl: './about.html'
})
export class About {
  protected readonly profile = inject(ContentService).profile;
}
