import { writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'
import { cwd } from 'process'

const initialCounter: Counter = {
    count: 0,
    created: new Date().toLocaleString(),
    updated: new Date().toLocaleString(),
}

const counterDir = path.resolve(cwd(), '.db/counter')
const counterFileName = 'data.json'
export const dataFilePath = path.resolve(counterDir, counterFileName)

export function updateCounter(counter = { ...initialCounter }) {
    counter.updated = new Date().toLocaleString()
    counter.count++

    try {
        if (!existsSync(dataFilePath)) {
            mkdirSync(counterDir, { recursive: true })
        }

        writeFileSync(dataFilePath, JSON.stringify(counter))
    } catch (error) {
        console.log(error)
    }

    return counter
}
