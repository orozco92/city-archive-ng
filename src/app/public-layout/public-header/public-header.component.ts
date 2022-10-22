import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/core/AppConstants';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-public-header',
    templateUrl: './public-header.component.html',
    styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent {
    logoUrl = '';
    companyName = AppConstants.companyName;
    constructor(public layoutService: LayoutService, public router: Router) {
        // this.logoUrl = `assets/layout/images/${layoutService.config.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`;
        this.logoUrl = 'assets/images/logo.png';
    }
}
