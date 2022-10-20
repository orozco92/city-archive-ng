import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        PublicLayoutComponent,
        PublicHeaderComponent,
        PublicFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        StyleClassModule,
        ButtonModule
    ],
    exports: [
        PublicLayoutComponent
    ]
})
export class PublicLayoutModule { }
