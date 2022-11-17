import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        background-color: ${({ theme: { colors } }) => colors.greyLight30};

        :vertical {
            width: 12px;
        }

        :horizontal {
            height: 12px;
        }
	}

    ::-webkit-scrollbar-corner {
        background-color: ${({ theme: { colors } }) => colors.greyLight30};

        border-radius: 20%;
    }

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme: { colors } }) => colors.greyLight10};
        border-radius: 32px;

        :vertical, :horizontal {
            border: 4px solid ${({ theme: { colors } }) => colors.greyLight30};
        }
	}
`
