// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Box, Container, VStack } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
