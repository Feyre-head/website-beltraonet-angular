import { services } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent } from "@app/components/cards/service-card/service-card.component";

@Component({
    selector: 'app-view-more-services',
    imports: [CommonModule, ServiceCardComponent],
    templateUrl: './view-more-services.component.html',
    styles: ``
})
export class ViewMoreServicesComponent {
    services = services
}
