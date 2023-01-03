import { Box, Container } from "@chakra-ui/react"



const Page = () => {
  return (
    <Container>
        <Box borderRadius="lg" bg="red" p={3} align="center">
            Hellp,I&apos;m a full stack developer based in Nepal

        </Box>
        <Box display={{md:"flex"}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant= "page-title">
                    Vibek Lamichhane
                </Heading>
                <p>Curious, learner, Explorer</p>
            </Box>
        </Box>
        </Container>
  )
}

export default Page