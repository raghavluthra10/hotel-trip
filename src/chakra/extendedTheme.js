import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    red: {
      900: "#63171B",
    },
    black: {
      700: "RGBA(0, 0, 0, 0.64)",
    },
    white: "#FFFFFF",
  },
  components: {
    Button: {
      xl: {
        small: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
        // medium
        // large
      },
      variants: {
        "outline-primary": {
          bg: "#FFFFFF",
          border: "1px solid black.900",
          variant: "outlined",
        },
        "solid-primary": {
          bg: "red.900",
          color: "#FFFFFF",
          borderColor: "#FFFFFF",
          outline: "none",
        },
        "solid-secondary": {
          bg: "black.700",
        },
      },
    },
    // Input: {
    //   variants: {
    //     outline: "outline",
    //     filled: "filled",
    //   },
    // },
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
