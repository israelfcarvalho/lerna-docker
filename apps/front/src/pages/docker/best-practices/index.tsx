import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../components/Annotations'

type DockerBestPratcicesAnnotations = 'scan' | 'history' | 'layer caching' | 'multi-stages build'

interface DockerBestPracticesProps {
    annotations: Annotations<DockerBestPratcicesAnnotations>
    description: Array<string>
}

const DockerBestPractices: NextPage<DockerBestPracticesProps> = ({ annotations, description }) => {
    return <AnnotationsComponent annotations={annotations} description={description} />
}

export const getStaticProps: GetStaticProps = function () {
    return { props }
}

export default DockerBestPractices

const props: DockerBestPracticesProps = {
    description: ['Some best practices to build an image in docker'],
    annotations: {
        scan: {
            command: 'scan',
            description: 'scan an image for security vulnerabilities. Partned with Snyk',
            example: { text: 'docker scan image-name' },
        },
        history: {
            command: 'history',
            description: 'seee the history commands used to build each layer of an image',
            example: {
                text: 'docker image history --no-trunc image-name',
                observations: [{ text: 'show complete output without truncking large texts', command: '--no-trunc' }],
            },
        },
        'layer caching': {
            command: 'layer caching',
            description:
                'using layer caching decrease build time. Once a layer changes, all downstream layers have to be recreated as well. Look for layers that rebuild without change and try to fix it if possible, so docker can cache it',
        },
        'multi-stages build': {
            command: 'multi-stages build',
            description:
                'multi-stage builds are an incredibly powerful tool to help use multiple stages to create an image. Separate build-time dependencies from runtime dependencies. Reduce overall image size by shipping only what your app needs to run',
        },
    },
}
