import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNewsRoutingModule } from './admin-news-routing.module';
import { AdminNewsComponent } from './admin-news.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AdminNewsUpsertComponent } from './admin-news-upsert/admin-news-upsert.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { ImageModule } from 'primeng/image';

@NgModule({
    declarations: [AdminNewsComponent, AdminNewsUpsertComponent],
    imports: [
        CommonModule,
        AdminNewsRoutingModule,
        FormsModule,
        ToolbarModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        ConfirmDialogModule,
        FileUploadModule,
        PanelModule,
        EditorModule,
        CalendarModule,
        ImageModule,
    ],
})
export class AdminNewsModule {}
