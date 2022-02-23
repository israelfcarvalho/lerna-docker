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
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { BadRequestException } from 'src/errors/exceptions'
import { CreateUserDto, User } from './users.dto'

function fetchUsers() {
    return JSON.parse(readFileSync(join(process.cwd(), 'src/.db/users.json'), { encoding: 'utf8' }))
}

@Controller({ path: 'users' /*, host: '*'*/ })
export class UsersController {
    private _upToDate = false
    private _nextId = 0
    private _users: Array<User> = []

    constructor() {
        this.initiate()
    }

    private initiate() {
        const users: Array<User> = fetchUsers()
        const lastUserIndex = users.length ? users.length - 1 : 0

        const nextId = (users[lastUserIndex].id || 0) + 1

        this._nextId = nextId
        this.users = users
        this._upToDate = true
    }

    get users() {
        if (!this._upToDate) {
            this.users = fetchUsers()
        }

        return this._users
    }

    set users(data: Array<User>) {
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
        const user = this.users.find(user => user.id == id)

        if (!user) {
            throw new HttpException("User dont't exists", HttpStatus.NOT_FOUND)
        }

        return user
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    add(@Body() body: Partial<CreateUserDto>) {
        const errors: Array<string> = []
        const oldUsers = this.users

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
            const newUsers = oldUsers.concat({
                id: this._nextId,
                name: body.name || '',
                birthDate: body.birthDate || '',
            })

            writeFileSync(join(process.cwd(), 'src/.db/users.json'), JSON.stringify(newUsers), { encoding: 'utf8' })
            this._upToDate = false
            return this._nextId
        } catch (error) {
            throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
