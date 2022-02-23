import styled, { css, StyledProps } from 'styled-components'

interface AnchorProps {
    active: boolean
}

const addActiveCss = ({ theme: { colors }, active }: StyledProps<AnchorProps>) => {
    return (
        active &&
        css`
            pointer-events: none;

            font-weight: 900;
            color: ${colors.primary};
        `
    )
}

export const Anchor = styled.a<AnchorProps>`
    ${addActiveCss}
`
