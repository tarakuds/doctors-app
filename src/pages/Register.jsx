import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Box, Flex, Text, Input } from "@chakra-ui/react";
import FormInput from "../components/FormInput";
// import actionButton from "../components/ClickButton";
import ActionBTN from "../components/ActionBTN";

function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      minWidth="375px"
      maxWidth="500px"
      height="100%"
      margin="5px auto"
      paddingBottom="3%"
    >
      <Box textAlign="center">
        <Logo width="30%" />
      </Box>
      <Text fontWeight="700" fontSize="2.3rem" textAlign="center">
        Create Profile
      </Text>
      <Box textAlign="center">
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="text"
            placeholder="First Name"
            {...register("firstname", { required: true })}
          />
           <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="text"
            placeholder="Last Name"
            {...register("lastname", { required: true })}
          />
           <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="text"
            placeholder="Phone Number"
            {...register("phonenumber", { required: true })}
          />
           <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
           <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="text"
            placeholder="Designation"
            {...register("designation", { required: true })}
          />
           <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength:8 })}
          />
           <Input
            borderColor="rgba(188, 188, 188, 0.3)"
            fontSize="2rem"
            w="85%"
            p="2%"
            borderRadius="50px"
            textAlign="center"
            margin="5px auto"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmpassword", { required: true })}
          />
        {/* <FormInput
          name="First Name"
          placeholder="First Name"
          type="text"
          required
        />
        <FormInput
          name="Last Name"
          placeholder="Last Name"
          type="text"
          required
        />
        <FormInput
          name="Phone Number"
          placeholder="Phone Number"
          type="text"
          required
        />
        <FormInput name="Email" placeholder="Email" type="text" required />
        <FormInput
          name="Designation"
          placeholder="Designation"
          type="text"
          required
        />
        <FormInput
          name="Password"
          placeholder="Password"
          type="password"
          required
        />
        <FormInput
          name="Confirm password"
          placeholder="Confirm Password"
          type="password"
          required
        /> */}

        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/login"><ActionBTN value="Submit" type="submit" /></Link>
        </Box>

        <Flex
          display="flex"
          justifyContent="space-between"
          width="85%"
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
