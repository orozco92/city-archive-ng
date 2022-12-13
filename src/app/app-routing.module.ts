import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { AccessComponent } from './auth/access/access.component';
import { RoleGuard } from './core/guards/role.guard';
import { RoleEnum } from './core/helpers/RoleHelper';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'admin',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import('./admin/admin.module').then(
                                    (m) => m.AdminModule
                                ),
                        },
                    ],
                    canActivate: [RoleGuard],
                    data: {
                        roles: [
                            RoleEnum.ADMIN,
                            RoleEnum.SERVICE_ADMIN,
                            RoleEnum.FUNDS_ADMIN,
                        ],
                    },
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./auth/auth.module').then((m) => m.AuthModule),
                },
                { path: 'pages/notfound', component: AccessComponent },
                {
                    path: 'main',
                    component: PublicLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import('./main/main.module').then(
                                    (m) => m.MainModule
                                ),
                        },
                    ],
                    canActivate: [RoleGuard],
                    data: {
                        roles: [...Object.values(RoleEnum)],
                    },
                },
                {
                    path: '',
                    component: PublicLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import('./public/public.module').then(
                                    (m) => m.PublicModule
                                ),
                        },
                    ],
                },
                { path: '**', redirectTo: 'pages/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
