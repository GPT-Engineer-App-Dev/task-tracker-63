import { Box, Container, VStack, Flex, Link, Spacer } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const Index = () => {
  const [todos, setTodos] = React.useState([]);

  const onAddTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  };

  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Navbar />
      <TodoList todos={todos} />
      <AddTodoForm onAddTodo={onAddTodo} />
    </Box>
  );
};

export default Index;