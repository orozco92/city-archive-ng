import { Component, OnInit } from '@angular/core';

interface IActivity {
    title: string,
    description: string,
    icon: string
}
@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    icons: string[] = [
        'pi-desktop',
        'pi-lock',
        'pi-check-circle',
        'pi-globe',
        'pi-github',
        'pi-shield'
    ]
    activities: IActivity[] = [
        {
            title: 'Organización',
            description: 'Organizar la documentación y las colecciones que constituyen el fondo documental del territorio holguinero',
            icon: 'pi-inbox'
        },
        {
            title: 'Diseño',
            description: 'Diseñar y ejecutar planes para la preservación, conservación y restauración del patrimonio documental',
            icon: 'pi-file-edit',
        },
        {
            title: 'Atención a la población',
            description: 'Atención a los usuarios: investigadores, funcionarios del territorio, estudiantes y particulares',
            icon: 'pi-users'
        },
        {
            title: 'Investigación y publicación',
            description: `Investigar y dar a conocer la historia del territorio holguinero, lo cual implica la publicación de las
            investigaciones realizadas, la difusión del fondo documental y la asesoría a investigadores`,
            icon: 'pi-book'
        },
        {
            title: 'Asesoria',
            description: 'Realizar actividades de extensión e intercambio con el fin de ofrecer asesoría en el área archivística',
            icon: 'pi-comments'
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
