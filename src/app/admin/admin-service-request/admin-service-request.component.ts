import { KeyValue } from '@angular/common';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { pick } from 'lodash-es';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { ServiceRequestStatusEnum, ServiceRequestStatusHelper } from 'src/app/core/helpers/ServiceRequestStatusHelper';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { IServiceRequest } from 'src/app/core/models/service-request';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';
import { AdminServiceRequestViewComponent } from './admin-service-request-view/admin-service-request-view.component';

@Component({
    selector: 'app-admin-service-request',
    templateUrl: './admin-service-request.component.html',
    styleUrls: ['./admin-service-request.component.scss']
})
export class AdminServiceRequestComponent extends ListComponentBase implements OnInit {

    statusHelper: ServiceRequestStatusHelper;
    selectedRequest: Partial<IServiceRequest> = {};
    showDialog = false;
    statusList: KeyValue<string, string>[] = [];
    @ViewChild(Table) table!: Table;
    @ViewChild(AdminServiceRequestViewComponent) viewDialog!: AdminServiceRequestViewComponent;

    constructor(injector: Injector, private serviseRequestService: ServiceRequestService) {
        super(injector);
        this.statusHelper = new ServiceRequestStatusHelper();
        Object.values(ServiceRequestStatusEnum).forEach(item => {
            this.statusList.push({ key: item, value: this.statusHelper.getStatusTranslation(item) });
        });
    }

    ngOnInit(): void {
    }

    loadData(event?: LazyLoadEvent) {
        this.dataListHelper.loading = true;
        let order = 'date:asc';
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
        this.serviseRequestService.list(q)
            .subscribe(data => {
                this.dataListHelper.rows = data.rows;
                this.dataListHelper.totalRowsCount = data.count
                this.dataListHelper.loading = false;
            })
    }

    viewDetails(request: IServiceRequest) {
        this.viewDialog.openDialog(request.id);
    }

    changeStatus(request: IServiceRequest) {
        this.selectedRequest = pick(request, ['id', 'status']);

        this.showDialog = true;
    }

    updateStatus() {
        this.showDialog = false; this.serviseRequestService.update(this.selectedRequest.id ?? 0, this.selectedRequest as IServiceRequest)
            .subscribe({
                next: () => {
                    this.message.add({ summary: 'Estado actualizado', severity: MessageServiceSeverityEnum.SUCCESS });
                    this.table.reset();
                },
                error: () => {
                    this.message.add({ summary: 'Ocurrio un error al actualizar el estado', severity: MessageServiceSeverityEnum.ERROR });
                    this.table.reset();
                }
            })
    }

}
