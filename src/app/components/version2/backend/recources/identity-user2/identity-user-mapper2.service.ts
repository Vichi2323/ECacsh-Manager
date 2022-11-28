import { Injectable } from "@angular/core";
import { IdentityUser2 } from "../../../models2/identity-user-model2";

@Injectable({
    providedIn: 'root'
})
export class IdentityUserMapper2 {

    mapGetAllIdentityUsers(entities: any[]) {
        return entities.map((entity) => this.mapGetIdentityUser(entity));
    }

    mapGetIdentityUser(entity: any): IdentityUser2 {
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