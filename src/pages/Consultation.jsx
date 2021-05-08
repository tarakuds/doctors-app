import React from "react";
import { ReactComponent as Menu } from "../assets/icons/Menu.svg";
import { ReactComponent as Profile } from "../assets/profilepics.svg";
import { ReactComponent as Arrow } from "../assets/icons/Back-Btn.svg";
import { ReactComponent as BackArrow } from "../assets/arrow-back.svg";
import Avatar from "../assets/avartar.png";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pageFooter from "../components/PageFooter";

function Consultation() {
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
          Select A Specialist
        </Text>
        {/* <img src={Arro} /> */}
        <Arrow />
      </Flex>
      <Flex>
        <Box h="100px">
          <img className="avatarImage" src={Avatar} alt="doctor image" />
          {/* <Image>
         
          </Image> */}
          <Flex>
            <Text>Dr Joshua Agbogidi</Text>
            <BackArrow />
          </Flex>
          <Text>Dentist</Text>
          <Text>Rating</Text>
        </Box>
      </Flex>

      <Box>
        <pageFooter />
      </Box>
    </Box>
  );
}
export default Consultation;

// .avatarImage`
// height: 50px;
// width : 10%
// `
