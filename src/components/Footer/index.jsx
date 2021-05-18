import React from "react";
import { Link } from "react-router-dom";
import { FooterContent } from "./styles";

const Footer = () => {
  return (
    <FooterContent>
      <p>
        <Link to="/MapsAndMakers/">Maps and Makers</Link> © 2021 by{" "}
        <a href="https://tuprop.co" target="_blank" rel="noreferrer">
          TuProp
        </a>
      </p>
      <p>
        Developed with ❤️️ by{" "}
        <a
          href="https://github.com/dosunounodev"
          target="_blank"
          rel="noreferrer"
        >
          dosunouno.dev
        </a>
      </p>
    </FooterContent>
  );
};

export default Footer;
