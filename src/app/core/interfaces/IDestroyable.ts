import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

export interface IDestroyable extends OnDestroy {
    subscriptions: Subscription[];
}
