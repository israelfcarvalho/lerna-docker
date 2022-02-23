declare type ObjectLiteral = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}

declare type Keyof<T extends ObjectLiteral> = keyof T
