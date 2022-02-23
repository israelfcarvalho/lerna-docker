import React, { ComponentProps, useMemo } from 'react'

import HeaderComponent from '../../components/Header'

const HeaderContainer: React.FC = () => {
    const routes = useMemo<ComponentProps<typeof HeaderComponent>['navigationRoutes']>(
        () => [{ name: 'Images', path: '/images' }],
        []
    )

    return <HeaderComponent navigationRoutes={routes} />
}

export default HeaderContainer
