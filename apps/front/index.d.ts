declare type ObjectLiteral = {
    [key: string]: any
}

declare type Keyof<T extends ObjectLiteral> = keyof T

declare type Annotations<T extends string> = {
    [K in T]: {
        command: K
        description: string
        example?: string
    }
}

declare type PossibleValues<T extends ObjectLiteral> = T[Keyof<T>]
