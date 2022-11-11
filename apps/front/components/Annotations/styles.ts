import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    padding: ${({ theme: { spacing } }) => `${spacing.medium} ${spacing.huge} 0`};
`

export const Title = styled.h1`
    text-align: center;
`

export const DescriptionContainer = styled.div`
    color: ${({ theme: { colors } }) => colors.grey};
`

export const Description = styled.p`
    margin: 0;

    text-indent: ${({ theme: { spacing } }) => spacing.medium};

    & + & {
        margin-top: ${({ theme: { spacing } }) => spacing.small};
    }
`

export const ItemsContainer = styled.ul`
    display: grid;
    align-self: flex-start;
`

export const Item = styled.li``

export const Explanation = styled.p``

export const ExplanationCommand = styled.span`
    font-weight: bold;
    font-size: 20px;
`
export const ExplanationDescription = styled.span``

export const Example = styled.div`
    margin: 0;
    padding: ${({ theme: { spacing } }) => spacing.medium};

    background-color: ${({ theme: { colors } }) => colors.greyLight30};
    box-shadow: ${({ theme: { colors } }) => `-8px 0 8px 0 ${colors.greyLight20} inset`};
`

export const ExampleText = styled.p``

export const ExampleObservations = styled.ul``

export const Observation = styled.li``

export const ObservationCommand = styled.span`
    color: ${({ theme: { colors } }) => colors.blue};
    font-weight: bold;
    font-size: large;
`

export const ObservationText = styled.span``

export const EmptyList = styled.p`
    flex: 0.8;
    align-self: center;

    width: 80%;
    margin: auto 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme: { colors } }) => colors.greyLight30};
    box-shadow: ${({ theme: { colors } }) => `0 0 8px 0 ${colors.greyLight10}`};
`
