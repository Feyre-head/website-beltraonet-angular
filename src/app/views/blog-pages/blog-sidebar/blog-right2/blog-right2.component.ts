import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogSidebarComponent } from "../components/blog-sidebar/blog-sidebar.component";
import { blogs } from '@/assets/data';
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-right2',
    imports: [PageHeaderComponent, BlogSidebarComponent, PaginationComponent, CommonModule,RouterLink],
    templateUrl: './blog-right2.component.html',
    styles: ``
})
export class BlogRight2Component {
    blogs = blogs
}
