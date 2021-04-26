import React from "react";
import styled from "styled-components";
import LogoMain from "../assets/Logo.png";

function Logo() {
  return (
    <LogoStyle>
    <LogoContent className="logo" src={LogoMain} alt="logo" />
    </LogoStyle>
  );
}

export default Logo;

const LogoStyle = styled.div `
    background-color: #fff;
    border-radius : 50%;
    padding: 5px;
    width: 40%;
    height: 35%;
    margin: 7% auto;
    padding: auto;

`
const LogoContent = styled.img`
    margin: 15%;
    width: 70%;

`
