import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceRequestForeignIndex } from '../models/service-request-foreign-index';
import { IServiceRequestNotarialProtocol } from '../models/service-request-notarial-protocol';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class ServiceRequestNotarialProtocolService extends DefaultCrudService<IServiceRequestNotarialProtocol> {

    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/service-request-notarial-protocols';
    }
}
