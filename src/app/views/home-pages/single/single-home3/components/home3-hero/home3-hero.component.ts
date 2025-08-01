import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home3-hero',
     host: { 'data-component-id': 'home3-hero-instance' },
    imports: [CommonModule],
    templateUrl: './home3-hero.component.html',
    styles: ``
})
export class Home3HeroComponent {
    socialIcons = [
        'assets/img/icons/s-icon1.svg',
        'assets/img/icons/s-icon2.svg',
        'assets/img/icons/s-icon3.svg',
        'assets/img/icons/s-icon4.svg',
        'assets/img/icons/s-icon5.svg',
        'assets/img/icons/s-icon6.svg',
        'assets/img/icons/s-icon7.svg',
        'assets/img/icons/s-icon8.svg',
        'assets/img/icons/s-icon9.svg',
        'assets/img/icons/s-icon10.svg',
        'assets/img/icons/s-icon11.svg'
    ];

}
