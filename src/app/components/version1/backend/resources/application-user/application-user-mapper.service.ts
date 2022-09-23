import { Injectable } from "@angular/core";
import { ApplicationUser } from "../../../models/application-users-model"

@Injectable({
    providedIn: 'root'
})

export class ApplicationUserMapper {

    mapGetAllApplicationUsers(entities: any[]) {
        return entities.map((entity) => this.mapGetApplicationUser(entity))
    }

    mapGetApplicationUser(entity: any): ApplicationUser {
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