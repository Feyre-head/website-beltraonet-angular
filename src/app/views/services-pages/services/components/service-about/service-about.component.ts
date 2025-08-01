import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-about',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './service-about.component.html',
  styles: ``
})
export class ServiceAboutComponent {

}
