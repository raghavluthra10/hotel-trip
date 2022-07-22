import React from "react";
import {
  Avatar as ChakraAvatar,
  //   AvatarBadge,
  //   AvatarGroup,
} from "@chakra-ui/react";

const Avatar = ({ src, name }) => {
  return <ChakraAvatar name={name} src={src} />;
};

export default Avatar;
