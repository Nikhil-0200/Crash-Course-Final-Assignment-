import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Btn } from "../Components/Btn";
import { useNavigate } from "react-router-dom";


export const TicketView = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const {id} = useParams()

  async function fetchData(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:8000/tickets/${id}`,
      });

      setLoading(false);
      setData(res?.data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  async function handleClick(){
    try {
      let res = await axios({
        method: "delete",
        url: `http://localhost:8000/tickets/${id}`
      })
      if(res.status === 200){
        navigate("/tickets")
      }
    } catch (error) {
      setLoading(false)
      setError(true);
    }
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
          <Btn text="Delete" onClick2={handleClick}/>
          <Btn text="Edit" onClick={()=> navigate(`/ticket/edit/${id}`)}/>
        </CardFooter>
      </Card>
  )
};
