import { Flex, Input, Button } from '@chakra-ui/react';

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(text);
    setText('');
  };

  return (
    <Flex as="form" onSubmit={handleSubmit} mb={4}>
      <Input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <Button type="submit" colorScheme="teal">Add Todo</Button>
    </Flex>
  );
};

export default AddTodoForm;