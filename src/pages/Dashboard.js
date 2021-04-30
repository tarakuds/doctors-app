import React from "react";
import { FormButton, InputButton } from "../components/Button";
// import Wrap from "../components/Wrap";
import { ReactComponent as Menu } from "../assets/icons/Menu.svg";
import { ReactComponent as Profile } from "../assets/profilepics.svg";
import { Box, Text, Flex } from "@chakra-ui/react";

function Dashboard() {
  return (
    
      <Box minWidth="375px"
      maxWidth="500px"
      height="100%"
      margin="5px auto"
      textAlign="center">
  
        <Flex bgColor="rgb(0,144,255,100%)" display="flex" paddingTop="5%" borderRadius="0px 0px 25px 25px" alignItems="center">
          <Flex>
          <Profile width="40%" />
          <Box textAlign="left">
            <Text color="#fff" fontSize="1.7rem">Welcome</Text>
            <Text color="#fff" fontSize="1.7rem" fontWeight="500">Jessy Manfred</Text>
          </Box>
          </Flex>
          <Menu />
        </Flex>
      </Box>
  );
}

export default Dashboard;
