import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { CaseContentComponent } from "../components/case-content/case-content.component";
import { ViewMoreCaseComponent } from "../components/view-more-case/view-more-case.component";

@Component({
  selector: 'app-case-single',
  imports: [PageHeaderComponent, CaseContentComponent, ViewMoreCaseComponent],
  templateUrl: './case-single.component.html',
  styles: ``
})
export class CaseSingleComponent {

}
