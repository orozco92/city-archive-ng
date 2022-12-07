import { Component, Injector } from '@angular/core';
import { DataListHelper } from '../helpers/DataListHelper';
import { AppComponentBase } from './AppComponentBase';

@Component({
    template: '',
})
export abstract class ModalComponentBase extends AppComponentBase {
    visible = false;
    modal = true;
    data: unknown;

    constructor(injector: Injector) {
        super(injector);
    }

    openDialog(data?: unknown) {
        this.data = data;
        this.visible = true;
    }
}
