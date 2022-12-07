import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
    {
        path: 'public-funds',
        loadChildren: () =>
            import('./public-funds/public-funds.module').then(
                (m) => m.PublicFundsModule
            ),
    },
    { path: '', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule {}
