import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeignIndexServiceComponent } from './foreign-index-service/foreign-index-service.component';
import { NotarialProtocolServiceComponent } from './notarial-protocol-service/notarial-protocol-service.component';
import { StandardServiceComponent } from './standard-service/standard-service.component';

const routes: Routes = [
    { path: 'foreign-index', component: ForeignIndexServiceComponent },
    { path: 'notarial-protocol', component: NotarialProtocolServiceComponent },
    { path: ':id', component: StandardServiceComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceRequestRoutingModule { }
