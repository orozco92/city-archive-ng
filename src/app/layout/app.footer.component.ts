import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    logoUrl;

    constructor(public layoutService: LayoutService) {
        this.logoUrl = 'assets/images/logo.png';
    }
}
