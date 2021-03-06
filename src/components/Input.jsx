import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
const Input = ({
  placeholder,
  variant,
  width,
  name,
  onChange,
  type,
  value,
  id,
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
      id={id}
    />
  );
};

export default Input;
