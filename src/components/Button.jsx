import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, variant, size, onClick, type, width }) => {
  return (
    <ChakraButton
      variant={variant ? variant : "solid-primary"}
      size={size ? size : "md"}
      onClick={onClick}
      type={type}
      width={width}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
