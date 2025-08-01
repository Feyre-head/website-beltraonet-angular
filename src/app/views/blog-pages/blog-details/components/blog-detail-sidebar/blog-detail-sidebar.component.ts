import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-detail-sidebar.component.html',
  styles: ``
})
export class BlogDetailSidebarComponent {

 categories = [
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

  tags: string[][] = [
    ['#TechSolution', '#CloudComputing'],
    ['#ManagedServices', '#BusinessIT'],
    ['#DataSecurity', '#TechForBusiness'],
    ['#TechUpgrades', '#ITInfrastructure']
  ];

  recentPosts = [
    {
      image: 'assets/img/all-images/blog/blog-img21.png',
      date: '4 August 2024',
      title: 'Scalable IT solutions tailored to meet Best business needs'
    },
    {
      image: 'assets/img/all-images/blog/blog-img22.png',
      date: '4 August 2024',
      title: 'Business Operations with Tailored Best IT Solutions Designed'
    },
    {
      image: 'assets/img/all-images/blog/blog-img23.png',
      date: '4 August 2024',
      title: 'Navigate Complex A World Technology of with Our IT Solutions'
    },
    {
      image: 'assets/img/all-images/blog/blog-img24.png',
      date: '4 August 2024',
      title: 'Discover the Power Best of Data-Driven Insights Transforming'
    }
  ];

  authors = [
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
