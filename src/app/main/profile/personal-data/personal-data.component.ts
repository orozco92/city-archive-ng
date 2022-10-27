import { Component, Injector, OnInit } from '@angular/core';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { IUser } from 'src/app/core/models/user';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styles: [
    ]
})
export class PersonalDataComponent extends AppComponentBase {
    user: Partial<IUser> = {};
    constructor(injector: Injector, private profileService: ProfileService) {
        super(injector);
    }

    ngOnInit(): void {
        const user = this.profileService.getUser();
        if (user) {
            this.user = user;
        }
    }
    save() {
        this.profileService.update(this.user as IUser)
            .subscribe(
                data => {
                    this.message.add({ severity: MessageServiceSeverityEnum.SUCCESS, summary: 'Perfil actualizado' })
                })
    }
}
