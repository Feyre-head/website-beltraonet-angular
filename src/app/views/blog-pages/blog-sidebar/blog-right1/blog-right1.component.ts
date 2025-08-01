import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { BlogSidebarComponent } from "../components/blog-sidebar/blog-sidebar.component";
import { CommonModule } from '@angular/common';
import { blogs2 } from '@/assets/data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-right1',
    imports: [PageHeaderComponent, PaginationComponent, BlogSidebarComponent, CommonModule,RouterLink],
    templateUrl: './blog-right1.component.html',
    styles: ``
})
export class BlogRight1Component {
    blogs = blogs2
}
