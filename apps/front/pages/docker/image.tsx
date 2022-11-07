import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import AnnotationsComponent from '../../components/Annotations'

type DockerImageAnnotations = 'build' | 'push' | 'tag'

interface DockerImageProps {
    annotations: Annotations<DockerImageAnnotations>
    description: Array<string>
}

const DockerImage: NextPage<DockerImageProps> = ({ annotations, description }) => {
    return <AnnotationsComponent title="Docker Image" annotations={annotations} description={description} />
}

export const getStaticProps: GetStaticProps<DockerImageProps> = () => {
    return { props }
}

const props: DockerImageProps = {
    description: [
        'When running a container, it uses an isolated filesystem.',
        'This custom filesystem is provided by a container image.',
        'Since the image contains the container’s filesystem, it must contain everything needed to run an application - all dependencies, configurations, scripts, binaries, etc.',
        'The image also contains other configuration for the container, such as environment variables, a default command to run, and other metadata.',
    ],
    annotations: {
        build: {
            command: 'build',
            description: 'use the DockerFile to build a container image',
            example: {
                text: 'docker build -t docker-image-name .',
                observations: [
                    { command: '-t', text: 'tags the image to a human readable name ' },
                    {
                        command: '.',
                        text: 'the relative path to Dockerfile, that contain the instructions to mount the image',
                    },
                ],
            },
        },
        push: {
            command: 'push',
            description: 'push a image to docker hub registry by default',
            example: { text: 'docker push repository-name/image-name:tag-name' },
        },
        tag: {
            command: 'tag',
            description: 'used to give a new name to an image',
            example: {
                text: 'docker tag image-name new-image-name',
                observations: [
                    {
                        text: 'is usefull to add a prefix of your repository name, to push it. Ex: docker tag image-name repository-name/image-name',
                    },
                ],
            },
        },
    },
}

export default DockerImage
