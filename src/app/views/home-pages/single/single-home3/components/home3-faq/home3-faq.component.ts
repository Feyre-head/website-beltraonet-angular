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
    faqs: FaqType[] = [
        {
            question: 'Como entro em contato com o suporte da Beltraonet?',
            answer: 'Ligue para 0800 649 5000 ou (46) 3520‑1500 (das 8h às 20h todos os dias) ou escreva para contato@beltraonet.com.br'
        },
        {
            question: 'Posso solicitar um retorno de chamada?',
            answer: 'Sim. você pode deixar seu telefone ao enviar um e-mail, a equipe pode retornar a ligação para resolver a solicitação.'
        },
        {
            question: 'Quanto tempo demora para receber uma resposta?',
            answer: 'As ligações e mensagem através do WhatsApp são atendidas das 8h às 20h, e mensagens por e‑mail costumam ser respondidas no mesmo dia.'
        },
        {
            question: 'Quais são os horários de funcionamento do suporte?',
            answer: 'O atendimento telefônico funciona todos os dias, das 8h às 20h beltraonet.com.br; fora desse período, você pode enviar e‑mail.'
        },
        {
            question: 'Posso acompanhar o status de uma solicitação de suporte?',
            answer: 'Sim. Os assinantes têm acesso à Área do Cliente no site da Beltraonet, onde é possível consultar boletos e acompanhar solicitações de suporte. Para isso, acesse o portal da empresa e faça login na Central do Assinante (se ainda não tiver cadastro, é necessário criar um).'
        }
    ];

}
