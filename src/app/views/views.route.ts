import { Routes } from '@angular/router';
import { LayoutComponent } from '@layouts/layout.component';

export const VIEWS_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./home-pages/home-pages.route').then((mod) => mod.HOME_PAGES_ROUTES)
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES)
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./services-pages/services-pages.route').then((mod) => mod.SERVICES_PAGES_ROUTES)
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./case-study-pages/case-study.route').then((mod) => mod.CASE_STUDY_PAGES_ROUTES)
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./blog-pages/blog-pages.route').then((mod) => mod.BLOG_PAGES_ROUTES)
    },

];
