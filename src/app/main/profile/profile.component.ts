import { Component, Injector, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ListComponentBase {

    constructor(injector: Injector, private serviceRequestService: ServiceRequestService) {
        super(injector);
    }

    loadData(event?: LazyLoadEvent) {
        const q: IApiListQuery = { skip: event?.first ?? 0, limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage }
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.serviceRequestService.list(q).subscribe(data => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count
        })
    }

    ngOnInit(): void {
    }

}
