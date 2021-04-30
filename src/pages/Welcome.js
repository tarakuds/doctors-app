import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.svg";
import { ReactComponent as Heading } from "../assets/heading-welcome.svg";
import LogoMa from "../assets/home-logo.svg";
import { ReactComponent as LogoMain } from "../assets/home-logo.svg";
import { ReactComponent as Arrow } from "../assets/arrow-back.svg";
import { Box, Button, Text } from "@chakra-ui/react";

function Welcome() {
  return (
    <Wrapper>
      <Header>
        <Heading />
      </Header>
      {/* <Logo>
        <LogoContent className="logo" src={LogoMa} alt="logo" />
      </Logo> */}

      <Box margin="10px 25%">
        <LogoMain width="100%" />
      </Box>

      <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/login">
        <Button
          boxShadow="dark-lg"
          px="5px"
          py="5px"
          borderRadius="20px"
          border="none"
          w="30%"
          margin="auto 35%"
        >
          <Text marginRight="10%" fontSize="1.5rem" fontWeight="700">
            Lets Go
          </Text>
          <Arrow />
        </Button>
      </Link>
    </Wrapper>
  );
}

export default Welcome;

const Wrapper = styled.div`
  background-color: red;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 812px;
  max-width: 500px;
  min-width: 325px;
  margin: 5px auto;
  padding-top: 3%;
`;

const Logo = styled.div`
  border-radius: 50%;
  padding: 5px;
  width: 40%;
  height: 35%;
  margin: 7% auto;
  padding: auto;
`;
const Header = styled.div`
  margin: 0 10%;
  width: 50%;
`;
const LogoContent = styled.img`
  margin: auto 5px;
  width: 25rem;
`;
