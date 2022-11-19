import {
    Body,
    Controller,
    Get,
    HostParam,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Query,
    Redirect,
} from '@nestjs/common'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { BadRequestException } from 'src/errors/exceptions'
import { CreateUserDto, User, Users, UsersDto } from './users.dto'

const dbDir = resolve(process.cwd(), 'src/.db')
const dbFile = 'users.json'
const dbPath = resolve(dbDir, dbFile)

function writeUser(user: User, users: Users) {
    const usersDto: UsersDto = {
        users: {
            ...users,
            [user.name]: user,
        },
    }

    writeFileSync(dbPath, JSON.stringify(usersDto))
    return usersDto.users
}

function readUsers(): UsersDto {
    return JSON.parse(readFileSync(dbPath, { encoding: 'utf8' }))
}

@Controller({ path: 'users' /*, host: '*'*/ })
export class UsersController {
    private _upToDate = false
    private _users: Users

    constructor() {
        this.initiate()
    }

    private initiate() {
        if (!existsSync(dbPath)) {
            mkdirSync(dbDir, { recursive: true })
            this.users = writeUser({} as User, {})
        } else {
            this.users = readUsers().users
        }

        this._upToDate = true
    }

    get users() {
        if (!this._upToDate) {
            const usersDto = readUsers()

            this.users = usersDto.users
        }

        return this._users
    }

    set users(data: Users) {
        this._users = data
    }

    @Get('all')
    @Redirect('http://localhost:4000/users', HttpStatus.FOUND)
    all() {
        return
    }

    @Get()
    findAll(@Query() query, @HostParam() host) {
        console.log({ query, host })

        return this.users
    }

    @Get(':id')
    findById(@Param('id') id) {
        const user = this.users[id]

        if (!user) {
            throw new HttpException(`User dont't exists`, HttpStatus.NOT_FOUND)
        }

        return user
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    add(@Body() body: Partial<CreateUserDto>) {
        const errors: Array<string> = []

        if (!body.birthDate) {
            errors.push('birthDate is required and needs to be grater than 0!')
        }

        if (!body.name || body.name.length < 3) {
            errors.push('name is required and needs have 3 caracters or more!')
        }

        if (errors.length) {
            throw new BadRequestException(errors)
        }

        try {
            const user = {
                name: body.name,
                birthDate: body.birthDate,
            }

            this.users = writeUser(user, this.users)
            return this.users
        } catch (error) {
            throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
