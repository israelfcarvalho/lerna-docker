import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import ListComponent from '../../components/List'

const DockerImages: React.FC<NextPage> = () => {
    return <ListComponent title="Docker Images" items={[]} />
}

export const getStaticProps: GetStaticProps = () => {
    return { props: {} }
}

export default DockerImages
