import { Component, EventEmitter, Injector, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';

@Component({
    selector: 'app-admin-informative-service-edit',
    templateUrl: './admin-informative-service-edit.component.html'
})
export class AdminInformativeServiceEditComponent extends AppComponentBase {
    informativeService!: IInformativeService;
    @ViewChild(Dialog) dialog!: Dialog;
    @Output() saveEvent = new EventEmitter<IInformativeService>();
    visible = false;

    constructor(injector: Injector, private informativeServiceService: InformativeServiceService) {
        super(injector);
    }

    openDialog(service: IInformativeService) {
        this.informativeService = service;
        this.visible = true;
    }
    updateService() {
        this.informativeServiceService.update(this.informativeService.id, this.informativeService)
            .subscribe({
                next: (data) => {
                    this.saveEvent.emit(data);
                    this.visible = false;
                    this.message.add({ summary: 'Servicio actualizado', severity: MessageServiceSeverityEnum.SUCCESS });
                }, error: () => {
                    this.saveEvent.emit(undefined);
                    this.visible = false;
                    this.message.add({ summary: 'Ocurrio un error al actualizar el servicio', severity: MessageServiceSeverityEnum.ERROR });

                }
            })
    }
}
