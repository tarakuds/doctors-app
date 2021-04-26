import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.svg";
import { ReactComponent as Heading } from "../assets/heading-welcome.svg";
import LogoMain from "../assets/Logo.svg";
import { ReactComponent as Arrow } from "../assets/arrow-back.svg";
import { Button, Text } from "@chakra-ui/react";

function Welcome() {
  return (
    <Wrapper>
      <Header>
        <Heading />
      </Header>
      <Logo>
        <LogoContent className="logo" src={LogoMain} alt="logo" />
      </Logo>

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
  height: 95vh;
  width: 500px;
  margin: 5px auto;
  padding-top: 3%;
`;

const Logo = styled.div`
  background-color: #fff;
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
  margin: auto 10%;
  width: 70%;
`;
