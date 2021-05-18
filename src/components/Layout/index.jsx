import React from "react";
import Logo from "components/Logo";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { HeaderContainer, MainContainer, FooterContainer } from "./style";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <NavBar />
      </HeaderContainer>
      <MainContainer>{children}</MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default Layout;
