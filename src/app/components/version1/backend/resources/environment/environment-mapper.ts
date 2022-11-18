import { Injectable } from "@angular/core";
import { Environment } from "../../../models/environment-model";
import EnvironmentRegionEnumeration from "../../enumerations/environment-region.enum";
import { ApplicationUserMapper } from "../application-user/application-user-mapper.service";
import { ApplicationUser } from "../../../models/application-users-model"
import { SubscriptionMapper } from "../subscription/subscription.mapper.service";
import { Subscription } from "../../../models/subsciption-model";
import { ImportEnvironmentRequest } from "../../../models/import-environment-model";
@Injectable({
    providedIn: 'root'
})
export class EnvironmentMapper {
    constructor(private userMapper: ApplicationUserMapper, private subcriptionMapper: SubscriptionMapper) {

    }

    mapGetAllIEnvironments(entities: any[]) {
        return entities.map((entity) => this.mapGetEnvironment(entity));
    }

    mapGetEnvironment(entity: any): Environment {
        return {
            id: entity.id,
            name: entity.name,
            environmentRegion: new EnvironmentRegionEnumeration(entity.environmentRegion),
            subscriptions: entity.subscriptions.map((item: Subscription) => this.subcriptionMapper.mapGetSubscription(item)),
            users: entity.users.map((item: ApplicationUser) => this.userMapper.mapGetApplicationUser(item))
        }
    }

    mapPostEnvironment(entity: any) {
        return {
            name: entity.name,
            enviormntRegion: entity.environmentRegion,
            dbServerId: entity.dbServerId
        }
    }

    mapAddEnvironmentSubscription(entity: any) {
        return {
            numOfLocations: entity.numOfLocations,
            numOfPoses: entity.numOfPoses,
            numOfMobilePoses: entity.numOfMobilePoses,
            expiryDate: entity.expiryDate,
            isWarehousingEnabled: entity.isWarehousingEnabled,
            numberOfWarehouses: entity.numberOfWarehouses,
            isInvoicingEnabled: entity.isInvoicingEnabled,
            isAccountingJournalEnabled: entity.isAccountingJournalEnabled,
            isCustomersEnabled: entity.isDeliveryEnabled,
            isRegularGuestEnabled: entity.isRegularGuestEnabled,
            isDeliveryEnabled: entity.isDeliveryEnabled
        }
    }

    mapImportEnvironment(entity: ImportEnvironmentRequest) {
        return {

        }
    }
}