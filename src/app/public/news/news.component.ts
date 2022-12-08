import { Component, Injector } from '@angular/core';
import { debounce } from 'lodash-es';
import { LazyLoadEvent } from 'primeng/api';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { PublicService } from 'src/app/core/services/public.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
})
export class NewsComponent extends ListComponentBase {
    searchDelay = debounce(this.loadData, 500);
    apiUrl = environment.apiUrl;

    constructor(injector: Injector, private publicService: PublicService) {
        super(injector);
    }

    loadData(event?: LazyLoadEvent) {
        const q: IApiListQuery = {
            attributes: ['id', 'title', 'endDate'],
            skip: event?.first ?? 0,
            limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage,
        };
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.publicService.list('news', q).subscribe((data) => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count;
        });
    }
}
