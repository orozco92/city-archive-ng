import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'service-request',
        loadChildren: () => import('./admin-service-request/admin-service-request.module').then(m => m.AdminServiceRequestModule)
    },
    {
        path: 'informative-services',
        loadChildren: () => import('./admin-informative-service/admin-informative-service.module').then(m => m.AdminInformativeServiceModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'service-request' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
