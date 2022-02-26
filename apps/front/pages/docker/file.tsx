import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import AnnotationsComponent from '../../components/Annotations'

type DockerFileAnnotations = 'FROM' | 'WORKDIR' | 'RUN' | 'CMD'

interface DockerFileProps {
    annotations: Annotations<DockerFileAnnotations>
}

const DockerFile: NextPage<DockerFileProps> = ({ annotations }) => {
    return <AnnotationsComponent title="Docker File" annotations={annotations} />
}

export const getStaticProps: GetStaticProps<DockerFileProps> = () => {
    return { props: { annotations } }
}

export default DockerFile

const annotations: DockerFileProps['annotations'] = {
    FROM: {
        command: 'FROM',
        description: 'The container you want to start from',
        example: 'FROM node:16-alpine',
    },
    WORKDIR: {
        command: 'WORKDIR',
        description: 'The root directory where the application will stand',
        example: 'WORKDIR /app',
    },
    RUN: {
        command: 'RUN',
        description: 'The command to run from the WORKDIR',
        example: 'RUN npm i',
    },
    CMD: {
        command: 'CMD',
        description: 'The default command to run when starting a container from an image',
        example: 'CMD ["npm", "run", "dev"]',
    },
}
