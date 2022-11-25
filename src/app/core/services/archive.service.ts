import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Archive } from '../models/city-file';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class ArchiveService extends DefaultCrudService<Archive> {

    constructor(http: HttpClient) {
        super(http);
        this.apiUrl += '/archives';
    }

}
