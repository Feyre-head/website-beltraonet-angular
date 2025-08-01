import type { TeamMemberType } from '@/types';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-member-card',
    imports: [RouterLink],
    templateUrl: './member-card.component.html',
    styles: ``
})
export class MemberCardComponent {
    @Input() member!: TeamMemberType
}
