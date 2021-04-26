import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// import Logo from '../components/Logo'
import { Box, Input, Button, Flex, Checkbox, Text } from "@chakra-ui/react";
import { InputButton, FormButton } from "../components/Button";

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
        <Input
          borderColor="rgba(112, 112, 112, 0.25)"
          fontSize="2rem"
          w="70%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="10px auto"
          placeholder="Firstname"
        />
        <Input
          borderColor="rgba(112, 112, 112, 0.25)"
          fontSize="2rem"
          w="70%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="10px auto"
          placeholder="Lastname"
        />
        <Input
          borderColor="rgba(112, 112, 112, 0.25)"
          fontSize="2rem"
          w="70%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="10px auto"
          placeholder="Phone Number"
        />
        <Input
          borderColor="rgba(112, 112, 112, 0.25)"
          fontSize="2rem"
          w="70%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="10px auto"
          placeholder="Email"
        />
        <Input
          borderColor="rgba(112, 112, 112, 0.25)"
          fontSize="2rem"
          w="70%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="10px auto"
          placeholder="password"
        />
        <Input
          borderColor="rgba(112, 112, 112, 0.25)"
          fontSize="2rem"
          w="70%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="10px auto"
          placeholder="Confirm Password"
        />
        <FormButton />

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
// const Logo = styled.div`
//   background-color: #fff;
//   border-radius: 50%;
//   border: 1px solid rgba(112, 112, 112, 0.25);
//   padding: 5px;
//   width: 40%;
//   height: 35%;
//   margin: 0% auto;
//   padding: auto;
//   margin-top: -25%;
// `;
// const LogoContent = styled.img`
//   margin: 15%;
//   width: 70%;
// `;
