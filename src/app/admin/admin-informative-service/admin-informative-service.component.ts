import { KeyValue } from '@angular/common';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { pick } from 'lodash-es';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { ServiceRequestStatusEnum, ServiceRequestStatusHelper } from 'src/app/core/helpers/ServiceRequestStatusHelper';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { IServiceRequest } from 'src/app/core/models/service-request';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';
import { AdminInformativeServiceEditComponent } from './admin-informative-service-edit/admin-informative-service-edit.component';

@Component({
    selector: 'app-admin-informative-service',
    templateUrl: './admin-informative-service.component.html',
    styleUrls: ['./admin-informative-service.component.scss']
})
export class AdminInformativeServiceComponent extends ListComponentBase {

    @ViewChild(Table) table!: Table;
    @ViewChild(AdminInformativeServiceEditComponent) editDialog!: AdminInformativeServiceEditComponent;

    constructor(injector: Injector, private informativeServiceService: InformativeServiceService) {
        super(injector);
    }

    loadData(event?: LazyLoadEvent) {
        this.dataListHelper.loading = true;
        let order = 'name:asc';
        if (event?.sortField) {
            order = event?.sortField + ':' + (event?.sortOrder == -1 ? 'ASC' : 'DESC');
        }

        const q: IApiListQuery = {
            skip: event?.first ?? 0,
            limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage,
            order
        }
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.informativeServiceService.list(q)
            .subscribe(data => {
                this.dataListHelper.rows = data.rows;
                this.dataListHelper.totalRowsCount = data.count
                this.dataListHelper.loading = false;
            })
    }

    changeStatus(service: IInformativeService) {
        this.editDialog.openDialog(Object.assign({}, service));
    }

    onUpdateService() {
        this.table.reset();
    }
}
