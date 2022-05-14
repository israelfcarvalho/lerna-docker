import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../components/Annotations'

type DockerContainerAnnotations = 'run'

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
