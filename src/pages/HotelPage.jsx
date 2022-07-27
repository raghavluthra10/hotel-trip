import React from "react";
import Flex from "../components/Flex";
import { Box } from "@chakra-ui/react";

const images = [
  { url: "https://picsum.photos/id/1018/1000/600/" },
  { url: "https://picsum.photos/id/1015/1000/600/" },
  { url: "https://picsum.photos/id/1019/1000/600/" },
];

const HotelPage = () => {
  return (
    <Flex className="pageLayout" flexDirection="column">
      {/* image section */}
      {/* <Box border="1px" maxH="300px" maxW="1000px"> */}
      <img
        style={{ maxHeight: "300px", maxWidth: "1000px" }}
        alt=""
        src="https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
      />
      {/* </Box> */}

      {/* CTA */}
      {/* decription */}
      {/* CTA */}
      {/* map on google */}
    </Flex>
  );
};

export default HotelPage;
