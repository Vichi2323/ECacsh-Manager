import { Injectable } from "@angular/core";
import { Subscription2 } from "../../../models2/subscruptions-model2";
import { ApplicationUser2 } from "../../../models2/application-users-model2";
import { ApplicationUserMapper2 } from "../application-user2/application-user-mapper2.service";
import { Environment2 } from "../../../models2/environment-model2";
import { SubscriptionMapper2 } from "../subscription2/subscription-mapper2.service";
import EnvironmentRegionEnumeration2 from "../../enumerations2/environment-region.2enum";
@Injectable({
    providedIn: 'root'
})
export class EnvironmentMapper2 {
    constructor(private userMapper: ApplicationUserMapper2, private subcriptionMapper: SubscriptionMapper2) {

    }

    mapGetAllIEnvironments(entities: any[]) {
        return entities.map((entity) => this.mapGetEnvironment(entity));
    }

    mapGetEnvironment(entity: any): Environment2 {
        return {
            id: entity.id,
            name: entity.name,
            environmentRegion: new EnvironmentRegionEnumeration2(entity.environmentRegion),
            subscriptions: entity.subscriptions.map((item: Subscription2) => this.subcriptionMapper.mapGetSubscription(item)),
            users: entity.users.map((item: ApplicationUser2) => this.userMapper.mapGetApplicationUser(item))
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


}
