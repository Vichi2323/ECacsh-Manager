import EnvironmentRegionEnumeration from "../backend/enumerations/environment-region.enum"

export interface ImportEnvironmentRequest {
    userName?: string
    email?: string
    phoneNumber?: string
    password?: string
    confirmPassword?: string
    environmentName?: string
    dbServerId?: string
    numOfLocations?: number
    numOfPoses?: number
    numOfMobilePoses?: number
    expiryDate?: string
    isWarehousingEnabled?: boolean
    numberOfWarehouses?: number
    isInvoicingEnabled?: boolean
    isAccountingJournalEnabled?: boolean
    isCustomersEnabled?: boolean
    isRegularGuestEnabled?: boolean
    isDeliveryEnabled?: boolean
    environmentRegion?: EnvironmentRegionEnumeration



}



