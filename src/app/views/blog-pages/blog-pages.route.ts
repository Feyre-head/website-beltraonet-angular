import { Routes } from '@angular/router';
import { BlogOneComponent } from './blogs/blog-one/blog-one.component';
import { BlogTwoComponent } from './blogs/blog-two/blog-two.component';
import { BlogLeft1Component } from './blog-sidebar/blog-left1/blog-left1.component';
import { BlogLeft2Component } from './blog-sidebar/blog-left2/blog-left2.component';
import { BlogRight1Component } from './blog-sidebar/blog-right1/blog-right1.component';
import { BlogRight2Component } from './blog-sidebar/blog-right2/blog-right2.component';
import { BlogLeftComponent } from './blog-details/blog-left/blog-left.component';
import { BlogRightComponent } from './blog-details/blog-right/blog-right.component';
import { BlogSingleComponent } from './blog-details/blog-single/blog-single.component';

export const BLOG_PAGES_ROUTES: Routes = [
    {
        path: 'blogs/one',
        component: BlogOneComponent,
        data: { title: "Blog One" }
    },
    {
        path: 'blogs/two',
        component: BlogTwoComponent,
        data: { title: "Blog One" }
    },
    {
        path: 'blog-sidebar/left-1',
        component: BlogLeft1Component,
        data: { title: "Blog Left V1" }
    },
    {
        path: 'blog-sidebar/left-2',
        component: BlogLeft2Component,
        data: { title: "Blog Left V2" }
    },
    {
        path: 'blog-sidebar/right-1',
        component: BlogRight1Component,
        data: { title: "Blog Right V1" }
    },
    {
        path: 'blog-sidebar/right-2',
        component: BlogRight2Component,
        data: { title: "Blog Right V2" }
    },
    {
        path: 'blog-details/left',
        component: BlogLeftComponent,
        data: { title: "Blog Left" }
    },
    {
        path: 'blog-details/right',
        component: BlogRightComponent,
        data: { title: "Blog Right" }
    },
    {
        path: 'blog-details/single',
        component: BlogSingleComponent,
        data: { title: "Blog Single" }
    },
];



