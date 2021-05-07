import React from "react";
import { ReactComponent as Menu } from "../assets/icons/Menu.svg";
import { ReactComponent as Profile } from "../assets/profilepics.svg";
import Inquire from "../assets/icons/Inquire.svg";
import Consult from "../assets/icons/Consult.svg";
import Pharmacy from "../assets/icons/pharmacy.svg";
import Appointment from "../assets/icons/Appointment.svg";
import Tips from "../assets/icons/Tips.svg";
import { Box, Text, Flex } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer";

function Dashboard() {
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

      <Text fontSize="2.5rem">How can we be of help?</Text>
      <Flex display="flex" flexWrap="wrap" justifyContent="center" >
        <Boxes >
        <Link to="/login">
          {/* <Inquire /> */}
          <img src={Inquire}  alt="enquiry"/>
        </Link>
        </Boxes>
        <Boxes>
        <Link to="/login">
          {/* <Consult /> */}
          <img src={Consult} />
        </Link>
        </Boxes>
        <Boxes flex="1">
        <Link to="/login">
          <img src={Pharmacy} />
        </Link>
        </Boxes>
        <Boxes>
        <Link to="/login">
          <img src={Appointment} />
        </Link>
        </Boxes>
        <Boxes>
        <Link to="/login">
          <img src={Tips} />
        </Link>
        </Boxes>
      </Flex>
      
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Dashboard;

const Boxes= styled.div`
  margin: 4%;
`