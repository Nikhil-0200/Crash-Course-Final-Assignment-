import { Box, Container, Flex, Grid, GridItem, Select  } from "@chakra-ui/react";
import { TicketCard } from "../Components/TicketCard";
import { Btn } from "../Components/Btn";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import React from "react";

export const Tickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");


  async function fetchData(filterValue, sortValue) {
    setLoading(true);
    try {
      let queryData = {};

      if(filterValue){
        queryData.status = filterValue;
      }

      if(sortValue){
        queryData._sort = "priority",
        queryData._order = sortValue;
      }

      let res = await axios({
        method: "get",
        url: "http://localhost:8000/tickets",
        params: queryData
      });

      setLoading(false);
      setData(res?.data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData(filterValue, sortValue);
  }, [filterValue, sortValue]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (  
    <Container maxW="4xl">
      <Flex align="center" justifyContent="end">
        <Btn onClick="/ticketcreate" text="Create Ticket" />
      </Flex>

      <Container >
        <Box>
        <Select placeholder='Sort by Priority' onChange={(e)=> setSortValue(e.target.value)}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>

        <Select placeholder="Filter by Status" onChange={(e) => setFilterValue(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </Select>
      </Box>
      </Container>
      

      <Grid templateColumns="repeat(3, 1fr)" gap={4} py={10}>
        {data.map((ele) => (
          <GridItem w="100%" key={ele.id}>
            <TicketCard key={ele.id} {...ele} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
