import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, variant, size, onClick }) => {
  return (
    <ChakraButton
      variant={variant ? variant : "solid-primary"}
      size={size ? size : "md"}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
