import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ICommonProfileData } from 'src/app/core/models/common-profile-data';
import { IUser } from 'src/app/core/models/user';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
    selector: 'app-profile-personal-data',
    templateUrl: './profile-personal-data.component.html',
    styles: [
    ],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class ProfilePersonalDataComponent implements OnInit {

    @Input() loadProfile: boolean = false;
    user: Partial<IUser> = {};

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        if (this.loadProfile) {
            this.loadFromProfile();
        }
    }

    getUser(): ICommonProfileData {
        return this.user as ICommonProfileData;
    }

    loadFromProfile() {
        const user = this.profileService.getUser();
        if (user) {
            this.user = user;
        }
    }

}
