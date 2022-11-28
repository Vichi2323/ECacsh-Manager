import { Injectable } from "@angular/core";
import { ApplicationUser2 } from "../../../models2/application-users-model2";


@Injectable({

    providedIn: 'root'
})

export class ApplicationUserMapper2 {
    mapGetAllApplicationUsers(entities: any[]) {
        return entities.map((entity) => this.mapGetApplicationUser(entity))
    }
    mapGetApplicationUser(entity: any): ApplicationUser2 {
        return {
            id: entity.id,
            userName: entity.userName,
            email: entity.email,
            userRoleId: entity.userRoleId,
            userRole: entity.userRoleId,
            userEnviorments: entity.userEnviorments,
            active: entity.active,
            deleted: entity.deleted,
            createdAt: entity.createdAt
        }
    }

    mapPostApplicationUser(entity: any) {
        return {
            email: entity.email,
            userName: entity.userName,
            phoneNumber: entity.phoneNumber,
            identityUserId: entity.identityUserId
        }
    }

}