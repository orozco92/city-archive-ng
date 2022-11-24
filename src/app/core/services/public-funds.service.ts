import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceRequest } from '../models/service-request';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class PublicFundsService extends DefaultCrudService<IServiceRequest> {

    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/public-funds';
    }
}
