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
            question: 'How do I contact the Help Desk?',
            answer: 'Yes, you can request a callback through our Support Portal or by sending an email contact information and preferred time for a call. We’ll do our best to accommodate request.'
        },
        {
            question: 'Can I request a callback from Help Desk?',
            answer: 'Yes, you can request a callback through our Support Portal or by sending an email contact information and preferred time for a call. We’ll do our best to accommodate request.'
        },
        {
            question: 'How long will it take to get a response?',
            answer: 'Yes, you can request a callback through our Support Portal or by sending an email contact information and preferred time for a call. We’ll do our best to accommodate request.'
        },
        {
            question: 'What the Help Desk’s hours of operation?',
            answer: 'Yes, you can request a callback through our Support Portal or by sending an email contact information and preferred time for a call. We’ll do our best to accommodate request.'
        },
        {
            question: 'Can I track the status of support request?',
            answer: 'Yes, you can request a callback through our Support Portal or by sending an email contact information and preferred time for a call. We’ll do our best to accommodate request.'
        }
    ];

}
