import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogDetailContentComponent } from "../components/blog-detail-content/blog-detail-content.component";
import { ViewMoreBlogComponent } from "../components/view-more-blog/view-more-blog.component";

@Component({
  selector: 'app-blog-single',
  imports: [PageHeaderComponent, BlogDetailContentComponent, ViewMoreBlogComponent],
  templateUrl: './blog-single.component.html',
  styles: ``
})
export class BlogSingleComponent {

}
