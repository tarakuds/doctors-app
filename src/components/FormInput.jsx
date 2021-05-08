import { Input } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form"

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

function FormInput(props) {
  const { register, handleSubmit } = useForm();
  return (
    <Input
      borderColor="rgba(188, 188, 188, 0.3)"
      fontSize="2rem"
      w="85%"
      p="2%"
      borderRadius="50px"
      textAlign="center"
      margin="5px auto"
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
    {...register("password", { required: true })}
   />
  );
}

export default FormInput;
