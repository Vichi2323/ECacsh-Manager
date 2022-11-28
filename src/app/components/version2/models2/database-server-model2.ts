import { Environment2 } from "./environment-model2"

export interface DatabaseServer2 {
    id?: string
    name?: string
    connectionString?: string
    isDefault?: boolean
    maxEnvironments?: number
    numberOfEnvironments?: number
    environments?: Environment2[]

}

export interface CreateDatabaseServerRequest2 {
    name?: string
    connectionString?: string
    maxEnvironments?: number
    numberOfEnvironments?: number
}