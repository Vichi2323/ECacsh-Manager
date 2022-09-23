export interface IdentityUser {
    id?: string
    email?: string
    userName?: string
    phoneNumber?: string
    isActive?: boolean
    joinDate?: string

}

export interface CreateIdentityUserRequest {
    email?: string,
    userName?: string,
    phoneNumber?: string,
    password?: string,
    confirmPassword?: string
}

