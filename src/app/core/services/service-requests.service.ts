import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceRequest } from '../models/service-request';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class ServiceRequestService extends DefaultCrudService<IServiceRequest> {

    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/service-requests';
    }
}
