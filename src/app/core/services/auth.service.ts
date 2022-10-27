import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileService } from './profile.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiUrl = environment.apiUrl

    constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) { }

    public isAuthenticated(): Boolean {
        let userData = localStorage.getItem('app-token')
        if (userData && JSON.parse(userData)) {
            return true;
        }
        return false;
    }

    public login(email: string, password: string) {
        return this.http.post(this.apiUrl + '/auth/login', { 'username': email, 'password': password })
            .pipe(
                map((item: any) => this.setAuthFromLocalStorage(item))
            )
    }

    public logout() {
        localStorage.removeItem('app-token');
        this.profileService.setUser(undefined);
        this.router.navigate(['/']);
    }

    private setAuthFromLocalStorage(auth: any): boolean {
        if (auth && auth.token) {
            localStorage.setItem('app-token', auth.token);
            this.profileService.setUser(auth.user);
            return true;
        }
        return false;
    }

    public getAuthFromLocalStorage(): string | null {
        try {
            return localStorage.getItem('app-token');
        } catch (error) {
            return null;
        }
    }
}
