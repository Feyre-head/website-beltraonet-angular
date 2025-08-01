import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { WorkComponent } from "./components/work/work.component";
import { AboutContentComponent } from "./components/about-content/about-content.component";
import { AboutContent2Component } from "./components/about-content-2/about-content-2.component";
import { Home1TeamComponent } from "./components/home1-team/home1-team.component";
import { Home1TestimonialComponent } from "./components/home1-testimonial/home1-testimonial.component";

@Component({
  selector: 'app-about',
  imports: [PageHeaderComponent, WorkComponent, AboutContentComponent, AboutContent2Component, Home1TeamComponent, Home1TestimonialComponent],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {

}
