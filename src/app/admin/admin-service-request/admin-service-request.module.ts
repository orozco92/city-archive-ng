import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminServiceRequestRoutingModule } from './admin-service-request-routing.module';
import { AdminServiceRequestComponent } from './admin-service-request.component';
import { AdminServiceRequestViewComponent } from './admin-service-request-view/admin-service-request-view.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
    declarations: [
        AdminServiceRequestComponent,
        AdminServiceRequestViewComponent
    ],
    imports: [
        CommonModule,
        AdminServiceRequestRoutingModule,
        FormsModule,
        DialogModule,
        TableModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
    ]
})
export class AdminServiceRequestModule { }
