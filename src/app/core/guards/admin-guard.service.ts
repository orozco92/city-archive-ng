import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum } from '../helpers/RoleHelper';
import { ProfileService } from '../services/profile.service';

@Injectable({
    providedIn: 'root',
})
export class AdminGuardService {
    constructor(
        private profileService: ProfileService,
        private route: Router
    ) {}

    canActivate() {
        const user = this.profileService.getUser();

        if (user?.role === RoleEnum.ADMIN) {
            return this.route.navigate(['/admin/users']);
        }
        if (user?.role === RoleEnum.FUNDS_ADMIN) {
            return this.route.navigate(['/admin/public-funds']);
        }
        if (user?.role === RoleEnum.SERVICE_ADMIN) {
            return this.route.navigate(['/admin/service-request']);
        }
        return false;
    }
}
