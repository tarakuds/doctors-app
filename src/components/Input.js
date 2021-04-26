import {Input} from "@chakra-ui/react";
import React from 'react'
import PropTypes from "prop-types";

InputField.propTypes = {
    placeholder: PropTypes.string
  };

function InputField(props) {
    return (
        <Input
        borderColor="rgba(112, 112, 112, 0.25)"
        fontSize="2rem"
        w="70%"
        p="2%"
        borderRadius="50px"
        textAlign="center"
        margin="20px auto"
        placeholder={props.placeholder}
      />
    )
}

export default InputField
