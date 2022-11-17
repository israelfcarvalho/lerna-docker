import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../components/Annotations'

type DockerVolumeAnnotations = 'create' | 'inspect'

interface DockerVolumeProps {
    description: Array<string>
    annotations: Annotations<DockerVolumeAnnotations>
}

const DockerVolume: NextPage<DockerVolumeProps> = ({ description, annotations }) => {
    return <AnnotationsComponent title="Docker Volume" description={description} annotations={annotations} />
}

export const getStaticProps: GetStaticProps<DockerVolumeProps> = () => {
    return { props }
}

export default DockerVolume

const props: DockerVolumeProps = {
    description: [
        'Provide the ability to connect specific filesystem paths of the container back to the host machine',
        'If a directory in a container is mounted, changes in that directory are also seen on the host machine',
        "If we mount that same directory across container restarts, we'd see the same files",
    ],
    annotations: {
        create: {
            command: 'create',
            description: 'create a volume',
            example: {
                text: 'docker volume create volume-name',
                observations: [
                    {
                        text: '-v flag maps the volume created to a directory in the container',
                        command: 'docker run -p 80:80 -v volume-name:directory-name image-name',
                    },
                ],
            },
        },
        inspect: {
            command: 'inspect',
            description: 'show info about a volume',
            example: {
                text: 'docker volume inspect volume-name',
            },
        },
    },
}
