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
            title: 'Home', link:'/',                     
        },
                
        { title: 'Contact', link: '/pages/contact' },
    ];
}
