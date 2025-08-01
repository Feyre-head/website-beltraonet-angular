import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogDetailSidebarComponent } from "../components/blog-detail-sidebar/blog-detail-sidebar.component";
import { BlogDetailContentComponent } from "../components/blog-detail-content/blog-detail-content.component";
import { ViewMoreBlogComponent } from "../components/view-more-blog/view-more-blog.component";

@Component({
  selector: 'app-blog-left',
  imports: [PageHeaderComponent, BlogDetailSidebarComponent, BlogDetailContentComponent, ViewMoreBlogComponent],
  templateUrl: './blog-left.component.html',
  styles: ``
})
export class BlogLeftComponent {

}
