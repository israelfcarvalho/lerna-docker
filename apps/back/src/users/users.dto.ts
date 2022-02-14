export interface User {
    id: number
    name: string
    birthDate: string
}

export class CreateUserDto implements Omit<User, 'id'> {
    name: string
    birthDate: string
}
