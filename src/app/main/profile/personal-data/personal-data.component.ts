import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MessageServiceSeverityEnum } from 'src/app/core/AppConstants';
import { AppComponentBase } from 'src/app/core/components/AppComponentBase';
import { IUser } from 'src/app/core/models/user';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProfilePersonalDataComponent } from 'src/app/shared/profile-personal-data/profile-personal-data.component';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styles: [
    ]
})
export class PersonalDataComponent extends AppComponentBase {
    user: Partial<IUser> = {};
    @ViewChild(ProfilePersonalDataComponent)
    profileComponent!: ProfilePersonalDataComponent;

    constructor(injector: Injector, private profileService: ProfileService) {
        super(injector);
    }

    save() {
        this.user = Object.assign(this.user, this.profileComponent.getUser())
        this.profileService.update(this.user as IUser)
            .subscribe(
                data => {
                    this.message.add({ severity: MessageServiceSeverityEnum.SUCCESS, summary: 'Perfil actualizado' })
                })
    }
}
