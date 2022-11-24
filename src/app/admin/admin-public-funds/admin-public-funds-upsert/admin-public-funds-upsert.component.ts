import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { Location } from '@angular/common';
import { PublicFundsService } from 'src/app/core/services/public-funds.service';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-public-funds-upsert',
    templateUrl: './admin-public-funds-upsert.component.html'
})
export class AdminPublicFundsUpsertComponent extends AppComponentBase implements OnInit {

    files: any = [];
    publicFund: any = {
    };

    constructor(injector: Injector,
        private location: Location,
        private route: ActivatedRoute,
        private publicFundsService: PublicFundsService) {
        super(injector);
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    saveChanges() {
        console.log(this.publicFund);
        return;
        const apiCall = !!this.publicFund.id
            ? this.publicFundsService.update(this.publicFund.id, this.publicFund)
            : this.publicFundsService.create(this.publicFund)
        apiCall.subscribe({
            next: (data) => {
                this.message.add({ summary: 'Fondo publico ' + !!this.publicFund.id ? 'actualizado' : 'creado', severity: MessageServiceSeverityEnum.SUCCESS });
                this.location.back();
            }, error: () => {
                this.message.add({ summary: 'Ocurrio un error al ' + !!this.publicFund.id ? 'actualizado' : 'creado' + ' el fondo publico', severity: MessageServiceSeverityEnum.ERROR });
            }
        })
    }

    cancelChanges() {
        this.location.back();
    }

    addFile(event: any) {
        console.log(this.publicFund.files);

        // this.publicFund.files = event.currentFiles;

    }
}
