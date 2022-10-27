import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    declarations: [
        TestingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: TestingComponent
        }]),
        CardModule,
        ButtonModule,
        BlockUIModule,
        ProgressSpinnerModule
    ]
})
export class TestingModule { }
