import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from '../core/guards/admin-guard.service';
import { RoleGuard } from '../core/guards/role.guard';
import { RoleEnum } from '../core/helpers/RoleHelper';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: 'service-request',
        loadChildren: () =>
            import('./admin-service-request/admin-service-request.module').then(
                (m) => m.AdminServiceRequestModule
            ),
        canActivate: [RoleGuard],
        data: {
            roles: [RoleEnum.ADMIN, RoleEnum.SERVICE_ADMIN],
        },
    },
    {
        path: 'informative-services',
        loadChildren: () =>
            import(
                './admin-informative-service/admin-informative-service.module'
            ).then((m) => m.AdminInformativeServiceModule),
        canActivate: [RoleGuard],
        data: {
            roles: [RoleEnum.ADMIN, RoleEnum.SERVICE_ADMIN],
        },
    },
    {
        path: 'public-funds',
        loadChildren: () =>
            import('./admin-public-funds/admin-public-funds.module').then(
                (m) => m.AdminPublicFundsModule
            ),
        canActivate: [RoleGuard],
        data: {
            roles: [RoleEnum.ADMIN, RoleEnum.FUNDS_ADMIN],
        },
    },
    {
        path: 'users',
        loadChildren: () =>
            import('./admin-users/admin-users.module').then(
                (m) => m.AdminUsersModule
            ),
        canActivate: [RoleGuard],
        data: {
            roles: [RoleEnum.ADMIN],
        },
    },
    {
        path: 'news',
        loadChildren: () =>
            import('./admin-news/admin-news.module').then(
                (m) => m.AdminNewsModule
            ),
        canActivate: [RoleGuard],
        data: {
            roles: [RoleEnum.ADMIN, RoleEnum.FUNDS_ADMIN],
        },
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
