import { Box, Heading,ChakraProvider } from "@chakra-ui/react";

export const Header = () => {
  return (
    <ChakraProvider>
    <Box p={2} bg="teal.500" color="white" textAlign="center" >
    <Heading as="h1" size="2xl">
      Dio Bank
    </Heading>
  </Box>
  </ChakraProvider>
  );
};




