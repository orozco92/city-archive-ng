import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppConstants } from 'src/app/core/AppConstants';
import { IUser } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-public-header',
    templateUrl: './public-header.component.html',
    styleUrls: ['./public-header.component.scss'],
    providers: [ProfileService, AuthService]
})
export class PublicHeaderComponent implements OnInit {
    logoUrl = '';
    companyName = AppConstants.companyName;
    menuItems = [
        {
            url: '/',
            label: 'Inicio',
            fragment: 'home'
        },
        {
            url: '/main/services',
            label: 'Servicios',
        },
        {
            url: '/about-us',
            label: 'Sobre nosotros',
        },
        // {
        //     url: '/admin',
        //     label: 'Administración',
        // },
        // {
        //     url: '/testing',
        //     label: 'Testing',
        // }
    ]
    user: IUser | undefined = undefined
    userMenuItems!: MenuItem[];
    constructor(
        public layoutService: LayoutService,
        public router: Router,
        private profileService: ProfileService,
        authService: AuthService) {
        // this.logoUrl = `assets/layout/images/${layoutService.config.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`;
        this.logoUrl = 'assets/images/logo.png';
        this.userMenuItems = [
            {
                label: 'Mi perfil', icon: 'pi pi-fw pi-user', routerLink: '/main/profile',
                queryParams: {
                    tab: 'personal-data'
                }
            },
            {
                label: 'Solicitudes', icon: 'pi pi-fw pi-shopping-cart', routerLink: '/main/profile',
                queryParams: {
                    tab: 'my-services'
                }
            },
            { separator: true },
            {
                label: 'Salir', icon: 'pi pi-fw pi-sign-out',
                command: () => {
                    authService.logout();
                }
            },
        ];
        this.user = profileService.getUser();
    }

    ngOnInit(): void {
        this.profileService.profile.subscribe(data => {
            this.user = data
        })
    }
}
