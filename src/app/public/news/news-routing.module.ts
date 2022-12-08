import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
    { path: '', component: NewsComponent },
    { path: ':id', component: NewsViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
