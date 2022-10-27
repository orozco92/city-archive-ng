import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativeServiceComponent } from './informative-service.component';

const routes: Routes = [{ path: '', component: InformativeServiceComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformativeServiceRoutingModule { }
