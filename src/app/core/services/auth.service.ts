import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileService } from './profile.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiUrl = environment.apiUrl

    constructor(private http: HttpClient, private profileService: ProfileService) { }

    public isAuthenticated(): Boolean {
        let userData = localStorage.getItem('userInfo')
        if (userData && JSON.parse(userData)) {
            return true;
        }
        return false;
    }

    public setUserInfo(user: any) {

        localStorage.setItem('userInfo', JSON.stringify(user));
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
    }

    private setAuthFromLocalStorage(auth: any): boolean {
        if (auth && auth.token) {
            localStorage.setItem('app-token', JSON.stringify(auth.token));
            this.profileService.setUser(auth.user);
            return true;
        }
        return false;
    }
}
