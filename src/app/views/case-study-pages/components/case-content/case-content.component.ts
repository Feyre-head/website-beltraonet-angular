import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-case-content',
    imports: [GsapRevealDirective, CommonModule],
    templateUrl: './case-content.component.html',
    styles: ``
})
export class CaseContentComponent {
    @Input() isSidebarRight?: boolean = false

    progressData = [
        { label: 'IT Solution', value: 98 },
        { label: 'Cyber Security', value: 99 },
        { label: 'Cloud Solution', value: 99 }
    ];
}
