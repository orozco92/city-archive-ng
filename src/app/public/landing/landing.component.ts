import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestroyComponent } from 'src/app/core/components/DestroyComponent';
import { IInformativeService } from 'src/app/core/models/informative-service';
import { InformativeServiceService } from 'src/app/core/services/informative-service.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styles: [`
        #hero{
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
            height:700px;
            overflow:hidden;
        }

        .pricing-card:hover{
            border:2px solid var(--cyan-200) !important;
        }

        @media screen and (min-width: 768px) {
            #hero{
                -webkit-clip-path: ellipse(150% 87% at 93% 13%);
                clip-path: ellipse(150% 87% at 93% 13%);
                height: 530px;
            }
        }

        @media screen and (min-width: 1300px){
            #hero > img {
                position: absolute;
                transform:scale(1.2);
                top:15%;
            }

        #hero > div > p {
                max-width: 450px;
            }
        }

        @media screen and (max-width: 1300px){
            #hero {
                height: 600px;
            }

        #hero > img {
            position:static;
            transform: scale(1);
            margin-left: auto;
        }

        #hero > div {
            width: 100%;
        }

        #hero > div > p {
                width: 100%;
                max-width: 100%;
            }
        }
    `]
})

export class LandingComponent extends DestroyComponent implements OnInit {
    services: IInformativeService[] = []
    icons: string[] = [
        'pi-users text-yellow-700',
        'pi-palette text-cyan-700',
        'pi-map text-indigo-700',
        'pi-id-card text-bluegray-700',
        'pi-star text-orange-700',
        'pi-moon text-pink-700',
        'pi-shopping-cart text-teal-700',
        'pi-globe text-blue-700',
        'pi-eye text-purple-700'
    ];
    background: string[] = [
        'bg-yellow-200',
        'bg-cyan-200',
        'bg-indigo-200',
        'bg-bluegray-200',
        'bg-orange-200',
        'bg-pink-200',
        'bg-teal-200',
        'bg-blue-200',
        'bg-purple-200'
    ];
    colors: string[] = [
        'border-yellow-50 surface-overlay border-3',
        'border-cyan-50 surface-overlay border-3',
        'border-indigo-50 surface-overlay border-3',
        'border-bluegray-50 surface-overlay border-3',
        'border-orange-50 surface-overlay border-3',
        'border-pink-50 surface-overlay border-3',
        'border-teal-50 surface-overlay border-3',
        'border-blue-50 surface-overlay border-3',
        'border-purple-50 surface-overlay border-3'
    ];

    activities: any[] = [
        {
            title: 'Procesos técnicos',
            description: `Consiste en el procesamiento de los fondos y colecciones utilizando las Normas Internacionales y la
            recepción e ingreso de los fondos y colecciones.`,
            image: 'assets/demo/images/landing/mockup.svg'
        },
        {
            title: 'Conservación y restauración',
            description: `Se encarga de la conservación del patrimonio documental. Su función es evitar  o detener el deterioro progresivo de las
            fuentes y hacer cumplir la legislación vigente`,
            image: 'assets/demo/images/landing/mockup-desktop.svg'
        }
    ]
    constructor(public layoutService: LayoutService, public router: Router, private informativeServiceService: InformativeServiceService) {
        super();
    }
    ngOnInit(): void {
        const sub = this.informativeServiceService.list({ limit: 9, skip: 0 })
            .subscribe(data => {
                this.services = data.rows;
            });
        this.subscriptions.push(sub);
    }
}
