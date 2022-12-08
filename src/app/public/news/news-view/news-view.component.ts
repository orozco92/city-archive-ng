import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { INews } from 'src/app/core/models/news';
import { PublicService } from 'src/app/core/services/public.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-news-view',
    templateUrl: './news-view.component.html',
})
export class NewsViewComponent extends AppComponentBase implements OnInit {
    news: INews | null = null;
    apiUrl = environment.apiUrl;
    constructor(
        injector: Injector,
        private publicService: PublicService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        super(injector);
    }
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!!id) {
            this.publicService.get('news', +id).subscribe((data) => {
                this.news = data as INews;
            });
        }
    }

    back() {
        this.location.back();
    }
}
