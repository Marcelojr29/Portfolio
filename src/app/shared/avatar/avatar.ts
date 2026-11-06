import { Component, computed, inject } from '@angular/core';

import { ContentService } from '../../core/services/content.service';

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
}

@Component({
  selector: 'app-avatar',
  template: `
    @if (profile().photoUrl) {
      <img
        class="w-32 h-32 rounded-full object-cover border border-outline-subtle"
        [src]="profile().photoUrl"
        [alt]="profile().name"
        width="128"
        height="128"
      />
    } @else {
      <div
        class="w-32 h-32 rounded-full border border-outline-subtle flex items-center justify-center font-display text-3xl text-on-surface select-none"
        role="img"
        [attr.aria-label]="profile().name"
      >
        {{ initials() }}
      </div>
    }
  `
})
export class Avatar {
  protected readonly profile = inject(ContentService).profile;
  protected readonly initials = computed(() => getInitials(this.profile().name));
}
