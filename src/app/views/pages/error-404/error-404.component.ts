import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-error-404',
  imports: [RouterLink, PageHeaderComponent,GsapRevealDirective],
  templateUrl: './error-404.component.html',
  styles: ``
})
export class Error404Component {

}
