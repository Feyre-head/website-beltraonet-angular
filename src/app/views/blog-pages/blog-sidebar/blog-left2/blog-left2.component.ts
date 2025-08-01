import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { BlogSidebarComponent } from "../components/blog-sidebar/blog-sidebar.component";

@Component({
    selector: 'app-blog-left2',
    imports: [PageHeaderComponent, BlogSidebarComponent, PaginationComponent, CommonModule, RouterLink],
    templateUrl: './blog-left2.component.html',
    styles: ``
})
export class BlogLeft2Component {
    blogs = blogs
}
