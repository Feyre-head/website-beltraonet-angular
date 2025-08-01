import { testimonialSlides } from '@/assets/data';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonial1',
  imports: [GsapRevealDirective,SlickCarouselModule,CommonModule,RouterLink],
  templateUrl: './testimonial1.component.html',
  styles: ``
})
export class Testimonial1Component {
    testimonialSlides = testimonialSlides

    testimonialThumbImages: string[] = [
        'assets/img/all-images/testimonial/testimonial-img2.png',
        'assets/img/all-images/testimonial/testimonial-img3.png',
        'assets/img/all-images/testimonial/testimonial-img4.png',
        'assets/img/all-images/testimonial/testimonial-img5.png',
        'assets/img/all-images/testimonial/testimonial-img2.png',
        'assets/img/all-images/testimonial/testimonial-img2.png',
        'assets/img/all-images/testimonial/testimonial-img3.png',
        'assets/img/all-images/testimonial/testimonial-img4.png',
        'assets/img/all-images/testimonial/testimonial-img5.png',
        'assets/img/all-images/testimonial/testimonial-img2.png',
        'assets/img/all-images/testimonial/testimonial-img2.png',
        'assets/img/all-images/testimonial/testimonial-img3.png',
        'assets/img/all-images/testimonial/testimonial-img4.png',
        'assets/img/all-images/testimonial/testimonial-img5.png',
        'assets/img/all-images/testimonial/testimonial-img2.png'
    ];

    slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        asNavFor: '.slider-galeria-thumbs',
        prevArrow: ('.testimonial-next-arrow'),
        nextArrow: ('.testimonial-prev-arrow'),
    }

    sliderThumbConfig = {
        slidesToShow: 4,
        slidesToScroll: 1,
        items: 15,
        arrows: true,
        asNavFor: '.slider-galeria',
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        infinite: false,
        prevArrow: ('.testimonial-next-arrow'),
        nextArrow: ('.testimonial-prev-arrow'),
    }
}
