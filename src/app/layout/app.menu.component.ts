import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administracion',
                items: [
                    { label: 'Servicios', icon: PrimeIcons.DATABASE + ' pi-fw', routerLink: ['/admin/informative-services'] },
                    { label: 'Fondos publicos', icon: PrimeIcons.BOOK, routerLink: ['/admin/public-funds'] },
                    { label: 'Solicitudes de servicio', icon: PrimeIcons.TICKET, routerLink: ['/admin/service-request'] },
                    { label: 'Usuarios', icon: PrimeIcons.USERS, routerLink: ['/admin/users'] },
                ]
            },
        ];
    }
}
