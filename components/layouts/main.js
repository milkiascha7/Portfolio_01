import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Navbar";
import VoxelDog from "../voxel-dog";
import NoSsr from "../no-ssr";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Portfolio" />
                <title>Milkais Hailu - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.2xl" pt={14}>
                <NoSsr>
                    <VoxelDog maxW="container.xl" pt={14} />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}
export default Main