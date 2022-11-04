export interface Subscription {
    id?: string
    environmentId?: string
    numOfLocations?: number
    numOfPoses?: number
    numOfMobilePoses?: number
    startDate?: string
    expiryDate?: string
    cancelDate?: boolean
    active?: boolean
    isWarehousingEnabled?: boolean
    numberOfWarehouses?: number
    isInvoicingEnabled?: boolean
    isAccountingJournalEnabled?: boolean
    isCustomersEnabled?: boolean
    isRegularGuestEnabled?: boolean
    isDeliveryEnabled?: boolean
}

export interface CreateSubscription {
    numOfLocations: number
    numOfPoses: number
    numOfMobilePoses: number
    expiryDate: string
    isWarehousingEnabled: boolean
    numberOfWarehouses: number
    isInvoicingEnabled: boolean
    isAccountingJournalEnabled: boolean
    isCustomersEnabled: boolean
    isRegularGuestEnabled: boolean
    isDeliveryEnabled: boolean

}