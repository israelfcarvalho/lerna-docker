import type { NextPage, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import { Container, Footer, Main } from '../styles/pages/Home.styles'

interface HomeProps {
    showFooter: boolean
}

const Home: NextPage<HomeProps> = ({ showFooter }) => {
    return (
        <Container>
            <Head>
                <title>Docker App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>Learning Docker</Main>

            {showFooter && <Footer>Footer</Footer>}
        </Container>
    )
}

export function getServerSideProps({
    query: { showFooter },
}: GetServerSidePropsContext): GetServerSidePropsResult<HomeProps> {
    console.log({
        showFooter,
    })

    return {
        props: {
            showFooter: Boolean(showFooter),
        },
    }
}

export default Home
