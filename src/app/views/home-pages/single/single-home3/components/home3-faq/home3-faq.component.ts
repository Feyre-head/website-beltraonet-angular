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
            question: 'Como faço para contratar um plano de internet da Beltraonet?',
            answer: 'Você pode contratar um plano diretamente pelo nosso site, WhatsApp, telefone ou visitando nossa loja física. Também temos consultores disponíveis para te ajudar a escolher o plano ideal.'
        },
        {
            question: 'Qual é o prazo para instalação após a contratação?',
            answer: 'Normalmente realizamos a instalação em até 48 horas úteis após a confirmação do pedido, dependendo da disponibilidade técnica na sua área.'
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
