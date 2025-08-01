import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { CtaComponent } from "./components/cta/cta.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CtaComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}
