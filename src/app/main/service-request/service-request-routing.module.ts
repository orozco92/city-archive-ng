import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeignIndexServiceComponent } from './foreign-index-service/foreign-index-service.component';
import { NotarialProtocolServiceComponent } from './notarial-protocol-service/notarial-protocol-service.component';
import { StandardServiceComponent } from './standard-service/standard-service.component';

const routes: Routes = [
    { path: ':serviceId/foreign-index', component: ForeignIndexServiceComponent },
    { path: ':serviceId/foreign-index/:id', component: ForeignIndexServiceComponent },
    { path: ':serviceId/notarial-protocol', component: NotarialProtocolServiceComponent },
    { path: ':serviceId/notarial-protocol/:id', component: NotarialProtocolServiceComponent },
    { path: ':serviceId', component: StandardServiceComponent },
    { path: ':serviceId/:id', component: StandardServiceComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceRequestRoutingModule { }
