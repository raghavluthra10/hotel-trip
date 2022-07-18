import React from "react";
import { Flex as ChakraFlex } from "@chakra-ui/react";

const Flex = ({
  children,
  flexWrap,
  flexDirection,
  flexGrow,
  alignItems,
  justifyContent,
}) => {
  return (
    <ChakraFlex
      flexWrap={flexWrap}
      flexDirection={flexDirection}
      flexGrow={flexGrow}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </ChakraFlex>
  );
};

export default Flex;
