import React from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "./style";

const Logo = () => {
  return (
    <MainLogo>
      <Link to="/">
        <span>📍</span> Maps & Markers
      </Link>
    </MainLogo>
  );
};

export default Logo;
