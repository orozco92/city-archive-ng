import { Location } from '@angular/common';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { ICommonProfileData } from 'src/app/core/models/common-profile-data';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { IServiceRequest } from 'src/app/core/models/service-request';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { ServiceRequestService } from 'src/app/core/services/service-requests.service';
import { ProfilePersonalDataComponent } from 'src/app/shared/profile-personal-data/profile-personal-data.component';

@Component({
    selector: 'app-standard-service',
    templateUrl: './standard-service.component.html',
    styleUrls: ['./standard-service.component.scss'],
})
export class StandardServiceComponent
    extends AppComponentBase
    implements OnInit
{
    service: Partial<IInformativeService> = {};
    serviceRequest: Partial<IServiceRequest> = {};
    @ViewChild(ProfilePersonalDataComponent)
    profileComponent!: ProfilePersonalDataComponent;

    constructor(
        injector: Injector,
        private serviceRequestService: ServiceRequestService,
        private informativeService: InformativeServiceService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        super(injector);
    }

    ngOnInit(): void {
        const serviceId = this.route.snapshot.paramMap.get('serviceId') ?? 0;
        const id = this.route.snapshot.paramMap.get('id') ?? 0;
        const sub = this.informativeService
            .get(serviceId)
            .pipe(
                switchMap((data) => {
                    this.service = data;
                    return !!id
                        ? this.serviceRequestService.get(id)
                        : of(false);
                })
            )
            .subscribe((data) => {
                this.profileComponent.setUser(data as ICommonProfileData);
                this.serviceRequest.description = (
                    data as IServiceRequest
                ).description;
            });
        this.subscriptions.push(sub);
    }

    save(): void {
        const summary = 'Solicitud de servicio';
        Object.assign(this.serviceRequest, this.profileComponent.getUser());
        this.serviceRequest.InformativeServiceId = this.service.id;
        const sub = this.serviceRequestService
            .create(this.serviceRequest as IServiceRequest)
            .subscribe({
                next: (data) => {
                    if (data) {
                        this.message.add({
                            summary: summary,
                            detail: 'Solicitus de servicio creada con éxito',
                            severity: MessageServiceSeverityEnum.SUCCESS,
                        });
                        this.back();
                    } else {
                        this.message.add({
                            summary: summary,
                            detail: 'Ha ocurrido un error al crear la solicitud',
                            severity: MessageServiceSeverityEnum.ERROR,
                        });
                    }
                },
                error: () => {
                    this.message.add({
                        summary: summary,
                        detail: 'Ha ocurrido un error al crear la solicitud',
                        severity: MessageServiceSeverityEnum.ERROR,
                    });
                },
            });
        this.subscriptions.push(sub);
    }

    importProfileData() {
        this.profileComponent.loadFromProfile();
    }

    back() {
        this.location.back();
    }
}
