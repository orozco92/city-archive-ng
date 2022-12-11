import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformativeServiceRoutingModule } from './informative-service-routing.module';
import { InformativeServiceComponent } from './informative-service.component';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
    declarations: [
        InformativeServiceComponent
    ],
    imports: [
        CommonModule,
        InformativeServiceRoutingModule,
        DataViewModule,
        DropdownModule,
        ButtonModule,
        FormsModule,
        InputTextModule,
        PaginatorModule
    ],
    providers: [InformativeServiceService]
})
export class InformativeServiceModule { }
