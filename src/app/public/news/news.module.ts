import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NewsViewComponent } from './news-view/news-view.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@NgModule({
    declarations: [NewsComponent, NewsViewComponent],
    imports: [
        CommonModule,
        NewsRoutingModule,
        FormsModule,
        DataViewModule,
        ButtonModule,
        InputTextModule,
        CardModule,
        ImageModule,
    ],
})
export class NewsModule {}
