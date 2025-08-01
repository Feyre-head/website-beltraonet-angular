import { CommonModule } from '@angular/common';
import { Component, type AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styles: ``
})
export class PreloaderComponent implements AfterViewInit {
    showPreloader: boolean = true;

    ngAfterViewInit() {
        setTimeout(() => {
            this.showPreloader = false;
        }, 400);
    }
}

