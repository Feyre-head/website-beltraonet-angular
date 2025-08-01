import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { caseStudies } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { CaseStudyCardComponent } from "@app/components/cards/case-study-card/case-study-card.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
    selector: 'app-case',
    imports: [PageHeaderComponent, CommonModule, CaseStudyCardComponent, PaginationComponent],
    templateUrl: './case.component.html',
    styles: ``
})
export class CaseComponent {
    caseStudies = caseStudies
}
