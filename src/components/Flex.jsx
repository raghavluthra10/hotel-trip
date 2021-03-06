import React from "react";
import { Flex as ChakraFlex } from "@chakra-ui/react";

const Flex = ({
  children,
  flexWrap,
  flexDirection,
  flexGrow,
  alignItems,
  justifyContent,
  className,
}) => {
  return (
    <ChakraFlex
      className={className}
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
