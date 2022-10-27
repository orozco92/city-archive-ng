import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInformativeService } from '../models/informative-service';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class InformativeServiceService extends DefaultCrudService<IInformativeService> {

    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/informative-services';
    }
}
