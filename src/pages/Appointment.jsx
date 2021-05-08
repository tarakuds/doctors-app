import React from "react";
import { ReactComponent as Menu } from "../assets/icons/Menu.svg";
import { ReactComponent as Profile } from "../assets/profilepics.svg";
import { ReactComponent as Arrow } from "../assets/icons/Back-Btn.svg";
import { ReactComponent as BackArrow } from "../assets/arrow-back.svg";
import Avatar from "../assets/avartar.png";
import { Box, Text, Flex } from "@chakra-ui/react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import actionButton from "../components/ClickButton";
import pageFooter from "../components/PageFooter";
import formInput from "../components/FormInput";

function Appointment() {
  return (
    <Box
      minWidth="375px"
      maxWidth="500px"
      height="100%"
      margin="5px auto"
      textAlign="center"
    >
      <Flex
        bgColor="rgb(0,144,255,100%)"
        display="flex"
        paddingTop="5%"
        borderRadius="0px 0px 25px 25px"
        alignItems="center"
      >
        <Flex>
          <Profile width="40%" />
          <Box textAlign="left">
            <Text color="#fff" fontSize="1.7rem">
              Welcome
            </Text>
            <Text color="#fff" fontSize="1.7rem" fontWeight="500">
              Jessy Manfred
            </Text>
          </Box>
        </Flex>
        <Menu />
      </Flex>

      <Flex justifyContent="space-around" alignItems="center">
        <Text fontSize="2.5rem" fontWeight="600">
          Kindly find the form
        </Text>
        <Arrow />
      </Flex>
      <Flex justifyContent="space-around">
        <Text fontWeight="700" fontSize="1.5rem">
          Gender
        </Text>
        <Flex fontSize="1.7rem" fontWeight="600" color="#0fB1Ef">
          <Word>Male</Word>
          <Words>Female</Words>
        </Flex>
      </Flex>
      <formInput placeholder="Patient Name" />
      <formInput placeholder="Patient Address" />
      <Box display="flex" justifyContent="space-between"    >
      <Box width="50%">
        <Text>Height</Text>
        <Box bg="#fff" display="flex" border="2px">
          <Text
            bgColor="#0fB1Ef"
            zIndex="1"
            borderRadius="50%"
            w="10%"
            p="15px"
            fontWeight="600"
            fontSize="1.5rem"
            color="#fff"
            textAlign="left"
          >
            in
          </Text>
          <LightBorder>
            m
          </LightBorder>
        </Box>
      </Box>
      <Box w="50%">
        <Text>Weight</Text>
        <Box bg="#fff" display="flex" border="2px">
          <Text
            bgColor="#0fB1Ef"
            zIndex="1"
            borderRadius="50%"
            w="10%"
            p="15px"
            fontWeight="600"
            fontSize="1.5rem"
            color="#fff"
            textAlign="left"
          >
            lb
          </Text>
          <LightBorder>
            kg
          </LightBorder>
        </Box>
      </Box>
      </Box>

      <actionButton data="Book Appointment" />
      <Box>
        <pageFooter />
      </Box>
    </Box>
  );
}

export default Appointment;

const Words = styled.p`
  border: 1px solid #0fb1ef;
  border-radius: 0 15px 15px 0;
  padding: 7px 15px;
`;
const Word = styled.p`
  border: 1px solid #0fb1ef;
  border-radius: 15px 0 0 15px;
  padding: 7px 15px;
`;
const LightBorder = styled.p`
  border: 1px solid #0fb1ef;
  border-radius: 0 50% 50% 0;
  width:10%;
  padding:15px 25px;
  font-weight:600;
  font-size:1.5rem;
  color:#0fB1Ef;
  text-align:right;
  margin-left:-5%;
`;
