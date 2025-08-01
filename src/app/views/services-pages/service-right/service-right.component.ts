import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { ViewMoreServicesComponent } from "../components/view-more-services/view-more-services.component";
import { ServiceSidebarComponent } from "../components/service-sidebar/service-sidebar.component";
import { ServiceContentComponent } from "../components/service-content/service-content.component";

@Component({
  selector: 'app-service-right',
  imports: [PageHeaderComponent, ViewMoreServicesComponent, ServiceSidebarComponent, ServiceContentComponent],
  templateUrl: './service-right.component.html',
  styles: ``
})
export class ServiceRightComponent {

}
