import {Input} from "@chakra-ui/react";
import React from 'react'
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

InputField.propTypes = {
    placeholder: PropTypes.string
  };

function InputField(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <Input
        borderColor="rgba(112, 112, 112, 0.25)"
        fontSize="2rem"
        w="70%"
        p="2%"
        borderRadius="50px"
        textAlign="center"
        margin="5px auto"
        placeholder={props.placeholder}
        register={register} required
      />
    )
}

export default InputField
