import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-public-footer',
    templateUrl: './public-footer.component.html',
    styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }

}
