import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../components/Annotations'

interface DockerVolumeProps {
    description: Array<string>
}

const DockerVolume: NextPage<DockerVolumeProps> = ({ description }) => {
    return (
        <>
            <AnnotationsComponent title="Docker Volume" description={description} annotations={{}} />
        </>
    )
}

export const getStaticProps: GetStaticProps<DockerVolumeProps> = () => {
    return { props }
}

export default DockerVolume

const props: DockerVolumeProps = {
    description: [
        'Provide the ability to connect specific filesystem paths of the container back to the host machine',
        'If a directory in a container is mouted, changes in that directory are also seen on the host machine',
        'If we mount that same directory across container restarts, we-de see the same files',
    ],
}
