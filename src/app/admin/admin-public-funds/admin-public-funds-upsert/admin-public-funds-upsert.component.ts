import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { Location } from '@angular/common';
import { PublicFundsService } from 'src/app/core/services/public-funds.service';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { ActivatedRoute } from '@angular/router';
import { ArchiveService } from 'src/app/core/services/archive.service';
import { Archive } from 'src/app/core/models/city-file';

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
        private publicFundsService: PublicFundsService,
        private archiveService: ArchiveService) {
        super(injector);
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.publicFundsService.get(id)
                .subscribe(data => {
                    this.publicFund = data;
                })
        }
    }

    saveChanges() {
        this.publicFund.CityFiles = this.files;
        const apiCall = !!this.publicFund.id
            ? this.publicFundsService.update(this.publicFund.id, this.publicFund)
            : this.publicFundsService.create(this.publicFund)
        apiCall.subscribe({
            next: (data) => {
                this.message.add({ summary: 'Fondo publico ' + (!!this.publicFund.id ? 'actualizado' : 'creado'), severity: MessageServiceSeverityEnum.SUCCESS });
                this.location.back();
            }, error: () => {
                this.message.add({ summary: 'Ocurrio un error al ' + (!!this.publicFund.id ? 'actualizado' : 'creado') + ' el fondo publico', severity: MessageServiceSeverityEnum.ERROR });
            }
        })
    }

    cancelChanges() {
        this.location.back();
    }

    uploadFiles(files: File[]) {
        this.publicFundsService.upload(this.publicFund.id, files)
            .subscribe({
                next: (data) => {
                    this.message.add({ summary: 'Archivos adjuntados', severity: MessageServiceSeverityEnum.SUCCESS });
                    this.ngOnInit();
                }, error: () => {
                    this.message.add({ summary: 'Ocurrio un error al subir los archivos', severity: MessageServiceSeverityEnum.ERROR });
                    this.ngOnInit();
                }
            });
    }

    deleteFile(file: Archive) {
        this.archiveService.delete(file.id)
            .subscribe({
                next: (data) => {
                    this.message.add({ summary: 'Archivos eliminado', severity: MessageServiceSeverityEnum.SUCCESS });
                    this.ngOnInit();
                }, error: () => {
                    this.message.add({ summary: 'Ocurrio un error al eliminar el archivo', severity: MessageServiceSeverityEnum.ERROR });
                    this.ngOnInit();
                }
            });
    }
}
