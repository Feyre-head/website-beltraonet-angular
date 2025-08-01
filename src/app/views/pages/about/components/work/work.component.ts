import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './work.component.html',
  styles: ``
})
export class WorkComponent {

}
