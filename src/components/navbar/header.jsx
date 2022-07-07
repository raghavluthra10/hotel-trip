import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const bg = useColorModeValue("#000000", "##000000");
  return (
    <Box bg={bg} h="3rem" display="flex" sizes="xl">
      <div>
        <Button variant="outline-primary">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="solid-primary">
          <Link to="/components">Components</Link>
        </Button>
      </div>
    </Box>
  );
};

export default Header;
