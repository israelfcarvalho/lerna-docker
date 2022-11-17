import { NextApiRequest, NextApiResponse } from 'next'
import { getCounter } from '../../../services/counter'

export interface User {
    name: string
    age: number
}

export type Users = Array<User>

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const counter = getCounter()

    if (!counter) {
        return res.json({ status: 404, message: 'counter not initiated' })
    }

    res.json(counter)
}
