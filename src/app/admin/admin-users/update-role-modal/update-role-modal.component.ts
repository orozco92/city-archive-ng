import { KeyValue } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Injector,
    Input,
    Output,
} from '@angular/core';
import { ModalComponentBase } from 'src/app/core/components/ModalComponentBase';
import { RoleEnum, RoleHelper } from 'src/app/core/helpers/RoleHelper';
import { IUser } from 'src/app/core/models/user';

@Component({
    selector: 'app-update-role-modal',
    templateUrl: './update-role-modal.component.html',
})
export class UpdateRoleModalComponent extends ModalComponentBase {
    override data!: IUser;
    roleList: KeyValue<string, string>[] = [];
    roleHelper: RoleHelper;
    @Input() selectedRole = '';
    @Output() updateEvent = new EventEmitter<IUser>();

    constructor(injector: Injector) {
        super(injector);
        this.roleHelper = new RoleHelper();
        Object.values(RoleEnum).forEach((item) => {
            this.roleList.push({
                key: item,
                value: this.roleHelper.getRoleTranslation(item),
            });
        });
    }

    updateRole() {
        if (this.data) {
            this.data.role = this.selectedRole;
            this.updateEvent.emit(this.data);
            this.visible = false;
        }
    }
}
