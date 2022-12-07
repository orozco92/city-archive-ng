import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicFundsRoutingModule } from './public-funds-routing.module';
import { PublicFundsComponent } from './public-funds.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';

@NgModule({
    declarations: [PublicFundsComponent],
    imports: [
        CommonModule,
        PublicFundsRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DataViewModule,
        MenuModule,
    ],
})
export class PublicFundsModule {}
