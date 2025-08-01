import { CommonModule } from '@angular/common';
import { Component, inject, Input, ViewChild, type TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-blog-detail-content',
    imports: [CommonModule,RouterLink],
    templateUrl: './blog-detail-content.component.html',
    styles: ``
})
export class BlogDetailContentComponent {
    @Input() isRightSidebar?: boolean = false

         @ViewChild('videoModal') videoModalRef!: TemplateRef<any>;

    private modalService = inject(NgbModal)

    openVideoModal() {
        this.modalService.open(this.videoModalRef, { centered: true, size: 'lg' });
    }


    comments = [
        {
            author: 'Mr. Ana Ritchie',
            date: '8 December 2024',
            img: 'assets/img/all-images/testimonial/testimonial-img5.png',
            content: `“I found this article incredibly enlightening, especially the emphasis on the best transformative power of IT solutions in today’s business environment. As the IT manager for a mid-sized company, I've witnessed firsthand how in investing.”`,
            isReply: false
        },
        {
            author: 'Matthew Kuhnemann',
            date: '12 May 2024',
            img: 'assets/img/all-images/testimonial/testimonial-img4.png',
            content: `One concern I have, however, is ensuring that our IT team remains up-to-date with the rapid technological advancements. Continuous training and professional development are crucial, but they require additional time.`,
            isReply: true
        }
    ];
}
