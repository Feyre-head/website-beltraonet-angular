import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import type { FaqType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-service-content',
    imports: [GsapRevealDirective, NgbAccordionModule,CommonModule],
    templateUrl: './service-content.component.html',
    styles: ``
})
export class ServiceContentComponent {
    @Input() isRightSide?: boolean = false

    faqData: FaqType[] = [
        {
            question: 'How does cloud computing benefit my business?',
            answer: `It's recommended to review and update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as they're available to protect against vulnerabilities. A proactive IT strategy will help ensure system security and efficiency.`
        },
        {
            question: 'What is included in IT Solution infrastructure services?',
            answer: `It's recommended to review and update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as they're available to protect against vulnerabilities. A proactive IT strategy will help ensure system security and efficiency.`
        },
        {
            question: 'How can IT solutions improve my business security?',
            answer: `It's recommended to review and update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as they're available to protect against vulnerabilities. A proactive IT strategy will help ensure system security and efficiency.`
        },
        {
            question: 'Can IT solutions help remote work capabilities?',
            answer: `It's recommended to review and update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as they're available to protect against vulnerabilities. A proactive IT strategy will help ensure system security and efficiency.`
        },
        {
            question: 'How often should I update my IT systems?',
            answer: `It's recommended to review and update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as they're available to protect against vulnerabilities. A proactive IT strategy will help ensure system security and efficiency.`
        }
    ];
}
