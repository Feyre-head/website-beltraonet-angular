import type { FaqType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-faq',
    imports: [PageHeaderComponent, NgbNavModule, CommonModule, NgbAccordionModule],
    templateUrl: './faq.component.html',
    styles: ``
})

export class FaqComponent {
    active = 1;

    faqTabs = ["All", "Cyber Security", "Help Desk Solution", "Software Development", "Cloud Solution", "Data Protection"]

    faqs1: FaqType[] = [
        {
            question: 'What types of IT solutions do you offer?',
            answer: 'We implement robust data backup and recovery solutions to protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'What is your policy on data backup and recovery?',
            answer: 'We implement robust data backup and recovery solutions to protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'How can IT solutions benefit my business?',
            answer: 'We implement robust data backup and recovery solutions to protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'What industries do you specialize in?',
            answer: 'We implement robust data backup and recovery solutions to protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'What is the process for onboarding new client?',
            answer: 'We implement robust data backup and recovery solutions to protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        }
    ];

    faqs2: FaqType[] = [
        {
            question: 'How can I get in touch with your support team?',
            answer: 'We implement robust data backup and recovery solutions to best protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'What kind of technology partners do you work with?',
            answer: 'We implement robust data backup and recovery solutions to best protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'Can I scale the services as my business grows?',
            answer: 'We implement robust data backup and recovery solutions to best protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'What types of payment plans do you offer?',
            answer: 'We implement robust data backup and recovery solutions to best protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        },
        {
            question: 'What is your policy on data backup recovery?',
            answer: 'We implement robust data backup and recovery solutions to best protect your data and ensure business continuity in case of unexpected events. We provide regular updates and status.',
        }
    ];
}
