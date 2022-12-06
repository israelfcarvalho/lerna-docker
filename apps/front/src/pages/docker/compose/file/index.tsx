import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../../components/Annotations'

type DockerComposeFileServicesAttributes<A extends string> = `services -> ${A}`

type DockerComposeFileAnnotations =
    | 'services'
    | DockerComposeFileServicesAttributes<'image'>
    | DockerComposeFileServicesAttributes<'command'>
    | DockerComposeFileServicesAttributes<'ports'>
    | DockerComposeFileServicesAttributes<'working_dir'>
    | DockerComposeFileServicesAttributes<'volumes'>
    | DockerComposeFileServicesAttributes<'environment'>
    | 'volumes'

interface DockerComposeFileProps {
    description: Array<string>
    annotations: Annotations<DockerComposeFileAnnotations>
}

const DockerComposeFile: NextPage<DockerComposeFileProps> = ({ description, annotations }) => {
    return <AnnotationsComponent description={description} annotations={annotations} />
}

export const getStaticProps: GetStaticProps<DockerComposeFileProps> = () => {
    return {
        props,
    }
}

export default DockerComposeFile

const props: DockerComposeFileProps = {
    description: ['the file with instructions to create and run our services'],
    annotations: {
        services: {
            command: 'services',
            description: 'here we define the containers we want to run as part of our application',
            example: {
                text: 'front',
                observations: [{ text: 'We can pick any name for the service. The name will become a network alias' }],
            },
        },
        'services -> image': {
            command: 'services -> image',
            description:
                'the base image to "build" your container. If a service define a "build" key, the image key become the name of the image that will be builded',
        },
        'services -> command': {
            command: 'services -> command',
            description:
                'the command to run when the container start. (be aware, this disable the "build" key on a service)',
        },
        'services -> ports': {
            command: 'services -> ports',
            description: 'define the exposed ports in a list',
        },
        'services -> working_dir': {
            command: 'services -> working_dir',
            description: 'the root dir where the commands will run',
        },
        'services -> volumes': {
            command: 'services -> volumes',
            description:
                'the mapped volumes in a list (be aware, you need to define the docker compose attribute "volumes" to define the volumes available in a services. Otherwise if the volume was not created, it will not be created automatically)',
        },
        'services -> environment': {
            command: 'services -> environment',
            description: 'the environment variables you want to define for that container, in a list',
        },
        volumes: {
            command: 'volumes',
            description: 'the volumes needed for one or more services, if they don`t exists, docker will create them',
        },
    },
}
