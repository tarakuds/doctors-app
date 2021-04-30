import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Checkbox, Text } from "@chakra-ui/react";
import { ReactComponent as Lady } from "../assets/login-bg.svg";
import LoginLogo from "../assets/login-logo.svg"
// import LogoMain from "../assets/Logo.png";
import { ReactComponent as Logo } from "../assets/home-logo.svg";
// import { ReactComponent as Logos } from "../assets/login-logo.svg";
import styled from "styled-components";
import { FormButton } from "../components/Button";
import InputField from "../components/Input";

function Login() {
  return (
    <Box
      minWidth="375px"
      maxWidth="500px"
      height="100%"
      margin="5px auto"
      paddingBottom="3%"
      textAlign="center"
    >
      <Lady height="45%" z-index="-2" />
      <Box marginTop="-25%" marginBottom="2%">
        {/* <Logo /> */}
        <img src={LoginLogo} alt="logo for login" />
      </Box>
      <InputField placeholder="Username/Email" />
      <InputField placeholder="password" />
      <FormButton data="Sign In" />
      <Box w="85%" margin="auto">
        <Flex display="flex" justifyContent="space-between">
          <Checkbox borderColor="blue" fontSize="1.5rem" fontWeight="700">
            Remember
          </Checkbox>
          <Text fontSize="1.5rem" color="rgb(112, 112, 112)">
            Forgot Password?
          </Text>
        </Flex>
        <Flex display="flex" justifyContent="space-between">
          <Text fontSize="1.5rem" color="rgb(112, 112, 112)">
            Dont Have an Account?
          </Text>
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/register"
          >
            <Text fontSize="1.5rem" fontWeight="700" color="#0fB1Ef">
              Create An Account
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Login;