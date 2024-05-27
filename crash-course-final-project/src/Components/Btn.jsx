import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Btn = (props) => {
  const navigate = useNavigate()
  function handleClick() {
    navigate(props.onClick)
  }

  return (
    <Box position="relative">
      <Button
        onClick={handleClick}
        colorScheme="red"
        border="4px"
        borderColor="gray.400"
      >
        {props.text}
      </Button>
    </Box>
  );
};
