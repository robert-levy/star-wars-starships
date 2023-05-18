import React from "react";
import { Wrapper,Ul, Li } from "./FooterStyled";

const Footer = () => {
  return (
    <Wrapper>
      <div>Written by Robert Levy </div>
        <Ul>
            <Li><a href="https://github.com/robert-levy">GitHub</a></Li>
            <Li><a href="https://www.linkedin.com/in/-robert-levy/">LinkedIn</a></Li>
        </Ul>
    </Wrapper>
  );
};

export default Footer;
