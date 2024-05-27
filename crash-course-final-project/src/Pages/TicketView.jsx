import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Heading, Text, Spacer } from "@chakra-ui/react";
import { Btn } from "../Components/Btn";


export const TicketView = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const {id} = useParams()

  async function fetchData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:8000/tickets/${id}`,
      });

      setLoading(false);
      setData(res?.data);
    console.log(res?.data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {title, status, priority, description, assignee} = data

  return (
    <Card h="300px" w="50%" m="auto" my={6}>
        <CardHeader>
          <Heading size="md">Title: {title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Description: {description}</Text>
          <Text>Assignee: {assignee}</Text>
          <Text>Status: {status}</Text>
          <Text>Priority: {priority}</Text>
        </CardBody>
        <CardFooter gap={4}>
          <Btn text="Delete"/>
          <Btn text="Edit"/>
        </CardFooter>
      </Card>
  )
};
