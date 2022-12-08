import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNewsUpsertComponent } from './admin-news-upsert/admin-news-upsert.component';
import { AdminNewsComponent } from './admin-news.component';

const routes: Routes = [
    { path: '', component: AdminNewsComponent },
    { path: 'add', component: AdminNewsUpsertComponent },
    { path: ':id', component: AdminNewsUpsertComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminNewsRoutingModule {}
