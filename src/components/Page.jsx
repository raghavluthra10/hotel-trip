import { Box } from "@chakra-ui/react";
import React from "react";

const Page = (props) => {
  return (
    <Box
      {...props}
      px={props.px ? props.px : "4rem"}
      py={props.px ? props.px : "3.5rem"}
      width={props.width ? props.width : "100%"}
      minH={props.minH ? props.minH : "100vh"}
    >
      {props.children}
    </Box>
  );
};

export default Page;
