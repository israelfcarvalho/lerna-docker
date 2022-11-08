import { readFileSync } from 'fs'

interface GetCounterResponse {
    count: number
    created: string
    updated: string
}

export function getCounter(): GetCounterResponse | undefined {
    try {
        const data = readFileSync('.db/counter.json', 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.log({ error })
    }
}
