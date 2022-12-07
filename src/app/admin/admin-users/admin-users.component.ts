import { Component, Injector, ViewChild } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Table } from 'primeng/table';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { CrudComponentBase } from 'src/app/core/components/CrudComponentBase';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';
import { RoleHelper } from 'src/app/core/helpers/RoleHelper';
import { IApiListQuery } from 'src/app/core/interfaces/IApiListResult';
import { IUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { Md5 } from 'ts-md5';
import { UpdateRoleModalComponent } from './update-role-modal/update-role-modal.component';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
})
export class AdminUsersComponent extends CrudComponentBase {
    selectedUser: IUser | null = null;
    userMenu: MenuItem[] = [];
    @ViewChild('menu') menu!: Menu;
    roleHelper: RoleHelper;
    showRoleDialog = false;
    showPasswordDialog = false;
    @ViewChild('roleModal') roleModal!: UpdateRoleModalComponent;
    @ViewChild('passwordModal') passwordModal!: UpdateRoleModalComponent;
    @ViewChild(Table) table!: Table;

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
        this.userMenu = [
            {
                label: 'Actualizar rol',
                command: () => {
                    this.roleModal.openDialog(this.selectedUser);
                },
            },
            {
                label: 'Cambiar contraseña',
                command: () => {
                    this.passwordModal.openDialog(this.selectedUser);
                },
            },
            {
                label: 'Eliminar',
                command: () => {
                    super.confirmDelete(this.selectedUser);
                },
            },
        ];
        this.roleHelper = new RoleHelper();
    }

    loadData(event?: LazyLoadEvent) {
        this.dataListHelper.loading = true;
        let order = 'created_at:asc';
        if (event?.sortField) {
            order =
                event?.sortField +
                ':' +
                (event?.sortOrder == -1 ? 'ASC' : 'DESC');
        }

        const q: IApiListQuery = {
            skip: event?.first ?? 0,
            limit: event?.rows ?? this.dataListHelper.defaultRowsCountPerPage,
            order,
        };
        if (this.dataListHelper.searchText) {
            q.search = this.dataListHelper.searchText;
        }
        this.userService.list(q).subscribe((data) => {
            this.dataListHelper.rows = data.rows;
            this.dataListHelper.totalRowsCount = data.count;
            this.dataListHelper.loading = false;
        });
    }

    openMenu(event: any, user: IUser) {
        this.selectedUser = user;
        this.menu.toggle(event);
    }

    hideMenu() {
        this.selectedUser = null;
    }

    updateRole(user: IUser) {
        this.updateUser({
            id: user.id,
            role: user.role,
        } as IUser);
    }

    updatePassword(user: IUser) {
        this.updateUser({
            id: user.id,
            password: Md5.hashStr(user.password),
        } as IUser);
    }

    updateUser(user: IUser) {
        this.userService.update(user?.id, user).subscribe({
            next: () => {
                this.message.add({
                    summary: 'Rol actualizado',
                    severity: MessageServiceSeverityEnum.SUCCESS,
                });
                this.table.reset();
            },
            error: () => {
                this.message.add({
                    summary: 'Ocurrio un error al actualizar el rol',
                    severity: MessageServiceSeverityEnum.ERROR,
                });
                this.table.reset();
            },
        });
    }

    deleteItem(item: any) {
        this.userService.delete(item.id).subscribe((data) => {
            this.message.add({
                summary: 'Usuario eliminado',
                severity: MessageServiceSeverityEnum.SUCCESS,
            });
            this.table.reset();
        });
    }

    editItem(item: unknown): void {
        throw new Error('Method not implemented.');
    }
}
