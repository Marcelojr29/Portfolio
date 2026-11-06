import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { ContentService } from '../../../../core/services/content.service';
import { ProjectCard } from '../../../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, TranslocoPipe],
  templateUrl: './projects.html'
})
export class Projects {
  protected readonly projects = inject(ContentService).featuredProjects;
}
