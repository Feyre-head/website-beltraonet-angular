import  { caseStudies } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CaseStudyCardComponent } from "@app/components/cards/case-study-card/case-study-card.component";

@Component({
    selector: 'app-view-more-case',
    imports: [CommonModule, CaseStudyCardComponent],
    templateUrl: './view-more-case.component.html',
    styles: ``
})
export class ViewMoreCaseComponent {
    caseStudies = caseStudies
}
