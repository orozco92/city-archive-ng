import { Component, Injector } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { AppLoadingService } from "../services/app-loading.service";
import { IDestroyable } from "../interfaces/IDestroyable";
@Component({
    template: ''
})
export abstract class AppComponentBase implements IDestroyable {
    message: MessageService;
    confirmationService: ConfirmationService;
    loadingService: AppLoadingService;

    constructor(injector: Injector) {
        this.message = injector.get(MessageService);
        this.confirmationService = injector.get(ConfirmationService);
        this.loadingService = injector.get(AppLoadingService);
    }
    subscriptions: Subscription[] = [];
    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
