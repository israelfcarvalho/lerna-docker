declare type ObjectLiteral = {
    [key: string]: any
}

declare type Keyof<T extends ObjectLiteral> = keyof T

interface AnnotationsObservation {
    command?: string
    text: string
}

declare type Annotations<T extends string> = {
    [K in T]: {
        command: K
        description: string
        example?: string
        observations?: Array<AnnotationsObservation>
    }
}

declare type PossibleValues<T extends ObjectLiteral> = T[Keyof<T>]
