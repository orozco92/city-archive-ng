import { Component, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { CrudComponentBase } from 'src/app/core/components/CrudComponentBase';
import { ServiceRequestStatusHelper } from 'src/app/core/helpers/ServiceRequestStatusHelper';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';

@Component({
    selector: 'app-my-services',
    templateUrl: './my-services.component.html'
})
export class MyServicesComponent extends CrudComponentBase {

    statusHelper = new ServiceRequestStatusHelper();
    @ViewChild('dt') table!: Table;

    constructor(
        injector: Injector,
        private profileService: ProfileService,
        private serviceRequestService: ServiceRequestService,
        private router: Router) {
        super(injector);
        this.deleteHeader = 'Emilinar solicitud'
        this.deleteMessage = 'Esta seguro que desea eliminar la solicitud?'
    }

    loadData(event?: LazyLoadEvent) {
        this.dataListHelper.loading = true;
        const q: IApiListQuery = { skip: event?.first ?? 0, limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage }
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.profileService.myServices(q)
            .subscribe(data => {
                this.dataListHelper.rows = data.rows;
                this.dataListHelper.totalRowsCount = data.count
                this.dataListHelper.loading = false;
            })
    }

    deleteItem(item: any) {
        this.serviceRequestService.delete(item.id)
            .subscribe(data => {
                this.message.add({ summary: 'Servicio eliminado', severity: MessageServiceSeverityEnum.SUCCESS });
                this.table.reset();
            })
    }

    editItem(item: any) {
        this.router.navigate(['main', 'service-request', item.id])
    }
}
