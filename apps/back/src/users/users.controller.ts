import { Body, Controller, Get, Param, Post, Redirect, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

interface User {
    id: number
    name: string
    age: number
}

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
    @Redirect('http://localhost:4000/users', 302)
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
            res.status(404).send({ message: "User don't exists" })
            return
        }

        res.json(user)
    }

    @Post()
    add(@Res() response: Response, @Body() body: Partial<Omit<User, 'id'>>) {
        const errors: Array<string> = []
        const oldUsers = this.users

        console.log({ body })

        if (!body.age) {
            errors.push('Age is required and needs to be grater than 0!')
        }

        if (!body.name || body.name.length < 3) {
            errors.push('Name is required and needs have 3 caracters or more!')
        }

        if (errors.length) {
            response.status(400).json(errors)
            return
        }

        try {
            const newUsers = oldUsers.concat({ id: this._nextId, name: body.name || '', age: body.age || 0 })

            writeFileSync(join(process.cwd(), 'src/.db/users.json'), JSON.stringify(newUsers), { encoding: 'utf8' })
            this._upToDate = false
            response.status(204).send()
        } catch (error) {
            response.status(400).send()
        }
    }
}
