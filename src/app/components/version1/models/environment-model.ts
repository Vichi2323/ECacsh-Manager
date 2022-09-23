import { Subscription } from "./subsciption-model"

export interface Environment {
    id?: string
    name?: string
    environmentRegion?: number
    subscriptions?: Subscription[]

}


export interface CreateEnvironmentRequest {
    name?: string
    environmentRegion?: number
    dbServerId?: string
}