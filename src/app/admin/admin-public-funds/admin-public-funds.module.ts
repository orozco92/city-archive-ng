import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPublicFundsRoutingModule } from './admin-public-funds-routing.module';
import { AdminPublicFundsComponent } from './admin-public-funds.component';
import { AdminPublicFundsUpsertComponent } from './admin-public-funds-upsert/admin-public-funds-upsert.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
    declarations: [
        AdminPublicFundsComponent,
        AdminPublicFundsUpsertComponent
    ],
    imports: [
        CommonModule,
        AdminPublicFundsRoutingModule,
        FormsModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        ToolbarModule,
        DialogModule,
        InputTextareaModule,
        CalendarModule,
        FileUploadModule
    ]
})
export class AdminPublicFundsModule { }
