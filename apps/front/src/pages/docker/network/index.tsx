import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../components/Annotations'

type NetworkAnnotations = 'create'

interface DockerNetworkProps {
    annotations: Annotations<NetworkAnnotations>
    description: Array<string>
}

const DockerNetwork: NextPage<DockerNetworkProps> = ({ annotations, description }) => {
    return <AnnotationsComponent annotations={annotations} description={description} />
}

export const getStaticProps: GetStaticProps<DockerNetworkProps> = async () => {
    return {
        props,
    }
}

export default DockerNetwork

const props: DockerNetworkProps = {
    description: [
        'Remember that containers, by default, run in isolation and don’t know anything about other processes or containers on the same machine.',
        'So, how do we allow one container to talk to another?',
        'The answer is networking. Now, you don’t have to be a network engineer (hooray!). Simply remember this rule...',
        '"If two containers are on the same network, they can talk to each other. If they aren’t, they can’t."',
    ],
    annotations: {
        create: {
            command: 'create',
            description: 'create a docker network',
            example: {
                text: 'docker network create network-name',
                observations: [
                    {
                        command: 'docker run -p 80:80 --network network-name image-name',
                        text: 'initiate the container on the network mapped by flag --network',
                    },
                    {
                        command:
                            'docker run -p 80:80 --network network-name --network-alias network-host-name image-name',
                        text: 'initiate the container and map the host to a alias with "--network-alias" that can be used to other containers in the same network',
                    },
                ],
            },
        },
    },
}
