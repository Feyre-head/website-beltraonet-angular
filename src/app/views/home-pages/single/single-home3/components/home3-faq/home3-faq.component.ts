import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import type { FaqType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home3-faq',
     host: { 'data-component-id': 'home3-faq-instance' },
    imports: [CommonModule, NgbAccordionModule,GsapRevealDirective],
    templateUrl: './home3-faq.component.html',
    styles: ``
})
export class Home3FaqComponent {
  faqs: { titulo: string; link: string }[] = [
    {
      titulo: 'Acesso',
      link: 'https://www.beltraonet.com.br/ca/#/login',
    },
    {
      titulo: '2ª Via Boleto',
      link: 'https://www.google.com.br/maps/place/Beltr%C3%A3onet+Telecom/@-26.0738058,-53.0609373,17z/data=!3m1!4b1!4m6!3m5!1s0x94f072d0e395a143:0x9c0b2fd41aaaf22b!8m2!3d-26.0738106!4d-53.0583624!16s%2Fg%2F11dfh4h_np?entry=tts&g_ep=EgoyMDI1MDcyOS4wIPu8ASoASAFQAw%3D%3D&skid=bef30bec-87d7-43ec-9703-0f83d2d7c9fb',
    }, 
    {
      titulo: 'Comercial',
      link: 'https://api.whatsapp.com/send?phone=554635201501&text=Ol%C3%A1,%20preciso%20de%20ajuda.',
    },
    {
      titulo: 'Suporte',
      link: 'https://api.whatsapp.com/send?phone=5546999160043&text=Ol%C3%A1,%20preciso%20de%20ajuda.',
    },
    {
      titulo: 'Reclamações',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato@beltraonet.com.br&su=RECLAMAÇÃO_BELTRAONET&body=',
    },
    {
      titulo: 'Onde Estamos',
      link: 'https://www.google.com.br/maps/place/Beltr%C3%A3onet+Telecom/@-26.0738058,-53.0609373,17z/data=!3m1!4b1!4m6!3m5!1s0x94f072d0e395a143:0x9c0b2fd41aaaf22b!8m2!3d-26.0738106!4d-53.0583624!16s%2Fg%2F11dfh4h_np?entry=tts&g_ep=EgoyMDI1MDcyOS4wIPu8ASoASAFQAw%3D%3D&skid=bef30bec-87d7-43ec-9703-0f83d2d7c9fb',
    }, 
        
  ];
}
