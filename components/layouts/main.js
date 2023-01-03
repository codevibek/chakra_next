import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

const Main=({children,router})=>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content=""/>
                <title>Vibek lamichhane's Portfolio</title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}


export default Main