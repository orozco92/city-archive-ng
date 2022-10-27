import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceRequestComponent } from './service-request.component';
import { StandardServiceComponent } from './standard-service/standard-service.component';
import { ForeignIndexServiceComponent } from './foreign-index-service/foreign-index-service.component';
import { NotarialProtocolServiceComponent } from './notarial-protocol-service/notarial-protocol-service.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ProfilePersonalDataModule } from 'src/app/shared/profile-personal-data/profile-personal-data.module';


@NgModule({
    declarations: [
        ServiceRequestComponent,
        StandardServiceComponent,
        ForeignIndexServiceComponent,
        NotarialProtocolServiceComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ServiceRequestRoutingModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        ProfilePersonalDataModule
    ]
})
export class ServiceRequestModule { }
