import React from 'react'

import { Container, Home, Navbar, Routes } from './styles'
import LinkContainer from '../Link'

type NavigationRoutePath = `/${string}`

interface Route {
    path: NavigationRoutePath
    name: string
}

interface HeaderComponentProps {
    navigationRoutes: Array<Route>
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ navigationRoutes }) => {
    return (
        <Container>
            <Home>
                <LinkContainer  href="/">HOME</LinkContainer>
            </Home>
            <Navbar>
                <Routes>
                    {navigationRoutes.map((route, index) => (
                        <LinkContainer key={index} href={route.path}>
                            {route.name}
                        </LinkContainer>
                    ))}
                </Routes>
            </Navbar>
        </Container>
    )
}

export default HeaderComponent
