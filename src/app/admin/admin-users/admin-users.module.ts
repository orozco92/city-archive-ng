import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersComponent } from './admin-users.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { UpdateRoleModalComponent } from './update-role-modal/update-role-modal.component';
import { UpdatePasswordModalComponent } from './update-password-modal/update-password-modal.component';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
    declarations: [
        AdminUsersComponent,
        UpdateRoleModalComponent,
        UpdatePasswordModalComponent,
    ],
    imports: [
        CommonModule,
        AdminUsersRoutingModule,
        FormsModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        DialogModule,
        DropdownModule,
        MenuModule,
        PasswordModule,
        ConfirmDialogModule,
    ],
})
export class AdminUsersModule {}
