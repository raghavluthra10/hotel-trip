import React from "react";
import { Grid as ChakraGrid } from "@chakra-ui/react";

const Grid = ({
  children,
  templateColumns,
  gap,
  color,
  display,
  justifyContent,
  fontWeight,
}) => {
  return (
    <ChakraGrid
      templateColumns={templateColumns}
      gap={gap}
      color={color}
      display={display}
      justifyContent={justifyContent}
      fontWeight={fontWeight}
    >
      {children}
    </ChakraGrid>
  );
};

export default Grid;
