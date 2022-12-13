import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { debounce } from 'lodash-es';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { Router } from '@angular/router';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { PublicService } from 'src/app/core/services/public.service';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
    selector: 'app-informative-service',
    templateUrl: './informative-service.component.html',
    styles: [],
})
export class InformativeServiceComponent
    extends ListComponentBase
    implements OnInit
{
    searchDelay = debounce(this.loadData, 500);
    canRequestService = false;

    constructor(
        injector: Injector,
        private publicService: PublicService,
        private router: Router,
        private profileService: ProfileService
    ) {
        super(injector);
    }

    ngOnInit(): void {
        const user = this.profileService.getUser();
        this.canRequestService = !!user && !!user.role;
    }

    loadData(event?: LazyLoadEvent) {
        const q: IApiListQuery = {
            skip: event?.first ?? 0,
            limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage,
            enabled: 1,
        };
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.publicService.list('informative-services', q).subscribe((data) => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count;
        });
    }

    requestService(service: IInformativeService) {
        const r: any = ['main', 'service-request', service.id];
        if (!!service.url && service.url != '/')
            r.push(service.url.replace('/', ''));
        this.router.navigate(r);
    }
}
