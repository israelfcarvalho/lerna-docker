import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'

const headerHorizontalPadding: Keyof<DefaultTheme['spacing']> = 'medium'

export const Container = styled.header`
    display: flex;

    padding: ${({ theme: { spacing } }) => `0 ${spacing.medium}`};

    box-shadow: ${({
        theme: {
            colors: { grey },
        },
    }) => `0 2px 4px 0 ${grey}55`};

    position: sticky;
    top: 0px;
`

const addHeaderItemCss = ({ theme: { spacing } }: ThemeProps<DefaultTheme>) => {
    return css`
        padding: ${spacing[headerHorizontalPadding]} 0;
    `
}

export const Navbar = styled.nav`
    flex: 1;
    display: flex;
    justify-content: center;

    ${addHeaderItemCss}
`

export const Home = styled.div`
    margin-right: ${({ theme: { spacing } }) => spacing.medium};

    ${addHeaderItemCss}
`

export const Routes = styled.div`
    > * {
        :nth-child(n + 2) {
            margin-left: ${({ theme: { spacing } }) => spacing.small};
        }
    }
`
