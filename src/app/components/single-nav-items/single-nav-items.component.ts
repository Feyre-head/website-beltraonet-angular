import { ScrollService } from '@/core/services/scroll.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
    selector: 'app-single-nav-items',
    imports: [CommonModule],
    templateUrl: './single-nav-items.component.html',
    styles: ``
})
export class SingleNavItemsComponent {
    public scroll = inject(ScrollService)
    @Input() menuItems: string[] = ["About Us", "Services", "Works", "Case Study", "Testimonials", "Blogs"]

    slugify(text: string): string {
        return text.toLowerCase().replace(/\s+/g, '-');
    }
}
