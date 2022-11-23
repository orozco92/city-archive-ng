import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { ProfilePersonalDataComponent } from 'src/app/shared/profile-personal-data/profile-personal-data.component';
import { Location } from '@angular/common';
import { IServiceRequestForeignIndex } from 'src/app/core/models/service-request-foreign-index';
import { ServiceRequestForeignIndexService } from 'src/app/core/services/service-request-foreign-index.service';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { IServiceRequest } from 'src/app/core/models/service-request';
import { switchMap, of } from 'rxjs';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';
// import { ServiceRequestService } from 'src/app/core/services/service-requests.service';

@Component({
    selector: 'app-foreign-index-service',
    templateUrl: './foreign-index-service.component.html',
    styleUrls: ['./foreign-index-service.component.scss']
})
export class ForeignIndexServiceComponent extends AppComponentBase implements OnInit {
    service: Partial<IInformativeService> = {};
    serviceRequest: Partial<IServiceRequestForeignIndex> = {};
    @ViewChild(ProfilePersonalDataComponent)
    profileComponent!: ProfilePersonalDataComponent;
    constructor(
        injector: Injector,
        private informativeService: InformativeServiceService,
        private serviceRequestService: ServiceRequestService,
        private foreignIndexService: ServiceRequestForeignIndexService,
        private route: ActivatedRoute,
        private location: Location,
    ) {
        super(injector);
    }

    ngOnInit(): void {
        const serviceId = this.route.snapshot.paramMap.get('serviceId') ?? 0;
        const id = this.route.snapshot.paramMap.get('id') ?? 0;
        const sub = this.informativeService.get(serviceId)
            .pipe(switchMap(data => {
                this.service = data;
                return !!id
                    ? this.serviceRequestService.get(id)
                    : of(false);
            }))
            .subscribe(data => {
                if (data) {
                    this.serviceRequest = (data as IServiceRequest).ServiceRequestForeignIndex as IServiceRequestForeignIndex;
                    this.profileComponent.setUser(data as IServiceRequest)
                }
            })
        this.subscriptions.push(sub)
    }

    save(): void {
        const summary = 'Solicitud de servicio';
        const req: Partial<IServiceRequest> = this.profileComponent.getUser();
        req.InformativeServiceId = this.service.id;
        this.serviceRequest.ServiceRequest = req as IServiceRequest;
        const sub = this.foreignIndexService.create(this.serviceRequest as IServiceRequestForeignIndex)
            .subscribe({
                next: (data) => {
                    if (data) {
                        this.message.add({ summary: summary, detail: 'Solicitus de servicio creada con éxito', severity: MessageServiceSeverityEnum.SUCCESS });
                        this.back();
                    } else {
                        this.message.add({ summary: summary, detail: 'Ha ocurrido un error al crear la solicitud', severity: MessageServiceSeverityEnum.ERROR });
                    }
                },
                error: () => {
                    this.message.add({ summary: summary, detail: 'Ha ocurrido un error al crear la solicitud', severity: MessageServiceSeverityEnum.ERROR });
                }
            });
        this.subscriptions.push(sub)
    }

    importProfileData() {
        this.profileComponent.loadFromProfile();
    }

    back() {
        this.location.back()
    }
}
