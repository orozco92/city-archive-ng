import { Component, OnInit } from '@angular/core';
import { AppLoadingService } from '../core/services/app-loading.service';

@Component({
    selector: 'app-testing',
    templateUrl: './testing.component.html',
    styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

    constructor(
        private loadingService: AppLoadingService
    ) { }

    mainBlocked = false;
    cardBlocked = false;

    ngOnInit(): void {
    }

    blockMain() {
        this.loadingService.showLoading("Esta cargandooooo")
        setTimeout(() => this.loadingService.hideLoading(), 3000)
    }

}
