// import { Flex } from "@chakra-ui/react";
import React from "react";
import Flex from "../components/Flex";
import Button from "../components/Button";
// import { Grid, GridItem } from "@chakra-ui/react";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import Input from "../components/Input";
import Spinner from "../components/Spinner";
import { useToast } from "@chakra-ui/react";
import Avatar from "../components/Avatar";

const Components = () => {
  const toast = useToast();
  return (
    <React.Fragment>
      <Flex flexDirection="column">
        <Flex justifyContent="center" alignItems="center">
          <h3>Buttons</h3>
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
        <br />

        <h3>Grid box</h3>

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

        <br />
        <h3>Input</h3>

        <Input
          placeholder="primary: variant => outlined "
          variant="outline"
        ></Input>

        <Input
          placeholder="secondary: variant => filled "
          variant="filled"
        ></Input>

        <br />

        <h3>Spinner / Loader</h3>

        <Spinner load={true} />

        <br />
        <h3> Toast </h3>
        <Button
          size="lg"
          onClick={() =>
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "error",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          {" "}
          show toast{" "}
        </Button>

        <br />
        <h3>Avatar</h3>
        <Avatar name="raghv" src="https://bit.ly/dan-abramov" />
      </Flex>
    </React.Fragment>
  );
};

export default Components;
