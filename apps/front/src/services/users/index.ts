const backHost = process.env.REACT_APP_BACK_HOST

export const getUsers = () => {
    return fetch(`http://${backHost}/users/`, {}).then(response => {
        return response.json() as Promise<Users>
    })
}
