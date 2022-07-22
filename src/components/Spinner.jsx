import React from "react";
import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = ({ load, size }) => {
  return load ? (
    <ChakraSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size={size ? size : "lg"}
    />
  ) : null;
};

export default Spinner;
