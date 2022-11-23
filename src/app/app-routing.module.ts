import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'admin', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
                ],
            },
            {
                path: 'admin1', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                ],
            },
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
            },
            { path: 'pages/notfound', component: NotfoundComponent },
            {
                path: 'main',
                component: PublicLayoutComponent,
                children: [
                    { path: 'testing', loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule) },
                    { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
                ]
            },
            {
                path: '',
                component: PublicLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }
                ]
            },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
