import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
const Input = ({
  children,
  placeholder,
  variant,
  width,
  name,
  onChange,
  type,
  value,
}) => {
  return (
    <ChakraInput
      placeholder={placeholder}
      variant={variant}
      focusBorderColor="black.700"
      width={width}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    ></ChakraInput>
  );
};

export default Input;
