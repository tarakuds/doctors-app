import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
function Buttons() {
  return <Button px="5px" borderRadius="15px" w="50px" h="40px" />;
}
FormButton.propTypes = {
  data: PropTypes.string
};

export function FormButton(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  // const data = "Go"
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
       {props.data}
    </Button>
  );
}

export default Buttons;
