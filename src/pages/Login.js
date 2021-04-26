import React from "react";
import { Link } from "react-router-dom";
import { Box,Button, Flex, Checkbox, Text } from "@chakra-ui/react";
import { ReactComponent as Lady } from "../assets/login-bg.svg";
import LogoMain from "../assets/Logo.png";
import styled from "styled-components";
import { FormButton } from "../components/Button";
import InputField from "../components/Input";

function Login() {
  return (
    <Box w="500px" height="100vh" margin="5px auto" textAlign="center">
      <Lady height="45%" z-index="-2" />
      <Logo>
        <LogoContent className="logo" src={LogoMain} alt="logo" />
      </Logo>
      <InputField placeholder="Username/Email" />
      <InputField placeholder="password" />
      <FormButton data="Sign In" />
      <Flex display="flex" justifyContent="space-between">
        <Checkbox borderColor="blue" fontSize="1.5rem">
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
  );
}

export default Login;

const Logo = styled.div`
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid rgba(112, 112, 112, 0.25);
  padding: 5px;
  width: 40%;
  height: 35%;
  margin: 0% auto;
  padding: auto;
  margin-top: -25%;
`;
const LogoContent = styled.img`
  margin: 15%;
  width: 70%;
`;
