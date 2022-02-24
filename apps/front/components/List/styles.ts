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
`

export const Item = styled.li``

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
