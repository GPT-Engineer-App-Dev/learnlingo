import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to LinguaLearn</Heading>
        <Text fontSize="lg" textAlign="center">
          Start your language learning journey with LinguaLearn. Choose from a wide range of languages and interactive lessons.
        </Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/language-learning.jpg" alt="Language Learning" />
        </Box>
        <Button as={Link} to="/courses" colorScheme="blue" size="lg" mt={6}>Explore Courses</Button>
      </VStack>
    </Container>
  );
};

export default Index;