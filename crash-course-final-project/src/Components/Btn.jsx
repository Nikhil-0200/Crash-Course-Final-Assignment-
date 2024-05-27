import { Box, Button } from "@chakra-ui/react";

export const Btn = ({onClick3, onClick2, text}) => {
  

  return (
    <Box position="relative">
      <Button
        onClick={onClick3 ? onClick3 : onClick2}
        colorScheme="red"
        border="4px"
        borderColor="gray.400"
      >
        {text}
      </Button>
    </Box>
  );
};
