import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.svg";
import { ReactComponent as Heading } from "../assets/heading-welcome.svg";
import LogoMa from "../assets/home-logo.svg";
import { ReactComponent as LogoMain } from "../assets/home-logo.svg";
import { ReactComponent as Arrow } from "../assets/arrow-back.svg";
import { Box, Button, Text } from "@chakra-ui/react";
import {ReactComponent as LetsGo} from "../assets/letsGoBTN.svg"

function Welcome() {
  return (
    <Wrapper>
      <Box marginLeft="10%">
      <Heading />
      </Box>
      {/* <Logo>
        <LogoContent className="logo" src={LogoMa} alt="logo" />
      </Logo> */}

      <Box margin="10px 25%">
        <LogoMain width="100%" />
      </Box>

      <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/login">
        <Box margin="auto" w="40%">
        <LetsGo />
        </Box>
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
const LogoContent = styled.img`
  margin: auto 5px;
  width: 25rem;
`;
