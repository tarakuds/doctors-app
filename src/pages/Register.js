import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Box, Button, Flex, Checkbox, Text } from "@chakra-ui/react";
import { InputButton, FormButton } from "../components/Button";
import InputField from "../components/Input";

function Register() {
  return (
    <Box w="500px" height="100vh" margin="5px auto">
      <Box textAlign="center">
        <Logo width="30%" />
      </Box>
      <Text fontWeight="700" fontSize="2.3rem" textAlign="center">
        Create Profile
      </Text>
      <Box textAlign="center">
        <InputField placeholder="Firstname" />
        <InputField placeholder="Lastname" />
        <InputField placeholder="Phone Number" />
        <InputField placeholder="Email" />
        <InputField placeholder="password" />
        <InputField placeholder="Confirm password" />

        <FormButton data="Submit" />

        <Flex
          display="flex"
          justifyContent="space-between"
          width="80%"
          margin="auto"
        >
          <Text fontSize="1.5rem" color="rgb(112, 112, 112)">
            Have an Existing Account?
          </Text>
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/login"
          >
            <Text fontSize="1.5rem" fontWeight="700" color="#0fB1Ef">
              Sign In
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Register;
