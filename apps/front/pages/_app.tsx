import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import HeaderContainer from '../containers/Header'
import { GlobalStyle } from '../styles/Global.styles'

const theme: DefaultTheme = {
    spacing: {
        tiny: '2px',
        mini: '4px',
        small: '8px',
        medium: '16px',
        large: '32px',
        huge: '64px',
    },
    colors: {
        primary: "#2e2547",
        grey: "#757575"
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <HeaderContainer />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
