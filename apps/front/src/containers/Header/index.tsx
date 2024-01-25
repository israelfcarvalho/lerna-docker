import React, { ComponentProps, useMemo } from 'react'

import HeaderComponent from '../../components/Header'

const HeaderContainer: React.FC = () => {
    const routes = useMemo<ComponentProps<typeof HeaderComponent>['navigationRoutes']>(
        () => [
            { name: 'Docker Image', path: '/docker/image' },
            { name: 'Docker File', path: '/docker/file' },
            { name: 'Docker Container', path: '/docker/container' },
            { name: 'Docker Volume', path: '/docker/volume' },
        ],
        []
    )

    return <HeaderComponent navigationRoutes={routes} />
}

export default HeaderContainer
