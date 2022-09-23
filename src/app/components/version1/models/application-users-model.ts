export interface ApplicationUser {
    id?: string
    userName?: string
    email?: string
    userRoleId?: string
    userRole?: any
    userEnviorments?: string[]
    active?: boolean
    deleted?: boolean
    createdAt?: string
}

export interface CreateApplicationUserRequest {
    email?: string,
    userName?: string,
    phoneNumber?: string,
    identityId?: string
}