import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { SearchIcon } from "@chakra-ui/icons";
import Avatar from "../Avatar";
import Divider from "../Divider";
import { IconButton } from "@chakra-ui/react";

const Header = () => {
  const bg = useColorModeValue("#000000", "##000000");
  return (
    <Box
      bg={bg}
      h="4rem"
      display="flex"
      alignItems="center"
      py="10px"
      px="50px"
      justifyContent="space-between"
    >
      <Grid
        gap="10"
        templateColumns="repeat(5, 1fr)"
        color="white"
        display="flex"
        justifyContent="center"
        fontWeight="medium"
      >
        <GridItem>
          <Link to="/">Home</Link>
        </GridItem>

        <GridItem>
          <Link to="/components">Components</Link>
        </GridItem>

        <GridItem>
          <Link to="/list">List</Link>
        </GridItem>
      </Grid>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton icon={<SearchIcon />} colorScheme="black.700" h="8" w="8" />

        <Avatar w="9" h="9" ml="5" />
      </Box>
    </Box>
  );
};

export default Header;
