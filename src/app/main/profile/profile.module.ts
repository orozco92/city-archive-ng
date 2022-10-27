import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProfileService } from 'src/app/core/services/profile.service';

@NgModule({
    declarations: [
        ProfileComponent,
        PersonalDataComponent,
        MyServicesComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        TableModule,
        TabViewModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule
    ],
    providers: []
})
export class ProfileModule { }
