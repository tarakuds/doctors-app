import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Checkbox,
  Text,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { ReactComponent as Lady } from "../assets/login-bg.svg";
import LoginLogo from "../assets/login-logo.svg";
import { ReactComponent as Logo } from "../assets/home-logo.svg";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// import actionButton from "../components/ClickButton";
import FormInput from "../components/FormInput";
import ActionBTN from "../components/ActionBTN";

function Login() {
  const { register, handleSubmit } = useForm();

  const nowSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      minWidth="375px"
      maxWidth="500px"
      height="100%"
      margin="5px auto"
      paddingBottom="3%"
      textAlign="center"
    >
      <Lady height="45%" z-index="-2" />
      <Box marginTop="-25%" marginBottom="2%">
        {/* <Logo /> */}
        <img src={LoginLogo} alt="logo for login" />
      </Box>
      <Box as="form" onSubmit={handleSubmit(nowSubmit)}>
        <Input
          borderColor="rgba(188, 188, 188, 0.3)"
          fontSize="2rem"
          w="85%"
          p="2%"
          borderRadius="50px"
          textAlign="center"
          margin="5px auto"
          type="text"
          placeholder="Username / Email"
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
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {/* <Button type="submit">Submit</Button> */}

        {/* <FormInput placeholder="Username / Email" {...register("email", { required: true })} />
        <FormInput placeholder="Password" type="password" {...register("password", { required: true })} /> */}
        <ActionBTN value="Login" type="submit" />
      </Box>

      <Box w="85%" margin="auto">
        <Flex display="flex" justifyContent="space-between">
          <Checkbox>Remember Me</Checkbox>
          {/* <FormControl control={<Controller as={Checkbox} control={control} name="remember" defaultValue={false} color="#000" />} label="Remember Me" /> */}
          <Text fontSize="1.5rem" color="rgb(112, 112, 112)">
            Forgot Password?
          </Text>
        </Flex>
        <Flex display="flex" justifyContent="space-between">
          <Text fontSize="1.5rem" color="rgb(112, 112, 112)">
            Dont Have an Account?
          </Text>
          <Link
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/register"
          >
            <Text fontSize="1.5rem" fontWeight="700" color="#0fB1Ef">
              Create An Account
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Login;
