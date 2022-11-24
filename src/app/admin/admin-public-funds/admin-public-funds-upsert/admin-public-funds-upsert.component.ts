import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';

@Component({
    selector: 'app-admin-public-funds-upsert',
    templateUrl: './admin-public-funds-upsert.component.html'
})
export class AdminPublicFundsUpsertComponent extends AppComponentBase {
    visible = false;
    publicFund: any = {};
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
    }

    openDialog() {
        this.visible = true;
    }
    onUpload() {

    }
}
