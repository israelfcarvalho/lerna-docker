import {} from 'styled-components'

declare module 'styled-components' {
    type Spacing = `${number}px`

    interface DefaultTheme {
        spacing: {
            tiny: Spacing
            mini: Spacing
            small: Spacing
            medium: Spacing
            large: Spacing
            huge: Spacing
        }
        colors: {
            primary: string
            grey: string
            greyLight10: string
            greyLight20: string
            greyLight30: string
            blue: string
        }
    }
}
