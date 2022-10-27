import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponentBase } from 'src/app/core/components/ListComponentBase';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ListComponentBase {

    activeTab: string | null = null;
    constructor(injector: Injector, private route: ActivatedRoute) {
        super(injector);
        const tab = route.snapshot.queryParamMap.get('tab');
        switch (tab) {
            case 'personal-data':
                this.activeTab = 'personal-data';
                break;
            case 'my-services':
                this.activeTab = 'my-services';
                break;
            default:
                this.activeTab = 'personal-data';
        }
    }


    ngOnInit(): void {
    }

}
