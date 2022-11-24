import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInformativeServiceComponent } from './admin-informative-service.component';

const routes: Routes = [{ path: '', component: AdminInformativeServiceComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminInformativeServiceRoutingModule { }
