import { Component, Injector } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { debounce } from 'lodash-es';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-informative-service',
    templateUrl: './informative-service.component.html',
    styles: [],

})
export class InformativeServiceComponent extends ListComponentBase {

    searchDelay = debounce(this.loadData, 500);

    constructor(injector: Injector, private service: InformativeServiceService, private router: Router) {
        super(injector);
    }

    loadData(event?: LazyLoadEvent) {
        const q: IApiListQuery = { skip: event?.first ?? 0, limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage }
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.service.list(q).subscribe(data => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count
        })
    }

    requestService(id: number) {
        this.router.navigate(['main', 'service-request', id])
    }
}
