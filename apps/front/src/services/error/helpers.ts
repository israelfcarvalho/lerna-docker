export function isError(error: unknown): error is Error {
    const isObject = typeof error === 'object' && !!error
    const isError = isObject && !!Object(error).code

    return isError
}
