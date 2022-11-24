export const getUsers = () => {
    return fetch('http://localhost:4000/users', {}).then(response => {
        return response.json() as Promise<Users>
    })
}
