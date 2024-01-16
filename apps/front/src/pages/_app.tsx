import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import PageWrapper from '../components/PageWraper'
import { GlobalStyle } from '../styles/Global.styles'
import { sum } from '@facanha/mat'

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
        primary: '#2e2547',
        grey: '#757575',
        greyLight10: '#a9a9a9',
        greyLight20: '#c9c9c9',
        greyLight30: '#efefef',
        blue: '#3944bc',
    },
}

function MyApp({ Component, pageProps }: AppProps) {
    const numbers = [1, 34, -9, 0]
    const soma = sum

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageWrapper>
                <Component {...pageProps} />
            </PageWrapper>
        </ThemeProvider>
    )
}

export default MyApp
