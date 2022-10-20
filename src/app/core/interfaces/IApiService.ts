import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IApiListQuery, IApiListResult } from "./IApiListResult";

export interface IApiService<E> {
    list(query: IApiListQuery): Observable<IApiListResult<E>>
    get(id: number | string): Observable<E>
    create(data: E): Observable<E>
    update(id: number | string, data: E): Observable<E>
    delete(id: number | string): Observable<E>
}
