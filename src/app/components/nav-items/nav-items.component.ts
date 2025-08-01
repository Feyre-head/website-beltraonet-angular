import type { MenuItem } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav-items',
    imports: [RouterLink, CommonModule],
    templateUrl: './nav-items.component.html',
    styles: ``
})
export class NavItemsComponent {

    @Input() themeBtn: string = ''
    @Input() arrow?: boolean = false
    @Input() arrow2?: boolean = false
    @Input() btnSpace?: boolean = false

    menuItems: MenuItem[] = [
        {
            title: 'Home',
            icon: 'fa-solid fa-angle-down',
            megaMenu: [
                { title: 'Eitech - Homepage 01', link: '/home-1', singleLink: "/single-home-1", image: 'assets/img/all-images/demo/demo-img1.png' },
                { title: 'Eitech - Homepage 02', link: '/home-2', singleLink: "/single-home-2", image: 'assets/img/all-images/demo/demo-img2.png' },
                { title: 'Eitech - Homepage 03', link: '/home-3', singleLink: "/single-home-3", image: 'assets/img/all-images/demo/demo-img3.png' },
                { title: 'Eitech - Homepage 04', link: '/home-4', singleLink: "/single-home-4", image: 'assets/img/all-images/demo/demo-img4.png' },
                { title: 'Eitech - Homepage 05', link: '/home-5', singleLink: "/single-home-5", image: 'assets/img/all-images/demo/demo-img5.png' },
            ],
        },
        {
            title: 'Pages',
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                { title: 'About Us', link: '/pages/about' },
                { title: 'Our Team', link: '/pages/our-team' },
                { title: 'Testimonials', link: '/pages/testimonials' },
                { title: 'Contact Us', link: '/pages/contact' },
                { title: 'FAQ', link: '/pages/faq' },
                { title: '404', link: '/pages/error-404' },
            ],
        },
        {
            title: 'Services',
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                { title: 'Our Services', link: '/our-services' },
                {
                    title: 'Service Details',
                    subMenu: [
                        { title: "Service  Left", link: '/services/left' },
                        { title: "Service  Right", link: '/services/right' },
                        { title: "Service Single", link: '/services/single' }
                    ]
                },
            ],
        },
        {
            title: 'Case Study',
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                { title: 'Case Study', link: '/case-study' },
                {
                    title: 'Case Details',
                    subMenu: [
                        { title: "Case Details Left", link: '/case-details/left' },
                        { title: "Case Details Right", link: '/case-details/right' },
                        { title: "Case Single", link: '/case-details/single' }
                    ]
                },
            ],
        },
        {
            title: 'Blogs',
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
        { title: 'Contact', link: '/pages/contact' },
    ];
}
