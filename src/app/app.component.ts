import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private primengConfig: PrimeNGConfig, private readonly messageService: MessageService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
