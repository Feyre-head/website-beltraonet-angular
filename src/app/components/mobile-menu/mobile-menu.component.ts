import type { MenuItem } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mobile-menu',
    imports: [CommonModule, RouterLink],
    templateUrl: './mobile-menu.component.html',
    styles: ``
})
export class MobileMenuComponent {
    @Input() isMobileMenuOpen!: boolean


    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
    }

    @Input() themeBtn: string = 'vl-btn1'
    @Input() mobileMenuClass: string = 'homepage1-body'
    @Input() arrow?: boolean = false
    @Input() arrow2?: boolean = false

    menuOpen = false;
    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    toggleSubMenu(item: MenuItem, event?: Event): void {
        if (event) {
            event.stopPropagation();
        }

        if (item.subMenu) {
            item.isOpen = !item.isOpen;
        }
    }

    megaMenu = [
        {
            label: 'Home',
            icon: 'fa-regular fa-angle-down',
            subMenu: [
                { title: 'Eitech - Homepage 01', link: '/home-1', image: 'assets/img/all-images/demo/demo-img1.png', singleLink: '/single-home-1' },
                { title: 'Eitech - Homepage 02', link: '/home-2', image: 'assets/img/all-images/demo/demo-img2.png', singleLink: '/single-home-2' },
                { title: 'Eitech - Homepage 03', link: '/home-3', image: 'assets/img/all-images/demo/demo-img3.png', singleLink: '/single-home-3' },
                { title: 'Eitech - Homepage 04', link: '/home-4', image: 'assets/img/all-images/demo/demo-img4.png', singleLink: '/single-home-4' },
                { title: 'Eitech - Homepage 05', link: '/home-5', image: 'assets/img/all-images/demo/demo-img5.png', singleLink: '/single-home-5' },
            ]
        }
    ];

    menu: MenuItem[] = [
        {
            "title": "Pages",
            "icon": 'fa-regular fa-angle-down',
            "isOpen": false,
            "subMenu": [
                { title: 'About Us', link: '/about' },
                { title: 'Our Team', link: '/our-team' },
                { title: 'Testimonials', link: '/testimonials' },
                { title: 'FAQ', link: '/faq' },
                { title: '404', link: '/error' },
            ]
        },
        {
            "title": "Services",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                { title: "Service Details Left", link: '/service-details/left' },
                { title: "Service Details Right", link: '/service-details/right' },
                { title: "Service Details", link: '/service-details' }
            ]
        },
        {
            "title": "Case Study",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                { title: "Case Details Left", link: '/case-details/left' },
                { title: "Case Details Right", link: '/case-details/right' },
                { title: "Case Single", link: '/case-details/single' }
            ]
        },
        {
            title: 'Blogs',
            isOpen: false,
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                {
                    title: 'Our Blogs',
                    subMenu: [
                        { title: 'Blog One', link: '/blogs/one' },
                        { title: 'Blog Two', link: '/blogs/two' },
                    ],
                },
                {
                    title: 'Blog Sidebar',
                    subMenu: [
                        { title: 'Blog Left V1', link: '/blog-sidebar/left-1' },
                        { title: 'Blog Left V2', link: '/blog-sidebar/left-2' },
                        { title: 'Blog Right V1', link: '/blog-sidebar/right-1' },
                        { title: 'Blog Right V2', link: '/blog-sidebar/right-2' },
                    ],
                },
                {
                    title: 'Blog Details',
                    subMenu: [
                        { title: 'Blog  Left', link: '/blog-details/left' },
                        { title: 'Blog  Right', link: '/blog-details/right' },
                        { title: 'Blog Single', link: '/blog-details/single' },
                    ],
                },
            ],
        },
        {
            "title": "Contact ",
            "link": "/pages/contact",
        }
    ]

}
