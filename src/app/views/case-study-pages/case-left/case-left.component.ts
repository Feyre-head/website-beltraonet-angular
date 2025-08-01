import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { CaseSidebarComponent } from "../components/case-sidebar/case-sidebar.component";
import { CaseContentComponent } from "../components/case-content/case-content.component";
import { ViewMoreCaseComponent } from "../components/view-more-case/view-more-case.component";

@Component({
  selector: 'app-case-left',
  imports: [PageHeaderComponent, CaseSidebarComponent, CaseContentComponent, ViewMoreCaseComponent],
  templateUrl: './case-left.component.html',
  styles: ``
})
export class CaseLeftComponent {

}
