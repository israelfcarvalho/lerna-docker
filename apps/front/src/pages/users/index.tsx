import { GetServerSideProps, NextPage } from 'next'
import { useMemo } from 'react'
import { getUsers } from '../../services/users'
import { isUser } from '../../services/users/helpers'

interface UsersProps {
    users?: Users
}

const Users: NextPage<UsersProps> = props => {
    const users = useMemo<Array<User>>(() => {
        if (!props.users) {
            return []
        }

        return Object.values(props.users).filter<User>(isUser)
    }, [props.users])

    return (
        <ul>
            {users.map(user => (
                <li key={user.name + user.birthDate}>{user.name}</li>
            ))}
        </ul>
    )
}

export const getServerSideProps: GetServerSideProps<UsersProps | ObjectLiteral> = async () => {
    try {
        const users = await getUsers()

        return { props: { users: users } }
    } catch (error) {
        console.error(error)

        return { props: {}, notFound: true }
    }
}

export default Users
