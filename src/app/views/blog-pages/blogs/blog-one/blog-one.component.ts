import { blogs2 } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
    selector: 'app-blog-one',
    imports: [PageHeaderComponent, CommonModule, PaginationComponent,RouterLink],
    templateUrl: './blog-one.component.html',
    styles: ``
})
export class BlogOneComponent {
    blogs = blogs2
}
