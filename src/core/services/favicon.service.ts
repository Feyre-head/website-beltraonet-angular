import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  setFavicon(url: string): void {
    const link: HTMLLinkElement | null = document.querySelector('#appFavicon');
    if (link) {
      link.href = url;
    }
  }
}