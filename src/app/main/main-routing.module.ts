import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'services', loadChildren: () => import('./informative-service/informative-service.module').then(m => m.InformativeServiceModule) },
    { path: 'service-request', loadChildren: () => import('../service-request/service-request.module').then(m => m.ServiceRequestModule) },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
    { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
