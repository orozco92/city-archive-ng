import { Component, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { CrudComponentBase } from 'src/app/core/components/CrudComponentBase';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { AdminPublicFundsUpsertComponent } from './admin-public-funds-upsert/admin-public-funds-upsert.component';

@Component({
    selector: 'app-admin-public-funds',
    templateUrl: './admin-public-funds.component.html'
})
export class AdminPublicFundsComponent extends CrudComponentBase {

    @ViewChild(Table) table!: Table;

    constructor(injector: Injector, private router: Router) {
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
        this.dataListHelper.loading = false;
        // this.informativeServiceService.list(q)
        //     .subscribe(data => {
        //         this.dataListHelper.rows = data.rows;
        //         this.dataListHelper.totalRowsCount = data.count
        //         this.dataListHelper.loading = false;
        //     })
    }


    deleteItem(item: any): void {

    };

    editItem(item?: any): void {
        const id = item ? item.id : 'add';
        this.router.navigate(['admin', 'public-funds', id])
    };

}
