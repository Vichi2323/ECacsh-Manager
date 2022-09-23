import { Injectable } from "@angular/core";
import { IdentityUser } from "../../../models/identity-user-model";

@Injectable({
    providedIn: 'root'
})
export class IdentityUserMapper {

    mapGetAllIdentityUsers(entities: any[]) {
        return entities.map((entity) => this.mapGetIdentityUser(entity));
    }

    mapGetIdentityUser(entity: any): IdentityUser {
        return {
            id: entity.id,
            email: entity.email,
            isActive: entity.isActive,
            joinDate: entity.joinDate,
            phoneNumber: entity.phoneNumber,
            userName: entity.userName
        }
    }

    mapPostIdentityUser(entity: any) {
        return {
            email: entity.email,
            userName: entity.userName,
            phoneNumber: entity.phoneNumber,
            password: entity.password,
            confirmPassword: entity.confirmPassword
        }
    }
}