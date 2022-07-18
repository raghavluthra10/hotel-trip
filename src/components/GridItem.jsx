import React from "react";
import { GridItem as ChakraGridItem } from "@chakra-ui/react";

const GridItem = ({ children, w, h, bg }) => {
  return (
    <ChakraGridItem w={w} h={h} bg={bg}>
      {children}
    </ChakraGridItem>
  );
};

export default GridItem;
