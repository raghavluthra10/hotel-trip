import { Textarea as ChakraTextarea } from "@chakra-ui/react";
import React from "react";

const TextArea = ({
  placeholder,
  variant,
  width,
  name,
  onChange,
  type,
  value,
  size,
  id,
}) => {
  return (
    <ChakraTextarea
      placeholder={placeholder}
      variant={variant}
      focusBorderColor="black.700"
      width={width}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      size={size}
      id={id}
    />
  );
};

export default TextArea;
