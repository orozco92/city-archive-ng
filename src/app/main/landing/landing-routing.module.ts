import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        { path: 'about-us', component: AboutUsComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
