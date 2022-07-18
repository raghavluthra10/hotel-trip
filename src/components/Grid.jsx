import React from "react";
import { Grid as ChakraGrid } from "@chakra-ui/react";

const Grid = ({ children, templateColumns, gap }) => {
  return (
    <ChakraGrid templateColumns={templateColumns} gap={gap}>
      {children}
    </ChakraGrid>
  );
};

export default Grid;
