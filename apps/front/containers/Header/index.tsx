import React, { ComponentProps, useMemo } from 'react'

import HeaderComponent from '../../components/Header'

const HeaderContainer: React.FC = () => {
    const routes = useMemo<ComponentProps<typeof HeaderComponent>['navigationRoutes']>(
        () => [
            { name: 'Docker Image', path: '/docker/image' },
            { name: 'Docker File', path: '/docker/file' },
        ],
        []
    )

    return <HeaderComponent navigationRoutes={routes} />
}

export default HeaderContainer
