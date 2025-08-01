import { Routes } from '@angular/router';
import { CaseLeftComponent } from './case-left/case-left.component';
import { CaseRightComponent } from './case-right/case-right.component';
import { CaseSingleComponent } from './case-single/case-single.component';
import { CaseComponent } from './case/case.component';


export const CASE_STUDY_PAGES_ROUTES: Routes = [
    {
        path: 'case-study',
        component: CaseComponent,
        data: { title: "Case Study" }
    },
    {
        path: 'case-details/left',
        component: CaseLeftComponent,
        data: { title: "Case Details Left" }
    },
    {
        path: 'case-details/right',
        component: CaseRightComponent,
        data: { title: "Case Details Right" }
    },
    {
        path: 'case-details/single',
        component: CaseSingleComponent,
        data: { title: "Case Details Single" }
    },

];



