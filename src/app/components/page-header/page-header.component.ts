import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-header',
    imports: [RouterLink],
    templateUrl: './page-header.component.html',
    styles: ``
})
export class PageHeaderComponent {
    @Input() title!: string
}
