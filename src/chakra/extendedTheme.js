import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    red: {
      900: "#63171B",
    },
    black: {
      900: "RGBA(0, 0, 0, 0.92)",
    },
    white: "#FFFFFF",
  },
  components: {
    Button: {
      sizes: {
        sm: {
          p: "0.625rem",
          fontSize: "0.75rem",
        },
        md: {
          fontSize: "1rem",
        },
        lg: {
          py: "1rem",
          px: "1.25rem",
          fontSize: "1.5rem",
        },
      },
      variants: {
        "outline-primary": {
          bg: "#FFFFFF",
          boxShadow: "0 0 2px 2px #efdfde",
          variant: "outlined",
        },
        "solid-primary": {
          bg: "red.900",
          color: "#FFFFFF",
        },
        "solid-secondary": {
          bg: "black.900",
          color: "#FFFFFF",
        },
      },
    },
    // Input:st
    // Navbar: {},
  },
  styles: {
    global: {
      a: {
        // remove hyper link focus
      },
    },
  },
});

export default theme;
