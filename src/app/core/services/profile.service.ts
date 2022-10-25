import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    apiUrl = environment.apiUrl + '/profile'
    profile = new Subject<IUser | undefined>();

    currentUser: IUser | undefined = undefined;

    constructor(private http: HttpClient) {
    }

    setUser(user?: IUser) {
        this.currentUser = user
        localStorage.setItem('profile', JSON.stringify(user));
        this.profile.next(user);
    }

    getUser() {
        if (!this.currentUser) {
            let profile = localStorage.getItem('profile');
            this.currentUser = !!profile ? JSON.parse(profile) : undefined
        }
        return this.currentUser;
    }
}
