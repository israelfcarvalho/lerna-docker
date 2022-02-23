import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Anchor } from './styles'

interface LinkContainerProps extends LinkProps {

}

const LinkContainer: React.FC<LinkContainerProps> = ({children, ...props}) => {
    const {asPath} = useRouter()

    return <NextLink {...props} passHref><Anchor active={props.href === asPath}>{children}</Anchor></NextLink>
}





export default LinkContainer