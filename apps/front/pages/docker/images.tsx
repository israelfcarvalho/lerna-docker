import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import AnnotationsComponent from '../../components/Annotations'

const DockerImages: React.FC<NextPage> = () => {
    return <AnnotationsComponent title="Docker Images" annotations={{}} />
}

export const getStaticProps: GetStaticProps = () => {
    return { props: {} }
}

export default DockerImages
