import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProfilePersonalDataModule } from 'src/app/shared/profile-personal-data/profile-personal-data.module';

@NgModule({
    declarations: [
        ProfileComponent,
        PersonalDataComponent,
        MyServicesComponent,
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        TableModule,
        TabViewModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        ConfirmDialogModule,
        ProfilePersonalDataModule,
    ],
    providers: [],
})
export class ProfileModule {}
