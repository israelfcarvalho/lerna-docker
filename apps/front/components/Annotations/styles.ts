import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Title = styled.h1`
    text-align: center;
`

export const ItemsContainer = styled.ul`
    display: grid;

    padding: ${({ theme: { spacing } }) => `0 ${spacing.huge}`};
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

export const ObservationCommand = styled.span``

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
