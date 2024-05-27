import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Box bg={"blue.200"} p={6}>
      <Flex
        alignItems="center"
        gap="4"
        justifyContent="space-evenly"
        w="100%"
        fontSize="lg"
        fontWeight="bold"
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tickets">Tickets</Link>

        {isLoggedIn.loggedStatus === false ? (
          <Link to="/login">Login</Link>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </Flex>
    </Box>
  );
};
