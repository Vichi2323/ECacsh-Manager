import { Injectable } from "@angular/core";
import { ApplicationUser } from "../../../models/application-users-model";
import { Environment } from "../../../models/environment-model";
import EnvironmentRegionEnumeration from "../../enumerations/environment-region.enum";

@Injectable({
    providedIn: 'root'
})
export class EnvironmentMockService {
    constructor() {

    }
    applicationUsers: ApplicationUser[] = [
        {
            id: "cfaf8331-f15c-40e7-05cf-08da9af9a85d",
            userName: "viktor",
            email: "viktor@test.com"
        },
        {
            id: "9ff6a22c-507d-4020-05d0-08da9af9a85d",
            userName: "chachko",
            email: "email@gmail.com"
        },
        {
            id: "2c327acc-bfb4-4054-05d1-08da9af9a85d",
            userName: "tokarev",
            email: "trj.stefan@gmail.com"
        }

    ]

    getEnvironment(): Environment {
        return {
            environmentRegion: new EnvironmentRegionEnumeration(1),
            id: "ff5d6fcf-6890-4018-af2e-37d859b495e4",
            name: "KantinaDEMO",
            subscriptions: [],
            users: this.applicationUsers
        }
    }

    addApplicationUser(user: ApplicationUser) {
        this.applicationUsers.push(user);
    }

}