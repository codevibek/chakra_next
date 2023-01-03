import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/articleBlog"


const Page = () => {
  return (
    // <Layout>

    <Container>
        <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500")} p={3} align="center">
            Hellp,I&apos;m a full stack developer based in Nepal

        </Box>
        <Box display={{md:"flex"}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant= "page-title">
                    Vibek Lamichhane
                </Heading>
                <p>Curious, learner, Explorer</p>
            </Box>
            <Box flexShrink={0} mt={{base:4,md:0}}
            ml={{md:6}}
            align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block"
                borderRadius="full" src="/images/bibek.jpg" alt="Profile Image" />
            </Box>
        </Box>
        </Container>
    // </Layout>
  )
}

export default Page