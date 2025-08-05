import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { blogs2 } from '@/assets/data';

@Component({
  selector: 'app-blog-one',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './blog-one.component.html',
  styles: ``
})
export class BlogOneComponent implements OnInit {
  blogs = blogs2;

  ngOnInit(): void {
    // Instantâneo:
    // window.scrollTo(0, 0);

    // Suave:
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
