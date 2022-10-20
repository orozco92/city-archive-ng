import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AuthService } from 'src/app/core/services/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding:1rem;
        }

        :host ::ng-deep .pi-eye{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    password!: string;
    email!: string;
    redirectUrl: string;

    constructor(public layoutService: LayoutService,
        private authService: AuthService,
        private messageService: MessageService,
        route: ActivatedRoute,
        private router: Router,
    ) {
        this.redirectUrl = route.snapshot.queryParamMap.get('redirectTo') ?? "/";
    }

    login() {
        this.authService.login(this.email, this.password)
            .subscribe({
                next: (data) => {
                    this.router.navigate([this.redirectUrl])
                },
                error: error => {
                    this.messageService.add({ summary: "Invalid email or password", severity: MessageServiceSeverityEnum.ERROR })
                }
            })
    }
}
