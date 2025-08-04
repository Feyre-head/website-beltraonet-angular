import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type FooterItem = {
    label: string;
    link?: string;
    icon?: string;
}

export type FooterSection = {
    title: string;
    items: FooterItem[];
}

@Component({
    selector: 'app-footer',
    imports: [CommonModule,RouterLink],
    templateUrl: './footer.component.html',
    styles: ``
})
export class FooterComponent {
    @Input() logo: string = 'assets/img/logo/logo2.png'
    @Input() containerClass: string = 'vl-footer1-section-area'
    @Input() topSpace: boolean = false


    currentYear = new Date().getFullYear()

    footerLinks: FooterSection[] = [
        {
            title: 'Links Rápidos',
            items: [
                { label: 'Acesso', link: 'https://www.beltraonet.com.br/ca/#/login' },
                { label: 'Segunda via do boleto', link: 'https://www.beltraonet.com.br/ca/#/segunda-via' },
                { label: 'Contrato', link: 'assets/documents/contrato.pdf' },
                { label: 'Contrato com valor adicionado' },                
            ],
        },
        {
            title: 'Our Services',
            items: [
                { label: 'Política de privacidade',link: '/blogs/one' },   
                { label: 'Fale conosco', link:'https://api.whatsapp.com/send?phone=554635201501&text=Ol%C3%A1,%20preciso%20de%20ajuda.' }            
            ],
        },
        {
            title: 'Fale com a Gente',
            items: [
                { label: '(46) 3520-1500',  icon: 'assets/img/icons/phn1.svg' },
                { label: '0800 649 5000 ', icon: 'assets/img/icons/phn1.svg' },
                { label: 'Rua Florianópolis, 433', icon: 'assets/img/icons/location1.svg' },
                { label: 'contato@beltraonet.com.br',  icon: 'assets/img/icons/email1.svg' },
                { label: 'www.beltraonet.com.br', link: '/', icon: 'assets/img/icons/global1.svg' },
            ],
        },
    ];

}
