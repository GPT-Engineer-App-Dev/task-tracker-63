import { VStack, Text, Checkbox, Box } from '@chakra-ui/react';

const TodoList = ({ todos }) => {
  return (
    <VStack align="stretch" spacing={4}>
      {todos.map((todo, index) => (
        <Box key={index} p={4} bg="gray.50" borderRadius={4}>
          <Checkbox defaultChecked={todo.completed}>{todo.text}</Checkbox>
        </Box>
      ))}
    </VStack>
  );
};

export default TodoList;