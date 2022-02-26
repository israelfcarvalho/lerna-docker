import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import AnnotationsComponent from '../../components/Annotations'

type DockerImageAnnotations = 'build'

interface DockerImageProps {
    annotations: Annotations<DockerImageAnnotations>
}

const DockerImage: NextPage<DockerImageProps> = ({ annotations }) => {
    return <AnnotationsComponent title="Docker Image" annotations={annotations} />
}

export const getStaticProps: GetStaticProps<DockerImageProps> = () => {
    return { props: { annotations } }
}

export default DockerImage

const annotations: DockerImageProps['annotations'] = {
    build: {
        command: 'build',
        description: 'use the DockerFile to build a container image',
        example: 'docker build -t docker-image-name .',
        observations: [{ command: '-t', text: 'tags the image to a human readable name ' }],
    },
}
