import { Box } from "@chakra-ui/react";
import React from "react";

const Page = (props) => {
  return (
    <Box {...props} px="4rem" py="3.5rem" width="100%" minH="100vh">
      {props.children}
    </Box>
  );
};

export default Page;
