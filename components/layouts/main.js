import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar";
import VoxelDog from "./voxel-dog";
import NoSsr from "../no-ssr";

const Main=({children,router})=>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content=""/>
                <title>Vibek lamichhane's Portfolio</title>
                <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

            </Head>
            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>

                <VoxelDog/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}


export default Main