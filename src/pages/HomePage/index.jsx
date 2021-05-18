import React from "react";
import NavList from "components/NavList";
import { HomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <h2>
        👋 <br /> Bienvenidx a <br />
        <span>Maps & Makers</span>
      </h2>
      <nav>
        <h3>En esta App podrás:</h3>
        <NavList />
      </nav>
    </HomePageContainer>
  );
};

export default HomePage;
