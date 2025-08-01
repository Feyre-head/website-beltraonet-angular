import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { ServiceContentComponent } from "../components/service-content/service-content.component";
import { ServiceSidebarComponent } from "../components/service-sidebar/service-sidebar.component";
import { ViewMoreServicesComponent } from "../components/view-more-services/view-more-services.component";

@Component({
    selector: 'app-service-left',
    imports: [PageHeaderComponent, ServiceSidebarComponent, ServiceContentComponent, ViewMoreServicesComponent],
    templateUrl: './service-left.component.html',
    styles: ``
})
export class ServiceLeftComponent {

}
