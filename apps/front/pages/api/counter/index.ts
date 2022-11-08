import { readFileSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export interface User {
    name: string
    age: number
}

export type Users = Array<User>

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = readFileSync(path.resolve(__dirname, '.db/users.json'))

    res.json(users)
}
