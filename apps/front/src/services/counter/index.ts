import { readFileSync } from 'fs'
import { isError } from '../error/helpers'
import { dataFilePath, updateCounter } from './helpers'

const appContext = process.env.NODE_ENV

export function getCounter() {
    try {
        const data = readFileSync(dataFilePath, 'utf-8')
        const parsedData: Counter = JSON.parse(data)

        return updateCounter(parsedData)
    } catch (error) {
        console.log({ error })
        if (appContext === 'production' && isError(error) && error.code === 'ENOENT') {
            return updateCounter()
        }
    }
}
