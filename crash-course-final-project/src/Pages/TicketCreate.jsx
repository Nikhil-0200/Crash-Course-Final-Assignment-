import {
  Container,
  Heading,
  Input,
  FormLabel,
  FormControl,
  Select,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";

import { Btn } from "../Components/Btn";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TicketCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit() {
    const newData = {
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
    };

    try {
      setLoading(false);

      let res = await axios({
        method: "post",
        url: "http://localhost:8000/tickets",
        data: newData,
      });

      if (res.status === 201) {
        navigate("/tickets");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <Container shadow="md" rounded="xl" maxW="4xl" my={10} py={5}>
      <Heading textAlign="center">Ticket Create Page</Heading>

      <Container my={5}>
        <FormControl>
          <Flex flexDirection="column" gap={4}>
            <Box>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel>Assignee</FormLabel>
              <Select
                placeholder="Select Assignee"
                onChange={(e) => setAssignee(e.target.value)}
              >
                <option value="Nikihl">Nikhil</option>
                <option value="Karan">Karan</option>
                <option value="Komal">Komal</option>
                <option value="Aman">Aman</option>
                <option value="Nikita">Nikita</option>
                <option value="Shivani">Shivani</option>
                <option value="Shyam">Shyam</option>
                <option value="Ram">Ram</option>
              </Select>
            </Box>

            <Box>
              <FormLabel>Status</FormLabel>
              <Select
                placeholder="Select Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="progress">Progress</option>
                <option value="completed">Completed</option>
              </Select>
            </Box>

            <Box>
              <FormLabel>Priority</FormLabel>
              <Select
                placeholder="Select Priority"
                onChange={(e) => setPriority(Number(e.target.value))}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </Box>

            <Box m="auto">
              <Button
                colorScheme="red"
                border="4px"
                borderColor="gray.400"
                px={10}
                py={5}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </FormControl>
      </Container>
    </Container>
  );
};
