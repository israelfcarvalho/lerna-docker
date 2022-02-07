import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/Global.styles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
