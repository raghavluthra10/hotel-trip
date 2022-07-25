import React from "react";
import { Grid as ChakraGrid } from "@chakra-ui/react";

const Grid = (
  props
  //   {
  //   children,
  //   templateColumns,
  //   gap,
  //   color,
  //   display,
  //   justifyContent,
  //   fontWeight,
  //   bg,
  //   borderRadius,
  //   p,
  // }
) => {
  return (
    <ChakraGrid
      templateColumns={props.templateColumns}
      gap={props.gap}
      color={props.color}
      display={props.display}
      justifyContent={props.justifyContent}
      fontWeight={props.fontWeight}
      className={props.className}
      // bg={bg}
      // borderRadius={borderRadius}
      // p={p}
      {...props}
    >
      {props.children}
    </ChakraGrid>
  );
};

export default Grid;
