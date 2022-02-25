import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import AnnotationsComponent from '../../components/Annotations'

type DockerFileAnnotationsTypes = 'From'

interface DockerFileProps {
    annotations: Annotations<DockerFileAnnotationsTypes>
}

const DockerFile: NextPage<DockerFileProps> = ({ annotations }) => {
    return <AnnotationsComponent title="Docker File" annotations={annotations} />
}

export const getStaticProps: GetStaticProps<DockerFileProps> = () => {
    return { props: { annotations } }
}

export default DockerFile

const annotations: DockerFileProps['annotations'] = {
    From: {
        command: 'From',
        description: 'The container you want to start from',
        example: 'FROM node:16-alpine',
    },
}