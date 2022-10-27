import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AppLoadingService {

    private _text = '';
    _loading = false;
    private loadingSubject = new BehaviorSubject(false);

    get text() {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
    }

    get loading(): Observable<boolean> {
        return this.loadingSubject;
    }

    showLoading(text?: string) {
        if (!this._loading) {
            this._text = text ?? '';
            this.loadingSubject.next(true);
        }
    }

    hideLoading() {
        this.loadingSubject.next(false);
    }
}
