import { Component, Inject, Injector, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { ServiceRequestStatusHelper } from 'src/app/core/helpers/ServiceRequestStatusHelper';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
    selector: 'app-my-services',
    templateUrl: './my-services.component.html',
    styles: [
    ]
})
export class MyServicesComponent extends ListComponentBase {

    statusHelper = new ServiceRequestStatusHelper();

    constructor(injector: Injector, private profileService: ProfileService) {
        super(injector);
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
}
