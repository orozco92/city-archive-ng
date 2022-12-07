import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicFundsComponent } from './public-funds.component';

const routes: Routes = [{ path: '', component: PublicFundsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicFundsRoutingModule { }
