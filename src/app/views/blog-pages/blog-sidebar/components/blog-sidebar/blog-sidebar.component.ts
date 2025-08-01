import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-sidebar',
    imports: [CommonModule],
    templateUrl: './blog-sidebar.component.html',
    styles: ``
})
export class BlogSidebarComponent {
    categories: string[] = [
        'Cyber Security Solution',
        'Scalable Cloud Solution',
        'Data Protection Services',
        'Optimization Management',
        'HelpDesk 360 Solutions',
        'Software Development',
        'Custom App Development',
        'It Infrastructure Networking',
        'Business Consulting'
    ];

    authorImages: string[] = [
        'assets/img/all-images/others/author-img1.png',
        'assets/img/all-images/others/author-img2.png',
        'assets/img/all-images/others/author-img3.png',
        'assets/img/all-images/others/author-img4.png',
        'assets/img/all-images/others/author-img5.png',
        'assets/img/all-images/others/author-img6.png',
        'assets/img/all-images/others/author-img7.png',
        'assets/img/all-images/others/author-img8.png'
    ];

}
