import {
  Card,
  CardHeader,
  Text,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";


import { Btn } from "./Btn";

export const TicketCard = ({id, title, status, priority}) => {
  return (
      <Card h="280px">
        <CardHeader>
          <Heading size="md">Title: {title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Status: {status}</Text>
          <Text>Priority: {priority}</Text>
        </CardBody>
        <CardFooter>
          <Btn text="View" onClick= {`/tickets/${id}`} />
        </CardFooter>
      </Card>
  );
};
