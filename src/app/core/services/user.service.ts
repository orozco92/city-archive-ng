import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root',
})
export class UserService extends DefaultCrudService<IUser> {
    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/users';
    }
}
