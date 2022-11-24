declare interface User {
    name: string
    birthDate: string
}

declare interface Users {
    [key: string]: User | undefined
}

declare interface UsersDto {
    users: Users
}
