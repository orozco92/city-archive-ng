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
    address = 'Calle Maceo # 191 e/ Cables y Ángel Guerra, Holguín. CP 80100';
    phone = '+53 24471113';
    email = 'some@email.com';
    fbUrl = 'https://www.facebook.com/archivohistorico.provincialdeholguin';
    twitterUrl = 'https://twitter.com/holguinarchivo';
    constructor(public layoutService: LayoutService, public router: Router) {
        this.logoUrl = 'assets/images/logo.png';
    }

}
