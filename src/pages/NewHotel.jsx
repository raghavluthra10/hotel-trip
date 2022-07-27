import { FormControl, FormLabel, Heading, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import Flex from "../components/Flex";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Button from "../components/Button";

const NewHotel = () => {
  const [hotel, setHotel] = useState({
    title: "",
    address: "",
    description: "",
    bhk: "",
    pricePerNight: "",
    nearbyLandmark: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(hotel);
  };

  return (
    <Flex className="pageLayout" flexDirection="column">
      <Heading as="h3" size="lg">
        Add a new hotel
      </Heading>

      <FormControl display="flex" flexDirection="column" onSubmit={onSubmit}>
        <Box>
          <FormLabel>Title: </FormLabel>
          <Input
            placeholder="Title"
            type="text"
            value={hotel.title}
            onChange={(e) => setHotel({ ...hotel, title: e.target.value })}
          />
        </Box>

        <Box>
          <FormLabel>Address: </FormLabel>
          <Input
            placeholder="Address"
            type="text"
            value={hotel.address}
            onChange={(e) => setHotel({ ...hotel, address: e.target.value })}
          />
        </Box>

        <Box>
          <FormLabel>Description: </FormLabel>
          <TextArea
            placeholder="Description"
            type="text"
            value={hotel.description}
            onChange={(e) =>
              setHotel({ ...hotel, description: e.target.value })
            }
          />
        </Box>

        <Flex>
          <Box>
            <FormLabel>Bhk</FormLabel>
            <Input
              placeholder="Bhk"
              type="number"
              value={hotel.bhk}
              onChange={(e) => setHotel({ ...hotel, bhk: e.target.value })}
            />
          </Box>

          <Box>
            <FormLabel>Price per night</FormLabel>
            <Input
              placeholder="Price per night"
              type="number"
              value={hotel.pricePerNight}
              onChange={(e) =>
                setHotel({ ...hotel, pricePerNight: e.target.value })
              }
            />
          </Box>
        </Flex>
        <Box>
          <FormLabel>Nearby landmark</FormLabel>
          <Input
            placeholder="Nearby Landmark"
            type="text"
            value={hotel.nearbyLandmark}
            onChange={(e) =>
              setHotel({ ...hotel, nearbyLandmark: e.target.value })
            }
          />
        </Box>

        <Flex justifyContent="flex">
          <Flex flexDirection="column">
            <FormLabel>Upload Images:</FormLabel>
            <IconButton h="100px" w="100px">
              <AddIcon />
            </IconButton>
          </Flex>
          <Flex flexDirection="column">
            <Box flexGrow="1"></Box>
            <Box h="100px" w="500px" border="1px"></Box>
          </Flex>
        </Flex>
        <Button type="submit">Submit</Button>
      </FormControl>
    </Flex>
  );
};

export default NewHotel;
