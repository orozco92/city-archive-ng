import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiListQuery, IApiListResult } from '../interfaces/IApiListResult';
import { IApiService } from '../interfaces/IApiService';

@Injectable({
    providedIn: 'root'
})
export abstract class DefaultCrudService<E> implements IApiService<E> {

    protected apiUrl: string = environment.apiUrl;
    protected http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    list(query: IApiListQuery): Observable<IApiListResult<E>> {
        let params = new HttpParams();
        for (const key in query) {
            if (Object.prototype.hasOwnProperty.call(query, key)) {
                params = params.append(key, query[key])
            }
        }
        return this.http.get<IApiListResult<E>>(this.apiUrl, { params });
    }

    get(id: string | number): Observable<E> {
        return this.http.get<E>(`${this.apiUrl}/${id}`);
    }

    create(data: E): Observable<E> {
        return this.http.post<E>(`${this.apiUrl}`, { body: data });
    }

    update(id: string | number, data: E): Observable<E> {
        return this.http.put<E>(`${this.apiUrl}/${id}`, { body: data });
    }

    delete(id: string | number): Observable<E> {
        return this.http.delete<E>(`${this.apiUrl}/${id}`);
    }
}
