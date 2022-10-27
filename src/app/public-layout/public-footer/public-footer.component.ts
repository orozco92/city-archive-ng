import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/core/AppConstants';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-public-footer',
    templateUrl: './public-footer.component.html',
    styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent {
    logoUrl = '';
    companyName = AppConstants.companyName;
    constructor(public layoutService: LayoutService, public router: Router) {
        this.logoUrl = 'assets/images/logo.png';
    }

}
