import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { services } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from "@app/components/cards/service-card/service-card.component";
import { ServiceAboutComponent } from "./components/service-about/service-about.component";

@Component({
    selector: 'app-services',
    imports: [PageHeaderComponent, CommonModule, ServiceCardComponent, ServiceAboutComponent],
    templateUrl: './services.component.html',
    styles: ``
})
export class ServicesComponent {
    services = services
}
