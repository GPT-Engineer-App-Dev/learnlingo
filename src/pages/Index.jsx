import { Container, Text, VStack, Heading, Button, Box, Image, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [completedLessons, setCompletedLessons] = useState({});

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleLessonCompletion = (lesson) => {
    setCompletedLessons({
      ...completedLessons,
      [selectedLanguage]: {
        ...completedLessons[selectedLanguage],
        [lesson]: true,
      },
    });
  };

  useEffect(() => {
    // Load completed lessons from storage (you can use localStorage or any other persistent storage)
    const storedCompletedLessons = JSON.parse(localStorage.getItem("completedLessons")) || {};
    setCompletedLessons(storedCompletedLessons);
  }, []);

  useEffect(() => {
    // Save completed lessons to storage whenever it changes
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

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
        <Select placeholder="Select language" value={selectedLanguage} onChange={handleLanguageChange} width="100%" maxW="md" mt={4}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
        </Select>
        <Button as={Link} to="/courses" colorScheme="blue" size="lg" mt={6}>Explore Courses</Button>
        {selectedLanguage && (
          <VStack spacing={4} mt={6} width="100%" maxW="md" align="flex-start">
            <Heading as="h2" size="lg">Completed Lessons</Heading>
            {completedLessons[selectedLanguage] && Object.keys(completedLessons[selectedLanguage]).map((lesson) => (
              <Box key={lesson} borderWidth="1px" borderRadius="lg" p={2} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Text>{lesson}</Text>
                <Button colorScheme="green" size="sm" onClick={() => handleLessonCompletion(lesson)}>Mark as Completed</Button>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;