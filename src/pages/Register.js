import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Box, Button, Flex, Checkbox, Text } from "@chakra-ui/react";
import { InputButton, FormButton } from "../components/Button";
import InputField from "../components/Input";

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Box minWidth="375px" maxWidth="500px" height="100%" margin="5px auto" onSubmit={handleSubmit(onSubmit)}>
      <Box textAlign="center">
        <Logo width="30%" />
      </Box>
      <Text fontWeight="700" fontSize="2.3rem" textAlign="center">
        Create Profile
      </Text>
      <Box textAlign="center">
        <InputField placeholder="Firstname" register={register} required />
        <InputField placeholder="Lastname" register={register} required />
        <InputField placeholder="Phone Number" register={register} required/>
        <InputField placeholder="Email" register={register} required/>
        <InputField placeholder="designation" register={register} required/>
        <InputField placeholder="password" register={register} required/>
        <InputField placeholder="Confirm password" register={register} required/>

        <FormButton data="Submit" type="submit" />

        <Flex
          display="flex"
          justifyContent="space-between"
          width="80%"
          margin="auto"
        >
          <Text fontSize="1.5rem" color="rgb(112, 112, 112)">
            Have an Existing Account?
          </Text>
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/login"
          >
            <Text fontSize="1.5rem" fontWeight="700" color="#0fB1Ef">
              Sign In
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Register;
