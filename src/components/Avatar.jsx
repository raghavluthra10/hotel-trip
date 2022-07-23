import React from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

const Avatar = (props) => {
  return (
    <ChakraAvatar
      name={props.name ? props.name : "Avatar"}
      src={props.src}
      h={props.h}
      w={props.w}
      {...props}
      onClick={props.onClick}
    />
  );
};

export default Avatar;
