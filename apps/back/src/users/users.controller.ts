import { Body, Controller, Get, HttpStatus, Param, Post, Redirect, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { CreateUserDto, User } from './users.dto'

function fetchUsers() {
    return JSON.parse(readFileSync(join(process.cwd(), 'src/.db/users.json'), { encoding: 'utf8' }))
}

@Controller({ path: 'users', host: 'localhost' })
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
    findAll(@Req() request: Request) {
        console.log({ query: request.query })

        return this.users
    }

    @Get(':id')
    findById(@Param('id') id, @Res() res: Response) {
        const user = this.users.find(user => user.id == id)

        if (!user) {
            res.status(HttpStatus.NOT_FOUND).send({ message: "User don't exists" })
            return
        }

        res.json(user)
    }

    @Post()
    add(@Res() response: Response, @Body() body: Partial<CreateUserDto>) {
        const errors: Array<string> = []
        const oldUsers = this.users

        console.log({ body })

        if (!body.birthDate) {
            errors.push('birthDate is required and needs to be grater than 0!')
        }

        if (!body.name || body.name.length < 3) {
            errors.push('name is required and needs have 3 caracters or more!')
        }

        if (errors.length) {
            response.status(HttpStatus.BAD_REQUEST).json(errors)
            return
        }

        try {
            const newUsers = oldUsers.concat({
                id: this._nextId,
                name: body.name || '',
                birthDate: body.birthDate || '',
            })

            writeFileSync(join(process.cwd(), 'src/.db/users.json'), JSON.stringify(newUsers), { encoding: 'utf8' })
            this._upToDate = false
            response.status(HttpStatus.CREATED).send()
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
        }
    }
}
