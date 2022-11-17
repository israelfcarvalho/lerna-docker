import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import AnnotationsComponent from '../../../components/Annotations'

type DockerFileAnnotations = 'FROM' | 'WORKDIR' | 'RUN' | 'CMD'

interface DockerFileProps {
    annotations: Annotations<DockerFileAnnotations>
    description: Array<string>
}

const DockerFile: NextPage<DockerFileProps> = ({ annotations, description }) => {
    return <AnnotationsComponent title="Docker File" annotations={annotations} description={description} />
}

export const getStaticProps: GetStaticProps<DockerFileProps> = () => {
    return { props }
}

export default DockerFile

const props: DockerFileProps = {
    description: [
        'A Dockerfile is simply a text-based file with no file extension.',
        ' A Dockerfile contains a script of instructions that Docker uses to create a container image',
    ],
    annotations: {
        FROM: {
            command: 'FROM',
            description: 'The container you want to start from',
            example: {
                text: 'FROM node:16-alpine',
            },
        },
        WORKDIR: {
            command: 'WORKDIR',
            description: 'The root directory where the application will stand',
            example: {
                text: 'WORKDIR /app',
            },
        },
        RUN: {
            command: 'RUN',
            description: 'The command to run from the WORKDIR',
            example: {
                text: 'RUN npm i',
            },
        },
        CMD: {
            command: 'CMD',
            description: 'The default command to run when starting a container from an image',
            example: {
                text: 'CMD ["npm", "run", "dev"]',
            },
        },
    },
}
