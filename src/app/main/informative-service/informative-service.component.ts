import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { debounce } from 'lodash-es';

@Component({
    selector: 'app-informative-service',
    templateUrl: './informative-service.component.html',
    styles: []
})
export class InformativeServiceComponent {

    products: IInformativeService[] = [];
    sortOptions: SelectItem[] = [];
    sortOrder: number = 0;
    sortField: string = '';
    searchText: string = '';
    totalRows = 0;
    rows = 6;

    searchDelay = debounce(this.loadData, 500);

    constructor(private service: InformativeServiceService) { }

    loadData(event?: LazyLoadEvent) {
        const q: IApiListQuery = { skip: event?.first ?? 0, limit: event?.rows ?? this.rows }
        if (this.searchText) {
            q.search = this.searchText;
        }
        this.service.list(q).subscribe(data => {
            this.products = data.rows;
            this.totalRows = data.count
        })
    }
}
