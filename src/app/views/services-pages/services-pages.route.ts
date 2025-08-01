import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ServiceSingleComponent } from './service-single/service-single.component';
import { ServiceLeftComponent } from './service-left/service-left.component';
import { ServiceRightComponent } from './service-right/service-right.component';

export const SERVICES_PAGES_ROUTES: Routes = [
    {
        path: 'our-services',
        component: ServicesComponent,
        data: { title: "Our Services" }
    },
    {
        path: 'services/single',
        component: ServiceSingleComponent,
        data: { title: "Service Single" }
    },
    {
        path: 'services/left',
        component: ServiceLeftComponent,
        data: { title: "Service Details Left" }
    },
    {
        path: 'services/right',
        component: ServiceRightComponent,
        data: { title: "Service Details Right" }
    },
];



