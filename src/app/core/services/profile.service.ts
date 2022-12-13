import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiListQuery, IApiListResult } from '../interfaces/IApiListResult';
import { IServiceRequest } from '../models/service-request';
import { IUser } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    apiUrl = environment.apiUrl + '/profile';
    profile = new Subject<IUser | undefined>();

    currentUser: IUser | undefined = undefined;

    constructor(private http: HttpClient) {}

    setUser(user?: IUser) {
        this.currentUser = user;
        if (user) {
            localStorage.setItem('profile', JSON.stringify(user));
        } else {
            localStorage.removeItem('profile');
        }
        this.profile.next(user);
    }

    getUser() {
        if (!this.currentUser) {
            let profile = localStorage.getItem('profile');
            this.currentUser = !!profile ? JSON.parse(profile) : undefined;
        }
        return this.currentUser;
    }

    update(data: IUser): Observable<IUser> {
        return this.http.put<IUser>(this.apiUrl, data).pipe(
            tap((data) => {
                this.setUser(data);
                return data;
            })
        );
    }

    myServices(
        query: IApiListQuery
    ): Observable<IApiListResult<IServiceRequest>> {
        let params = new HttpParams();
        for (const key in query) {
            if (Object.prototype.hasOwnProperty.call(query, key)) {
                params = params.append(key, query[key]);
            }
        }
        return this.http.get<IApiListResult<IServiceRequest>>(
            this.apiUrl + '/my-services',
            { params }
        );
    }
}
