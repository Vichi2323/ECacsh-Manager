export interface ApplicationUser2 {
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

export interface CreateApplicationUserRequest2 {
    email?: string,
    userName?: string,
    phoneNumber?: string,
    identityId?: string
}