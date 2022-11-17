import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceRequestForeignIndex } from '../models/service-request-foreign-index';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class ServiceRequestForeignIndexService extends DefaultCrudService<IServiceRequestForeignIndex> {

    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/service-request-foreign-indices';
    }
}
