import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '../models/news';
import { DefaultCrudService } from './default-crud.service';

@Injectable({
    providedIn: 'root',
})
export class NewsService extends DefaultCrudService<INews> {
    uploadUrl: string;

    constructor(http: HttpClient) {
        super(http);
        this.uploadUrl = this.apiUrl + '/archives/news';
        this.apiUrl += '/news';
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
