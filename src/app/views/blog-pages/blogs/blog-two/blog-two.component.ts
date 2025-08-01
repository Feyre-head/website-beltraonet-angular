import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";

@Component({
    selector: 'app-blog-two',
    imports: [PageHeaderComponent, PaginationComponent, CommonModule, BlogCardComponent],
    templateUrl: './blog-two.component.html',
    styles: ``
})
export class BlogTwoComponent {
    blogs = blogs
}
