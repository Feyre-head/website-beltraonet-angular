import { blogs2 } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-view-more-blog',
    imports: [CommonModule,RouterLink],
    templateUrl: './view-more-blog.component.html',
    styles: ``
})
export class ViewMoreBlogComponent {
    blogs = blogs2
}
