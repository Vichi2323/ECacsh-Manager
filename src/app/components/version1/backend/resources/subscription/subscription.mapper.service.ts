import { Injectable } from "@angular/core";
import { Subscription } from "../../../models/subsciption-model";

@Injectable({
    providedIn: 'root'
})

export class SubscriptionMapper {

    mapGetAllSubscriptions(entities: any[]) {
        return entities.map((entity) => this.mapGetSubscription(entity))
    }

    mapGetSubscription(entity: any): Subscription {
        return {
            id: entity.id,
            environmentId: entity.environmentId,
            numOfLocations: entity.numOfLocations,
            numOfPoses: entity.numOfPoses,
            numOfMobilePoses: entity.numOfMobilePoses,
            startDate: entity.startDate,
            expiryDate: entity.expiryDate,
            cancelDate: entity.cancelDate,
            active: entity.active,
            isWarehousingEnabled: entity.isWarehousingEnabled,
            numberOfWarehouses: entity.numberOfWarehouses,
            isInvoicingEnabled: entity.isInvoicingEnabled,
            isAccountingJournalEnabled: entity.isAccountingJournalEnabled,
            isCustomersEnabled: entity.isCustomersEnabled,
            isRegularGuestEnabled: entity.isRegularGuestEnabled,
            isDeliveryEnabled: entity.isDeliveryEnabled
        }
    }

    mapPostSubscription(entity: any) {

        return {
            numOfLocations: entity.numOfLocations,
            numOfPoses: entity.numOfPoses,
            numOfMobilePoses: entity.numOfMobilePoses,
            expiryDate: entity.expiryDate,
            isWarehousingEnabled: entity.isWarehousingEnabled,
            numberOfWarehouses: entity.numberOfWarehouses,
            isInvoicingEnabled: entity.isInvoicingEnabled,
            isAccountingJournalEnabled: entity.isAccountingJournalEnabled,
            isCustomersEnabled: entity.isCustomersEnabled,
            isRegularGuestEnabled: entity.isRegularGuestEnabled,
            isDeliveryEnabled: entity.isDeliveryEnabled


        }
    }


}
