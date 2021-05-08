import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

ActionBTN.propTypes = {
  value: PropTypes.string,
};

function ActionBTN(props) {
  return (
    <Button
      fontSize="2rem"
      w="85%"
      bgColor="#0fB1Ef"
      border="none"
      p="2%"
      borderRadius="50px"
      textAlign="center"
      margin="5px auto"
      color="#fff"
      fontWeight="700"
      type="submit"
    >
      {props.value}
    </Button>
  );
}

export default ActionBTN;
