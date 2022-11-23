import { Component, OnInit, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { IServiceRequest } from 'src/app/core/models/service-request';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';

@Component({
    selector: 'app-admin-service-request-view',
    templateUrl: './admin-service-request-view.component.html'
})
export class AdminServiceRequestViewComponent implements OnInit {
    serviceRequest!: IServiceRequest;
    @ViewChild(Dialog) dialog!: Dialog;
    visible = false;

    constructor(private serviceRequestService: ServiceRequestService) { }

    ngOnInit(): void {
    }

    openDialog(id: number) {
        this.serviceRequestService.get(id)
            .subscribe(data => {
                this.serviceRequest = data;
                this.visible = true;
            })
    }

}
