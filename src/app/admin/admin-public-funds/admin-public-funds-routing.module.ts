import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPublicFundsUpsertComponent } from './admin-public-funds-upsert/admin-public-funds-upsert.component';
import { AdminPublicFundsComponent } from './admin-public-funds.component';

const routes: Routes = [
    { path: '', component: AdminPublicFundsComponent },
    { path: 'add', component: AdminPublicFundsUpsertComponent },
    { path: ':id', component: AdminPublicFundsUpsertComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPublicFundsRoutingModule { }
