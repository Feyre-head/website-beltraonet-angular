import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent implements OnInit{
  
  ngOnInit(): void {
    window.scrollTo({top:0, behavior: 'smooth'}); //Scrolla para o topo da página
  }

}
