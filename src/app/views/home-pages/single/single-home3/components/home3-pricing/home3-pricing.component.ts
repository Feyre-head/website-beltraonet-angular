import type { PricingPlanType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home3-pricing',
     host: { 'data-component-id': 'home3-pricing-instance' },
    imports: [CommonModule],
    templateUrl: './home3-pricing.component.html',
    styles: ``
})

export class Home3PricingComponent {
    isYearly = true;

    plans: PricingPlanType[] = [
        {
            name: '90 Mega',
            monthlyPrice: 49,            
            downloadSpeed: '90 Mega de Download',
            uploadSpeed: '90 Mega de Upload',            
            features: ['Sem Taxa de Instalação'],
        },  
        {
            name: '350 Mega',
            monthlyPrice: 49,            
            downloadSpeed: '350 Mega de Download',
            uploadSpeed: '350 Mega de Upload',            
            features: ['Sem Taxa de Instalação'],
        },  
        {
            name: '650 Mega',
            monthlyPrice: 49,            
            downloadSpeed: '650 Mega de Download',
            uploadSpeed: '650 Mega de Upload',            
            features: ['Sem Taxa de Instalação'],
        },  
        {
            name: '720 Mega',
            monthlyPrice: 49,            
            downloadSpeed: '720 Mega de Download',
            uploadSpeed: '720 Mega de Upload',            
            features: ['Sem Taxa de Instalação'],
        },        
    ];

    togglePlan() {
        this.isYearly = !this.isYearly;
    }
}
