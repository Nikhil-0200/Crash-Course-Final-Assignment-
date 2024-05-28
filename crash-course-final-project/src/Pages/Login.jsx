import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Container,
  Flex,
  Button,
  useToast,
  Wrap,
  WrapItem 
} from "@chakra-ui/react";
import { useState } from "react";


import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const toast = useToast();
    const {isLoggedIn, login, logout} = useContext(AuthContext)
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    const newData = { ...credential, [name]: value };

    setCredential(newData);
  }

  async function handleSubmit() {
    try {
      let res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: credential,
      });

      login(res?.data?.token);

      if(res.status === 200){
        toast({
          title: "Login successful.",
          description: "You have successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })      
      }

    } catch (error) {
      
        toast({
          title: "Error",
          description: "An error occurred.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
    }
  }

  if(isLoggedIn.loggedStatus){
    return <Navigate to="/" />
  }

  return (
    <Container maxW="md">
      <Box my={8} fontWeight="bold">
        <Text fontSize="4xl" textAlign="center">
          Login Page
        </Text>

        <Text>
            {isLoggedIn.token}
        </Text>

        <FormControl my={10}>
          <Flex gap="8" flexDirection="column">
            <Box>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={credential.email}
                onChange={handleChange}
              />
            </Box>

            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={credential.password}
                onChange={handleChange}
              />
            </Box>

            <Button onClick={handleSubmit} bg={"cyan.400"}>
              Submit
            </Button>
          </Flex>
        </FormControl>
      </Box>
      
    </Container>
    
    
  );
};
