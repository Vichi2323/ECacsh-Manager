import { Environment } from "./environment-model"

export interface DatabaseServer {
    id?: string
    name?: string
    connectionString?: string
    isDefault?: boolean
    maxEnvironments?: number
    numberOfEnvironments?: number
    environments?: Environment[]

}

export interface CreateDatabaseServerRequest {
    name?: string
    connectionString?: string
    maxEnvironments?: number
    numberOfEnvironments?: number
}