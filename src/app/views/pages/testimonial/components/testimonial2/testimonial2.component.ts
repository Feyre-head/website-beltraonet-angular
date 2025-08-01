import { testimonials } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
  selector: 'app-testimonial2',
  imports: [PaginationComponent,CommonModule,RouterLink],
  templateUrl: './testimonial2.component.html',
  styles: ``
})
export class Testimonial2Component {
    testimonials = testimonials
}
