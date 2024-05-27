import {
  Card,
  CardHeader,
  Text,
  Heading,
  CardBody,
  CardFooter
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


import { Btn } from "./Btn";

export const TicketCard = ({id, title, status, priority}) => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/tickets/${id}`)
  }

  return (
      <Card h="280px">
        <p>{id}</p>
        <CardHeader>
          <Heading size="md">Title: {title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Status: {status}</Text>
          <Text>Priority: {priority}</Text>
        </CardBody>
        <CardFooter>
          <Btn text="View" onClick3= {handleClick} />
        </CardFooter>
      </Card>
  );
};
