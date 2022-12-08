import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { Archive } from 'src/app/core/models/city-file';
import { ArchiveService } from 'src/app/core/services/archive.service';
import { NewsService } from 'src/app/core/services/news.service';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './admin-news-upsert.component.html',
})
export class AdminNewsUpsertComponent
    extends AppComponentBase
    implements OnInit
{
    files: any = [];
    news: any = {};
    apiUrl = environment.apiUrl;

    constructor(
        injector: Injector,
        private location: Location,
        private route: ActivatedRoute,
        private newsService: NewsService,
        private archiveService: ArchiveService
    ) {
        super(injector);
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.newsService.get(id).subscribe((data) => {
                this.news = data;
            });
        }
    }

    saveChanges() {
        this.news.CityFiles = this.files;
        const apiCall = !!this.news.id
            ? this.newsService.update(this.news.id, this.news)
            : this.newsService.create(this.news);
        apiCall.subscribe({
            next: (data) => {
                this.message.add({
                    summary:
                        'Noticia ' +
                        (!!this.news.id ? 'actualizada' : 'creada'),
                    severity: MessageServiceSeverityEnum.SUCCESS,
                });
                this.location.back();
            },
            error: () => {
                this.message.add({
                    summary:
                        'Ocurrio un error al ' +
                        (!!this.news.id ? 'actualizar' : 'crear') +
                        ' la noticia',
                    severity: MessageServiceSeverityEnum.ERROR,
                });
            },
        });
    }

    cancelChanges() {
        this.location.back();
    }

    uploadFiles(files: File[]) {
        this.newsService.upload(this.news.id, files).subscribe({
            next: (data) => {
                this.message.add({
                    summary: 'Archivos adjuntados',
                    severity: MessageServiceSeverityEnum.SUCCESS,
                });
                this.ngOnInit();
            },
            error: () => {
                this.message.add({
                    summary: 'Ocurrio un error al subir los archivos',
                    severity: MessageServiceSeverityEnum.ERROR,
                });
                this.ngOnInit();
            },
        });
    }

    deleteFile(file: Archive) {
        this.archiveService.delete(file.id).subscribe({
            next: (data) => {
                this.message.add({
                    summary: 'Archivos eliminado',
                    severity: MessageServiceSeverityEnum.SUCCESS,
                });
                this.ngOnInit();
            },
            error: () => {
                this.message.add({
                    summary: 'Ocurrio un error al eliminar el archivo',
                    severity: MessageServiceSeverityEnum.ERROR,
                });
                this.ngOnInit();
            },
        });
    }
}
