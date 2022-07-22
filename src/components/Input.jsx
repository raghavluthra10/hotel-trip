import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
const Input = ({ children, placeholder, variant }) => {
  return (
    <ChakraInput
      placeholder={placeholder}
      variant={variant}
      focusBorderColor="black.700"
    ></ChakraInput>
  );
};

export default Input;
