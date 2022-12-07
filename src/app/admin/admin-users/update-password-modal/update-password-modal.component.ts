import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { ModalComponentBase } from 'src/app/core/components/ModalComponentBase';
import { IUser } from 'src/app/core/models/user';

@Component({
    selector: 'app-update-password-modal',
    templateUrl: './update-password-modal.component.html',
})
export class UpdatePasswordModalComponent extends ModalComponentBase {
    override data!: IUser;
    password = '';
    repeatPassword = '';
    @Output() updateEvent = new EventEmitter<IUser>();

    constructor(injector: Injector) {
        super(injector);
    }

    updatePassword() {
        if (this.data) {
            this.data.password = this.password;
            this.updateEvent.emit(this.data);
            this.visible = false;
        }
    }
}
