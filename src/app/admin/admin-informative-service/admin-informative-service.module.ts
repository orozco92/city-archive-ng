import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminInformativeServiceRoutingModule } from './admin-informative-service-routing.module';
import { AdminInformativeServiceComponent } from './admin-informative-service.component';
import { AdminInformativeServiceEditComponent } from './admin-informative-service-edit/admin-informative-service-edit.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
    declarations: [
        AdminInformativeServiceComponent,
        AdminInformativeServiceEditComponent
    ],
    imports: [
        CommonModule,
        AdminInformativeServiceRoutingModule,
        FormsModule,
        DialogModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        InputTextareaModule,
        InputNumberModule,
    ]
})
export class AdminInformativeServiceModule { }
