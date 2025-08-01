import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { ServiceContentComponent } from "../components/service-content/service-content.component";
import { ViewMoreServicesComponent } from "../components/view-more-services/view-more-services.component";

@Component({
  selector: 'app-service-single',
  imports: [PageHeaderComponent, ServiceContentComponent, ViewMoreServicesComponent],
  templateUrl: './service-single.component.html',
  styles: ``
})
export class ServiceSingleComponent {

}
