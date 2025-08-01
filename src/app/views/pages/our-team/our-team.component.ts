import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { teamMembers } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from "@app/components/cards/member-card/member-card.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
    selector: 'app-our-team',
    imports: [PageHeaderComponent, CommonModule, MemberCardComponent, PaginationComponent],
    templateUrl: './our-team.component.html',
    styles: ``
})
export class OurTeamComponent {
    teamMembers = teamMembers
}
