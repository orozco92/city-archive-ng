import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pick } from 'lodash-es';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { IServiceRequest } from 'src/app/core/models/service-request';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';

@Component({
    selector: 'app-standard-service',
    templateUrl: './standard-service.component.html',
    styleUrls: ['./standard-service.component.scss']
})
export class StandardServiceComponent extends AppComponentBase implements OnInit {

    serviceName = 'busqueda de algo';
    service: Partial<IInformativeService> = {};
    serviceRequest: Partial<IServiceRequest> = {};

    constructor(
        injector: Injector,
        private serviceRequestService: ServiceRequestService,
        private informativeService: InformativeServiceService,
        private route: ActivatedRoute,
        private location: Location,
        private profileService: ProfileService
    ) {
        super(injector);
    }

    ngOnInit(): void {
        const serviceId = this.route.snapshot.paramMap.get('id') ?? 0;
        const sub = this.informativeService.get(serviceId)
            .subscribe(data => {
                this.service = data;
            })
        this.subscriptions.push(sub)
    }

    save(): void {
        const summary = 'Solicitud de servicio';
        this.serviceRequest.InformativeServiceId = this.service.id;
        const sub = this.serviceRequestService.create(this.serviceRequest as IServiceRequest)
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
        const profile = this.profileService.getUser();
        this.serviceRequest = pick(profile, ["ci", "name", "lastName", "email", "address", "nationality"])
    }
    back() {
        this.location.back()
    }
}
