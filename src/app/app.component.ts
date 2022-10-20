import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AppLoadingService } from './core/services/app-loading.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    mainBlocked = false;
    loadingText = '';
    constructor(
        private primengConfig: PrimeNGConfig,
        private readonly messageService: MessageService,
        private loadingService: AppLoadingService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.loadingService.loading.subscribe(data => {
            this.loadingText = this.loadingService.text;
            this.mainBlocked = data;
        })
    }
}
