import React from 'react'
import { Container, ItemsContainer, Title, EmptyList, Item } from './styles'

interface ListItem {
    text: string
}

interface ListComponentProps {
    title?: string
    items: Array<ListItem>
    emptyListMessage?: string
}

const ListComponent: React.FC<ListComponentProps> = ({ items, title, emptyListMessage = 'No content' }) => {
    const hasItems = !!items.length

    return (
        <Container>
            {!!title && <Title>{title}</Title>}
            {hasItems ? (
                <ItemsContainer>
                    {items.map((item, itemIndex) => (
                        <Item key={itemIndex}>{item.text}</Item>
                    ))}
                </ItemsContainer>
            ) : (
                <EmptyList>{emptyListMessage}</EmptyList>
            )}
        </Container>
    )
}

export default ListComponent
