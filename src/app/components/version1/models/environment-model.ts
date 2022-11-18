import EnvironmentRegionEnumeration from "../backend/enumerations/environment-region.enum"
import { ApplicationUser } from "./application-users-model"
import { DatabaseServer } from "./database-server-model"
import { Subscription } from "./subsciption-model"

export interface Environment {
    id?: string
    name?: string
    environmentRegion?: EnvironmentRegionEnumeration
    subscriptions?: Subscription[]
    users?: ApplicationUser[]
    dbServer?: DatabaseServer | null
}


export interface CreateEnvironmentRequest {
    name?: string
    environmentRegion?: EnvironmentRegionEnumeration
    dbServerId?: string
}