import { Routes } from '@angular/router';

import { SingleHome3Component } from './single/single-home3/single-home3.component';

export const HOME_PAGES_ROUTES: Routes = [
    {
        path: 'single-home-3',
        component: SingleHome3Component,
        data: { title: "Single Home 3" }
    }    
];



