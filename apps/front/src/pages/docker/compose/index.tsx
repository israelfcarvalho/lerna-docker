import { GetStaticProps, NextPage } from 'next'
import AnnotationsComponent from '../../../components/Annotations'

interface DockerComposeProps {
    description: Array<string>
}

const DockerCompose: NextPage<DockerComposeProps> = ({ description }) => {
    return <AnnotationsComponent description={description} annotations={{}} />
}

export const getStaticProps: GetStaticProps<DockerComposeProps> = () => {
    return {
        props,
    }
}

export default DockerCompose

const props: DockerComposeProps = {
    description: [
        'Docker Compose is a tool that was developed to help define and share multi-container applications.',
        'With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.',
        'The big advantage of using Compose is you can define your application stack in a file,',
        'keep it at the root of your project repo (it’s now version controlled), and easily enable someone else to contribute to your project.',
    ],
}
