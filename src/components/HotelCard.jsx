import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import If from "./If";

const HotelCard = ({ src, title, address, descriptionArray, mb }) => {
  const addToCart = () => {
    console.log("addToCart");
  };

  return (
    <Flex
      // maxW="1122px"
      minW="712px"
      alignItems="center"
      boxShadow="2xl"
      cursor="pointer"
      p="2rem"
      borderRadius="1rem"
      justifyContent="space-between"
      mb={mb}
      _hover={{
        // in: ,
        // initialScale: "0.2",
        boxShadow: "dark-lg",
      }}
    >
      <Box mr="2rem" minW="fit-content" overflow="hidden" borderRadius="0.5rem">
        <Image src={src} alt="" h="200px" w="250px" fit="cover" />
      </Box>

      <Flex
        justifyContent="space-between"
        flexDirection="column"
        width="100%"
        h="200px"
      >
        <Grid templateColumns="repeat(1, 1fr)">
          <Heading as="h4" size="md" mb="0.5rem">
            {title}
          </Heading>
          <Heading as="h5" size="sm" mb="0.5rem">
            Address: {address}
          </Heading>

          <If condition={descriptionArray && descriptionArray.length > 0}>
            <UnorderedList>
              {descriptionArray.map((da, key) => (
                <ListItem key={key}>{da.desc}</ListItem>
              ))}
            </UnorderedList>
          </If>
        </Grid>
        <Flex justifyContent="space-between">
          <Button variant="solid-secondary">Have a look</Button>

          <Button onClick={addToCart}>Add to cart</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HotelCard;
