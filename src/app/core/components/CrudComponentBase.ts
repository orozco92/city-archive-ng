import { Injector } from "@angular/core";
import { ListComponentBase } from "./ListComponentBase";

export abstract class CrudComponentBase extends ListComponentBase {

    deleteHeader = 'Emilinar elemento'
    deleteMessage = 'Esta seguro que desea eliminar?'

    editing = false;

    constructor(injector: Injector) {
        super(injector);
    }

    confirmDelete(item: any) {
        this.confirmationService.confirm({
            message: this.deleteMessage,
            header: this.deleteHeader,
            accept: () => this.deleteItem(item)
        });
    }

    abstract deleteItem(item: unknown): void;

    abstract editItem(item: unknown): void;
}
