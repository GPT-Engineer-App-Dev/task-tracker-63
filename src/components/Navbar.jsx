import { Box, Link, Flex, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" bg="gray.50" py={4} px={4} shadow="sm">
      <Flex align="center" justify="space-between">
        <Link to="/" fontSize="lg" fontWeight="bold">Todo App</Link>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;