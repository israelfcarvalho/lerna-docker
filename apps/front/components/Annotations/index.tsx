import React, { useMemo } from 'react'
import {
    Container,
    ItemsContainer,
    Title,
    EmptyList,
    Item,
    Explanation,
    ExplanationCommand,
    ExplanationDescription,
    Example,
} from './styles'

type AnnotationsItem = PossibleValues<Annotations<any>>

interface AnnotationsData {
    hasAnnotations: boolean
    items: Array<AnnotationsItem>
}

interface AnnotationsComponentProps {
    title?: string
    annotations: Annotations<any>
    emptyListMessage?: string
}

const AnnotationsComponent: React.FC<AnnotationsComponentProps> = ({
    annotations,
    title,
    emptyListMessage = 'No content',
}) => {
    const { hasAnnotations, items } = useMemo<AnnotationsData>(() => {
        const annotationsItems = Object.keys(annotations).map(annotationKey => annotations[annotationKey])
        const hasAnnotations = !!annotationsItems.length

        return {
            hasAnnotations,
            items: annotationsItems,
        }
    }, [annotations])

    return (
        <Container>
            {!!title && <Title>{title}</Title>}
            {hasAnnotations ? (
                <ItemsContainer>
                    {items.map((item, itemIndex) => (
                        <Item key={itemIndex}>
                            <Explanation>
                                <ExplanationCommand>{item.command}: </ExplanationCommand>
                                <ExplanationDescription>{item.description}</ExplanationDescription>
                            </Explanation>
                            {!!item.example && <Example>{item.example}</Example>}
                        </Item>
                    ))}
                </ItemsContainer>
            ) : (
                <EmptyList>{emptyListMessage}</EmptyList>
            )}
        </Container>
    )
}

export default AnnotationsComponent
