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
        console.log(123123);

        this.confirmationService.confirm({
            message: this.deleteMessage,
            header: this.deleteHeader,
            accept: () => this.deleteItem(item)
        });
    }

    abstract deleteItem(item: any): void;

    abstract editItem(item: any): void;
}
