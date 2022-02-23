import HeaderContainer from '../../containers/Header'
import { Body, Container } from './styles'

const PageWrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <HeaderContainer />
            <Body>{children}</Body>
        </Container>
    )
}

export default PageWrapper
