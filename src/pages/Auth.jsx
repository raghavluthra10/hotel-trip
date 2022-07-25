import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Heading } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import Flex from "../components/Flex";

export const Login = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordInputType, setPasswordInputType] = useState(true);

  const loginUser = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast({
        title: "Required",
        description: "Please fill all login details!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Logged in",
      description: "Taking you to Home page",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setFormData({
      email: "",
      password: "",
    });
    console.log("formdata", formData);
  };

  return (
    <Flex display="flex" flexDirection="column" alignItems="center">
      <Box
        mt="100px"
        boxShadow="2xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        borderRadius="0.5rem"
        p="2rem"
        width="352px"
      >
        <Heading as="h3" size="lg" mb="2rem">
          Login
        </Heading>
        <form onSubmit={loginUser}>
          <Box mb="1rem">
            <Heading as="h6" size="xs" mb="0.25rem">
              Email
            </Heading>
            <Input
              width="296px"
              placeholder="email@example.com"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Box>

          <Box mb="2rem">
            <Box display="flex" justifyContent="space-between">
              <Heading as="h6" size="xs" mb="0.25rem">
                Password
              </Heading>

              <ViewIcon
                onClick={() => setPasswordInputType(!passwordInputType)}
                cursor="pointer"
              />
            </Box>
            <Input
              type={passwordInputType ? "password" : "text"}
              width="296px"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Box>
          <Button type="submit" width="100%">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export const SignUp = () => {
  const toast = useToast();
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const [passwordInputType, setPasswordInputType] = useState(true);
  const [cPasswordInputType, setCPasswordInputType] = useState(true);

  const signupUser = (e) => {
    e.preventDefault();

    console.log(signUpData);
  };

  return (
    <Flex display="flex" flexDirection="column" alignItems="center">
      <Box
        mt="100px"
        boxShadow="2xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        borderRadius="0.5rem"
        p="2rem"
        width="352px"
      >
        <Heading as="h3" size="lg" mb="2rem">
          Sign Up
        </Heading>
        <form onSubmit={signupUser}>
          <Box mb="1rem">
            <Heading as="h6" size="xs" mb="0.25rem">
              Email
            </Heading>
            <Input
              width="296px"
              placeholder="email@example.com"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
            />
          </Box>

          <Box mb="1rem">
            <Box display="flex" justifyContent="space-between">
              <Heading as="h6" size="xs" mb="0.25rem">
                Password
              </Heading>

              <ViewIcon
                onClick={() => setPasswordInputType(!passwordInputType)}
                cursor="pointer"
              />
            </Box>
            <Input
              type={passwordInputType ? "password" : "text"}
              width="296px"
              placeholder="password"
              value={signUpData.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
          </Box>

          <Box mb="2rem">
            <Box display="flex" justifyContent="space-between">
              <Heading as="h6" size="xs" mb="0.25rem">
                Password
              </Heading>

              <ViewIcon
                onClick={() => setCPasswordInputType(!cPasswordInputType)}
                cursor="pointer"
              />
            </Box>

            <Input
              type={cPasswordInputType ? "password" : "text"}
              width="296px"
              placeholder="confirm password"
              value={signUpData.cPassword}
              onChange={(e) =>
                setSignUpData({ ...signUpData, cPassword: e.target.value })
              }
            />
          </Box>
          <Button type="submit" width="100%">
            Sign Up
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
