import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePersonalDataComponent } from './profile-personal-data.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    declarations: [ProfilePersonalDataComponent],
    imports: [CommonModule, FormsModule, InputTextModule, InputTextareaModule],
    providers: [],
    exports: [ProfilePersonalDataComponent],
})
export class ProfilePersonalDataModule {}
