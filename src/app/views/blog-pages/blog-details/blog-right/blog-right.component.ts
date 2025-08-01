import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogDetailContentComponent } from "../components/blog-detail-content/blog-detail-content.component";
import { BlogDetailSidebarComponent } from "../components/blog-detail-sidebar/blog-detail-sidebar.component";
import { ViewMoreBlogComponent } from "../components/view-more-blog/view-more-blog.component";

@Component({
  selector: 'app-blog-right',
  imports: [PageHeaderComponent, BlogDetailContentComponent, BlogDetailSidebarComponent, ViewMoreBlogComponent],
  templateUrl: './blog-right.component.html',
  styles: ``
})
export class BlogRightComponent {

}
