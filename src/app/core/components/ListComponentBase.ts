import { Injector } from "@angular/core";
import { DataListHelper } from "../helpers/DataListHelper";
import { AppComponentBase } from "./AppComponentBase";

export abstract class ListComponentBase extends AppComponentBase {

    dataListHelper: DataListHelper;

    constructor(injector: Injector) {
        super(injector)
        this.dataListHelper = new DataListHelper();
    }

}
