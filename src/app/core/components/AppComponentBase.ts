import { Injector } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { AppLoadingService } from "../services/app-loading.service";

export abstract class AppComponentBase {
    message: MessageService;
    confirmationService: ConfirmationService;
    loadingService: AppLoadingService;

    constructor(injector: Injector) {
        this.message = injector.get(MessageService);
        this.confirmationService = injector.get(ConfirmationService);
        this.loadingService = injector.get(AppLoadingService);
    }
}
