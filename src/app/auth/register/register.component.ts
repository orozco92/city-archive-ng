import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AuthService } from 'src/app/core/services/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [
        `
            :host ::ng-deep .p-password input {
                width: 100%;
                padding: 1rem;
            }

            :host ::ng-deep .pi-eye {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class RegisterComponent {
    valCheck: string[] = ['remember'];
    password!: string;
    email!: string;
    repeatPassword!: string;
    username!: string;
    redirectUrl: string;
    logoUrl = '';

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router,
        private location: Location
    ) {
        this.redirectUrl = '/auth/login';
        this.logoUrl = 'assets/images/logo.png';
    }

    register() {
        this.authService
            .register(this.username, this.password, this.email)
            .subscribe({
                next: (data) => {
                    this.router.navigate([this.redirectUrl]);
                },
                error: (error) => {
                    this.messageService.add({
                        summary: 'El usuario ya existe',
                        severity: MessageServiceSeverityEnum.ERROR,
                    });
                },
            });
    }
    cacncel() {
        this.location.back();
    }
}
