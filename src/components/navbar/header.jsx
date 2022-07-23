import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { SearchIcon } from "@chakra-ui/icons";
import Avatar from "../Avatar";
import { IconButton } from "@chakra-ui/react";
import If from "../If";

const Header = () => {
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  const bg = useColorModeValue("#000000", "##000000");
  return (
    <Box
      bg={bg}
      h="4rem"
      display="flex"
      alignItems="center"
      py="12px"
      px="48px"
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

        <Avatar
          w="9"
          h="9"
          ml="5"
          cursor="pointer"
          onClick={() => setShowAvatarOptions(!showAvatarOptions)}
        />

        <If condition={showAvatarOptions}>
          <Grid
            templateColumns="repeat(1, 1fr)"
            gap={2}
            bg="white"
            top="64px"
            right="16px"
            zIndex="1"
            position="absolute"
            boxShadow="2xl"
            borderRadius="0.5rem"
            p="1rem"
          >
            <GridItem>
              <Link to="/login">Login</Link>
            </GridItem>

            <GridItem>
              <Link to="/signup">Sign up</Link>
            </GridItem>

            <GridItem>
              <Link to="/profile">Profile</Link>
            </GridItem>
          </Grid>
        </If>
      </Box>
    </Box>
  );
};

export default Header;
