import {
    Container,
    Input,
    FormLabel,
    FormControl,
    Select,
    Flex,
    Box,
    Button,
  } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Edit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [ticket, setTicket] = useState({})
  const navigate = useNavigate()

  async function updateTicket() {
    try {
      setLoading(true);

      let res = await axios({
        method: "get",
        url: `http://localhost:8000/tickets/${id}`,
      });
      setTicket(res?.data);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  async function handleEdit(){
    try {
        setLoading(true)

        let updatedData = {
            title: ticket.title,
            description: ticket.description,
            assignee: ticket.assignee,
            status: ticket.status,
            priority: ticket.priority
        }

        let res = await axios({
            method: "put",
            url: `http://localhost:8000/tickets/${id}`,
            data: updatedData
        })

        if(res.status === 200){
            navigate("/tickets")
        }

    } catch (error) {
        setError(true)
        setLoading(false)
    }
  }

  useEffect(()=>{
    updateTicket()
  }, [])

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {title, status, priority, description, assignee} = ticket


  return (
    
    <Container my={5}>
    <FormControl>
      <Flex flexDirection="column" gap={4}>
        <Box>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTicket({...ticket, title: e.target.value})}
          />
        </Box>

        <Box>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setTicket({...ticket, description: e.target.value})}
          />
        </Box>

        <Box>
          <FormLabel>Assignee</FormLabel>
          <Select
            placeholder="Select Assignee"
            value={assignee}
            onChange={(e) => setTicket({...ticket, assignee: e.target.value})}
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
            value={status}
            onChange={(e) => setTicket({...ticket, status: e.target.value})}
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
            value={priority}
            onChange={(e) => setTicket({...ticket, priority: Number(e.target.value)})}
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
                onClick={handleEdit}    
              >
                Submit
              </Button>
            </Box>

      </Flex>
    </FormControl>
  </Container>
  )
};
