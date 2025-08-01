import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { CaseContentComponent } from "../components/case-content/case-content.component";
import { CaseSidebarComponent } from "../components/case-sidebar/case-sidebar.component";
import { ViewMoreCaseComponent } from "../components/view-more-case/view-more-case.component";

@Component({
  selector: 'app-case-right',
  imports: [PageHeaderComponent, CaseContentComponent, CaseSidebarComponent, ViewMoreCaseComponent],
  templateUrl: './case-right.component.html',
  styles: ``
})
export class CaseRightComponent {

}
