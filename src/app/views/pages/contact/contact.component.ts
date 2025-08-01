import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-contact',
  imports: [PageHeaderComponent,GsapRevealDirective],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {

}
