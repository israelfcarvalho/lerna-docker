export interface User {
    name: string
    birthDate: string
}

export interface Users {
    [key: string]: User | undefined
}

export interface UsersDto {
    users: Users
}

export class CreateUserDto implements Omit<User, 'id'> {
    name: string
    birthDate: string
}
