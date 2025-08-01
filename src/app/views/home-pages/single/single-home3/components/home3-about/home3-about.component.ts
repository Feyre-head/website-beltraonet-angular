import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home3-about',
   host: { 'data-component-id': 'home3-about-instance' },
  imports: [RouterLink,GsapRevealDirective],
  templateUrl: './home3-about.component.html',
  styles: ``
})
export class Home3AboutComponent {

}
