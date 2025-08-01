import { Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import Aos from 'aos';
import { PreloaderComponent } from "./components/preloader/preloader.component";
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreloaderComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    private titleService = inject(Title)
    private router = inject(Router)
    private activatedRoute = inject(ActivatedRoute)

   ngOnInit(): void {
     Aos.init()
       this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let route = this.activatedRoute;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap(route => route.data)
        )
        .subscribe(data => {
            if (data['title']) {
                this.titleService.setTitle(data['title'] +
                    ' | Eitech - Technology & It Solutions Services');
            }
        });
   }
}
