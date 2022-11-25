import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPublicFund } from '../models/public-fund';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root'
})
export class PublicFundsService extends DefaultCrudService<IPublicFund> {

    uploadUrl: string;

    constructor(http: HttpClient) {
        super(http);
        this.uploadUrl = this.apiUrl + '/archives';
        this.apiUrl += '/public-funds';
    }

    upload(id: number, files: File[]) {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            if (!!files[i]) {
                formData.append('files', files[i], files[i]['name']);
            }
        }

        return this.http.put(`${this.uploadUrl}/${id}`, formData);

    }
}
