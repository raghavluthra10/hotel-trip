import React from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

const Avatar = (props) => {
  console.log(props);
  return (
    <ChakraAvatar
      name={props.name ? props.name : "Avatar"}
      src={props.src}
      h={props.h}
      w={props.w}
      {...props}
    />
  );
};

export default Avatar;
