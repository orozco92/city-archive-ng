import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { IDestroyable } from "../interfaces/IDestroyable";
@Component({
    template: ''
})
export class DestroyComponent implements IDestroyable {
    subscriptions: Subscription[] = [];
    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}
