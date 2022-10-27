import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { map, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JwtInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | undefined> {
        const token = this.authService.getAuthFromLocalStorage();
        let clone: HttpRequest<any>;
        if (!!token) {
            clone = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        } else {
            clone = request.clone({
                setHeaders: {
                    Accept: 'application/json',
                }
            });
        }
        return next.handle(clone).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (_.get(event, 'body.msg') === 'TOKEN EXPIRATE') {
                        this.authService.logout();
                    }
                    return event;
                }
                return undefined
            }));
    }
}
