import { Box, Button } from "@chakra-ui/react";

export const Btn = ({onClick3, onClick2, onClick, text}) => {
  

  return (
    <Box position="relative">
      <Button
        onClick={onClick3 || onClick3 || onClick2 || onClick}
        colorScheme="red"
        border="4px"
        borderColor="gray.400"
      >
        {text}
      </Button>
    </Box>
  );
};
