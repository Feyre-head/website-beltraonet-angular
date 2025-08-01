import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-about-content',
  imports: [GsapRevealDirective,NgCircleProgressModule,RouterLink],
  templateUrl: './about-content.component.html',
  styles: ``
})
export class AboutContentComponent {

}
