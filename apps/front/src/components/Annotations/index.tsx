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
  ExampleText,
  ExampleObservations,
  Observation,
  ObservationCommand,
  ObservationText,
  DescriptionContainer,
  Description,
} from './styles'

type AnnotationsItem = PossibleValues<Annotations<any>>

interface AnnotationsData {
  hasAnnotations: boolean
  items: Array<AnnotationsItem>
}

interface AnnotationsComponentProps {
  title?: string
  description?: Array<string>
  annotations: Annotations<any>
  emptyListMessage?: string
}

const AnnotationsComponent: React.FC<AnnotationsComponentProps> = ({
  annotations,
  title,
  emptyListMessage = 'No content',
  description = [],
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
      {!!description.length && (
        <DescriptionContainer>
          {description.map((paragraph, index) => (
            <Description key={index}>{paragraph}</Description>
          ))}
        </DescriptionContainer>
      )}
      {hasAnnotations ? (
        <ItemsContainer>
          {items.map((item, itemIndex) => (
            <Item key={itemIndex}>
              <Explanation>
                <ExplanationCommand>{item.command}: </ExplanationCommand>
                <ExplanationDescription>{item.description}</ExplanationDescription>
              </Explanation>
              {!!item.example && (
                <Example>
                  <ExampleText>{item.example.text}</ExampleText>
                  {!!item.example.observations && (
                    <ExampleObservations>
                      {item.example.observations.map((observation, index) => (
                        <Observation key={index}>
                          {!!observation.command && <ObservationCommand>{observation.command}: </ObservationCommand>}
                          <ObservationText>{observation.text}</ObservationText>
                        </Observation>
                      ))}
                    </ExampleObservations>
                  )}
                </Example>
              )}
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
