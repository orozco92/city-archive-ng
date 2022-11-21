import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiListQuery, IApiListResult } from '../interfaces/IApiListResult';

@Injectable({
    providedIn: 'root'
})
export class PublicService {

    protected apiUrl: string = environment.apiUrl + '/public';
    protected http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    list(path: string, query: IApiListQuery): Observable<IApiListResult<unknown>> {
        let params = new HttpParams();
        for (const key in query) {
            if (Object.prototype.hasOwnProperty.call(query, key)) {
                params = params.append(key, query[key])
            }
        }
        return this.http.get<IApiListResult<unknown>>(`${this.apiUrl}/${path}`, { params });
    }

    get(path: string, id: string | number): Observable<unknown> {
        return this.http.get<unknown>(`${this.apiUrl}/${path}/${id}`);
    }

}
