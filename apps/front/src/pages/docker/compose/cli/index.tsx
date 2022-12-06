import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../../components/Annotations'

type DockerComposeCliAnnotations = 'up' | 'down' | 'logs'

interface DockerComposeCliProps {
    description: Array<string>
    annotations: Annotations<DockerComposeCliAnnotations>
}

const DockerComposeCli: NextPage<DockerComposeCliProps> = ({ description, annotations }) => {
    return <AnnotationsComponent description={description} annotations={annotations} />
}

export const getStaticProps: GetStaticProps<DockerComposeCliProps> = () => {
    return {
        props,
    }
}

export default DockerComposeCli

const props: DockerComposeCliProps = {
    description: ['the file with instructions to create and run our services'],
    annotations: {
        up: {
            command: 'up',
            description:
                'creates and run the application stack defined in the docker compose YML file. This has to run on the root dir containing the docker compose file',
            example: {
                text: 'docker compose up -d',
                observations: [
                    { text: 'this flag will run all applications(services) in detached mode', command: '-d' },
                    {
                        text: 'this command already creates a network shared to all services and the services names become theirs host aliases',
                    },
                ],
            },
        },
        down: {
            command: 'down',
            description:
                'Stop all services in your application stack defined by the docker-compose.yml, and removes the network',
            example: {
                text: 'docker compose down --volumes',
                observations: [
                    {
                        command: '--volumes',
                        text: 'this flag tell the docker to exclude volumes defined in your docker-compose.yml',
                    },
                ],
            },
        },
        logs: {
            command: 'logs',
            description: 'Show the logs from each of the services interleaved into a single stream',
            example: {
                text: 'docker compose logs -f',
                observations: [{ text: 'this flag listen to the logs to show then in real time', command: '-f' }],
            },
        },
    },
}
