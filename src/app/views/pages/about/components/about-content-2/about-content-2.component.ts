import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-content-2',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './about-content-2.component.html',
  styles: ``
})
export class AboutContent2Component {

}
