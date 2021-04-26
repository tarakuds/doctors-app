import React, { Children } from "react";
import { Button } from "@chakra-ui/react";
function Buttons() {
  return <Button px="5px" borderRadius="15px" w="50px" h="40px" />;
}

export function InputButton(props) {
  return (
    <Button
      px="5px"
      borderRadius="15px"
      w="70%"
      h="30px"
      background="none"
      borderColor="rgba(112, 112, 112, 0.25)"
      border="2px"
    > {props.children}</Button>
  );
}

export function FormButton() {
  // const data = "Go"
  return (
    <Button
      fontSize="2rem"
      w="70%"
      bgColor="#0fB1Ef"
      border="none"
      p="2%"
      borderRadius="50px"
      textAlign="center"
      margin="20px auto"
      color="#fff"
      fontWeight="700"
    >
     Submit
    </Button>
  );
}

export function LoginButton() {
  // const data = "Go"
  return (
    <Button
      fontSize="2rem"
      w="70%"
      bgColor="#0fB1Ef"
      border="none"
      p="2%"
      borderRadius="50px"
      textAlign="center"
      margin="20px auto"
      color="#fff"
      fontWeight="700"
    >
     Sign In
    </Button>
  );
}

// export function WhiteBtn(props) {
//   const { children, ...rest } = props;

//   return (
//     <Button
//       fontSize="1.4rem"
//       px="50px"
//       py="20px"
//       bg="#fff"
//       mx="5px"
//       color="#06D444"
//       {...rest}
//     >
//       {children}
//     </Button>
//   );
// }

export default Buttons;
