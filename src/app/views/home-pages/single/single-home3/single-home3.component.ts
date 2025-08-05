import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { SingleHeader3Component } from "./components/single-header3/single-header3.component";
import { Home3HeroComponent } from "./components/home3-hero/home3-hero.component";
import { Home3WorkComponent } from "./components/home3-work/home3-work.component";
import { Home3SupportComponent } from "./components/home3-support/home3-support.component";
import { Home3FeaturesComponent } from "./components/home3-features/home3-features.component";
import { Home3PricingComponent } from "./components/home3-pricing/home3-pricing.component";
import { Home3FaqComponent } from "./components/home3-faq/home3-faq.component";
import { Home3CtaComponent } from "./components/home3-cta/home3-cta.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { Home3AboutComponent } from "./components/home3-about/home3-about.component";
import { FaviconService } from '@/core/services/favicon.service';

@Component({
  selector: 'app-single-home3',
  imports: [SingleHeader3Component, Home3HeroComponent, Home3SupportComponent, Home3FeaturesComponent, Home3PricingComponent, Home3FaqComponent, FooterComponent],
  templateUrl: './single-home3.component.html',
  styles: ``
})
export class SingleHome3Component implements OnInit, OnDestroy {
    private faviconService = inject(FaviconService)

    ngOnInit(): void {
        this.faviconService.setFavicon('assets/img/logo/favicon.ico');
    }
    ngOnDestroy(): void {
        this.faviconService.setFavicon('assets/img/logo/favicon.ico');
    }
}
