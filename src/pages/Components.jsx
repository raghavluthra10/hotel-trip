// import { Flex } from "@chakra-ui/react";
import React from "react";
import Flex from "../components/Flex";
import Button from "../components/Button";
// import { Grid, GridItem } from "@chakra-ui/react";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

const Components = () => {
  return (
    <React.Fragment>
      <div>
        <Flex justifyContent="center" alignItems="center">
          <Button variant="solid-secondary">solid secondary</Button>
          <Button variant="outline-primary" size="sm">
            outline primary
          </Button>

          <Button variant="outline-primary" size="md">
            outline primary
          </Button>

          <Button variant="solid-primary" size="lg">
            outline primary
          </Button>
        </Flex>

        <h5>Grid box</h5>

        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
          <GridItem w="100%" h="100px" bg="#fff000">
            abc
          </GridItem>

          <GridItem w="100%" h="100px" bg="#fff000">
            abc
          </GridItem>

          <GridItem w="100%" h="100px" bg="#fff000">
            abc
          </GridItem>

          <GridItem w="100%" h="100px" bg="#fff000">
            abc
          </GridItem>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Components;
