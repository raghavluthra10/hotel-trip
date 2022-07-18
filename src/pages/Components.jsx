// import { Flex } from "@chakra-ui/react";
import React from "react";
import Flex from "../components/Flex";
import Button from "../components/Button";
// import { Button } from "@chakra-ui/react";

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
      </div>
    </React.Fragment>
  );
};

export default Components;
