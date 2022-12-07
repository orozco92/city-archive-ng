import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from '../core/guards/admin-guard.service';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: 'service-request',
        loadChildren: () =>
            import('./admin-service-request/admin-service-request.module').then(
                (m) => m.AdminServiceRequestModule
            ),
    },
    {
        path: 'informative-services',
        loadChildren: () =>
            import(
                './admin-informative-service/admin-informative-service.module'
            ).then((m) => m.AdminInformativeServiceModule),
    },
    {
        path: 'public-funds',
        loadChildren: () =>
            import('./admin-public-funds/admin-public-funds.module').then(
                (m) => m.AdminPublicFundsModule
            ),
    },
    {
        path: 'users',
        loadChildren: () =>
            import('./admin-users/admin-users.module').then(
                (m) => m.AdminUsersModule
            ),
    },
    {
        path: '',
        pathMatch: 'full',
        component: AdminComponent,
        canActivate: [AdminGuardService],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AdminGuardService],
})
export class AdminRoutingModule {}
