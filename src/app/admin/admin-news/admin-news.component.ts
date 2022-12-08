import { Component, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { CrudComponentBase } from 'src/app/core/components/CrudComponentBase';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
    selector: 'app-admin-news',
    templateUrl: './admin-news.component.html',
})
export class AdminNewsComponent extends CrudComponentBase {
    @ViewChild(Table) table!: Table;

    constructor(
        injector: Injector,
        private router: Router,
        private newsService: NewsService
    ) {
        super(injector);
    }

    loadData(event?: LazyLoadEvent) {
        this.dataListHelper.loading = true;
        let order = 'endDate:desc';
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
        this.newsService.list(q).subscribe((data) => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count;
            this.dataListHelper.loading = false;
        });
    }

    deleteItem(item: any) {
        this.newsService.delete(item.id).subscribe((data) => {
            this.message.add({
                summary: 'Noticia eliminada',
                severity: MessageServiceSeverityEnum.SUCCESS,
            });
            this.table.reset();
        });
    }

    editItem(item?: any): void {
        const id = item ? item.id : 'add';
        this.router.navigate(['admin', 'public-funds', id]);
    }
}
