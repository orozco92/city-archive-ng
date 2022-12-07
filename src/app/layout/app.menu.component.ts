import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { RoleEnum } from '../core/helpers/RoleHelper';
import { IUser } from '../core/models/user';
import { ProfileService } from '../core/services/profile.service';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    user: IUser | undefined = undefined;

    constructor(
        public layoutService: LayoutService,
        private profileService: ProfileService
    ) {}

    ngOnInit() {
        this.user = this.profileService.getUser();
        if (this.user?.role === RoleEnum.ADMIN) {
            this.model = [
                {
                    label: 'Administracion',
                    items: [
                        {
                            label: 'Servicios',
                            icon: PrimeIcons.DATABASE + ' pi-fw',
                            routerLink: ['/admin/informative-services'],
                        },
                        {
                            label: 'Fondos publicos',
                            icon: PrimeIcons.BOOK,
                            routerLink: ['/admin/public-funds'],
                        },
                        {
                            label: 'Solicitudes de servicio',
                            icon: PrimeIcons.TICKET,
                            routerLink: ['/admin/service-request'],
                        },
                        {
                            label: 'Usuarios',
                            icon: PrimeIcons.USERS,
                            routerLink: ['/admin/users'],
                        },
                    ],
                },
            ];
        } else if (this.user?.role === RoleEnum.FUNDS_ADMIN) {
            this.model = [
                {
                    label: 'Administracion',
                    items: [
                        {
                            label: 'Fondos publicos',
                            icon: PrimeIcons.BOOK,
                            routerLink: ['/admin/public-funds'],
                        },
                        {
                            label: 'Solicitudes de servicio',
                            icon: PrimeIcons.TICKET,
                            routerLink: ['/admin/service-request'],
                        },
                    ],
                },
            ];
        } else if (this.user?.role === RoleEnum.SERVICE_ADMIN) {
            this.model = [
                {
                    label: 'Administracion',
                    items: [
                        {
                            label: 'Servicios',
                            icon: PrimeIcons.DATABASE + ' pi-fw',
                            routerLink: ['/admin/informative-services'],
                        },
                        {
                            label: 'Solicitudes de servicio',
                            icon: PrimeIcons.TICKET,
                            routerLink: ['/admin/service-request'],
                        },
                    ],
                },
            ];
        }
    }
}
