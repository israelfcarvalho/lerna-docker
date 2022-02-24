import { NextPage, GetStaticProps } from 'next'
import React from 'react'

const DockerImages: React.FC<NextPage> = () => {
    return <>Docker images</>
}

export const getStaticProps: GetStaticProps = () => {
    return { props: {} }
}

export default DockerImages
