import { Component, Inject, Injector, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
    selector: 'app-my-services',
    templateUrl: './my-services.component.html',
    styles: [
    ]
})
export class MyServicesComponent extends ListComponentBase {

    constructor(injector: Injector, private profileService: ProfileService) {
        super(injector);
    }

    ngOnInit(): void {
    }

    loadData(event?: LazyLoadEvent) {
        const q: IApiListQuery = { skip: event?.first ?? 0, limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage }
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.profileService.myServices(q)
            .subscribe(data => {
                this.dataListHelper.rows = data.rows;
                this.dataListHelper.totalRowsCount = data.count
            })
    }
}
