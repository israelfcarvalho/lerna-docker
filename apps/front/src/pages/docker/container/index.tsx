import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../components/Annotations'

type DockerContainerAnnotations = 'run' | 'ps' | 'stop' | 'rm'

interface DockerContainerProps {
    annotations: Annotations<DockerContainerAnnotations>
    description: Array<string>
}

const DockerContainer: NextPage<DockerContainerProps> = ({ annotations, description }) => {
    return <AnnotationsComponent annotations={annotations} description={description} />
}

export const getStaticProps: GetStaticProps<DockerContainerProps> = () => {
    return {
        props,
    }
}

const props: DockerContainerProps = {
    annotations: {
        run: {
            command: 'run',
            description: 'start a container',
            example: {
                text: 'docker run -p XXXX:YYYY image-name',
                observations: [
                    { command: '-p', text: 'this flag is used to map local port XXXX to container port YYYY' },
                ],
            },
        },
        ps: {
            command: 'ps',
            description: 'show a list of containers',
            example: {
                text: 'docker ps -a',
                observations: [{ text: 'this tag for to show all containers (running and stoped)', command: '-a' }],
            },
        },
        stop: {
            command: 'stop',
            description: 'stop a running container',
            example: {
                text: 'docker stop <container-id | container-name>',
            },
        },
        rm: {
            command: 'rm',
            description: 'remove a container',
            example: {
                text: 'docker rm -f <container-id | container-name>',
                observations: [
                    {
                        command: '-f',
                        text: 'this flag forces a running container to be stoped before remove, without it, a running container can not be removed',
                    },
                ],
            },
        },
    },
    description: [
        'Is a runnable instance of an image. You can create, start, stop, move or delete a container using the DockerAPI or CLI',
        'Can be run on local machines, virtual machines or deployed to the cloud',
        'Is portable (can be run on any OS)',
        'Containers are isolated from each other and run their on software, binaries, and configurations',
    ],
}

export default DockerContainer
