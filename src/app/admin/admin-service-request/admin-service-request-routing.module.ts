import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminServiceRequestComponent } from './admin-service-request.component';

const routes: Routes = [{ path: '', component: AdminServiceRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminServiceRequestRoutingModule { }
