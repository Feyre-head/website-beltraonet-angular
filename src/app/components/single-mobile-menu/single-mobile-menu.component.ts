import { ScrollService } from '@/core/services/scroll.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-single-mobile-menu',
    imports: [CommonModule,RouterLink],
    templateUrl: './single-mobile-menu.component.html',
    styles: ``
})
export class SingleMobileMenuComponent {
    @Input() isMobileMenuOpen!: boolean
    @Input() className?: string='homepage1-body'
    @Input() menuItems: string[] = ["About Us", "Services", "Works", "Case Study", "Testimonials", "Blogs"]

    public scroll = inject(ScrollService)

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
}
