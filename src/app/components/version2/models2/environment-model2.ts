import EnvironmentRegionEnumeration2 from "../backend/enumerations2/environment-region.2enum"

import { ApplicationUser2 } from "./application-users-model2"
import { DatabaseServer2 } from "./database-server-model2"
import { Subscription2 } from "./subscruptions-model2"

export interface Environment2 {
    id?: string
    name?: string
    environmentRegion?: EnvironmentRegionEnumeration2
    subscriptions?: Subscription2[]
    users?: ApplicationUser2[]
    dbServer?: DatabaseServer2
    | null
}


export interface CreateEnvironmentRequest2 {
    name?: string
    environmentRegion?: EnvironmentRegionEnumeration2
    dbServerId?: string
}