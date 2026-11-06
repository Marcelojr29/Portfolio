import { Component, inject } from '@angular/core';

import { ContentService } from '../../core/services/content.service';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks],
  templateUrl: './footer.html'
})
export class Footer {
  protected readonly profile = inject(ContentService).profile;
  protected readonly year = new Date().getFullYear();
}
