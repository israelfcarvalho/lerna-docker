import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../../components/Annotations'

interface DockerVolumeBindMountsProps {
    description: Array<string>
}

const DockerVolumeBindMounts: NextPage<DockerVolumeBindMountsProps> = ({ description }) => {
    return <AnnotationsComponent annotations={{}} title="Docker Volume: Bind Mounts" description={description} />
}

export const getStaticProps: GetStaticProps<DockerVolumeBindMountsProps> = () => {
    return { props }
}

export default DockerVolumeBindMounts

const props: DockerVolumeBindMountsProps = {
    description: [
        'With bind mounts, we control the exact mountpoint on the host',
        'We can use this to persist data, but it’s often used to provide additional data into containers.',
        'When working on an application, we can use a bind mount to mount our source code into the container to let it see code changes, respond, and let us see the changes right away.',
    ],
}
