import { Component, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { debounce } from 'lodash-es';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { PublicFundsService } from 'src/app/core/services/public-funds.service';
import { IPublicFund } from 'src/app/core/models/public-fund';
import { Menu } from 'primeng/menu';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-public-funds',
    templateUrl: './public-funds.component.html',
})
export class PublicFundsComponent extends ListComponentBase {
    searchDelay = debounce(this.loadData, 500);
    selectedArchives: MenuItem[] = [];
    apiurl = environment.apiUrl;
    @ViewChild('menu') menu!: Menu;

    constructor(
        injector: Injector,
        private publicFundsService: PublicFundsService,
        private router: Router
    ) {
        super(injector);
    }

    loadData(event?: LazyLoadEvent) {
        this.dataListHelper.loading = true;
        let order = 'catalogue:asc';
        if (event?.sortField) {
            order =
                event?.sortField +
                ':' +
                (event?.sortOrder == -1 ? 'ASC' : 'DESC');
        }

        const q: IApiListQuery = {
            skip: event?.first ?? 0,
            limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage,
            order,
        };
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.dataListHelper.loading = false;
        this.publicFundsService.list(q).subscribe((data) => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count;
            this.dataListHelper.loading = false;
        });
    }

    openMenu(event: any, publicFund: IPublicFund) {
        this.selectedArchives = publicFund.Archives.map((item) => ({
            label: item.fileName,
            url:
                this.apiurl +
                `/public/public-funds/download/${publicFund.id}/${item.id}`,
        }));
        this.menu.toggle(event);
    }
}
