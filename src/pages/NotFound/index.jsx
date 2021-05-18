import React from "react";
import { HomePageContainer } from "pages/HomePage/styles";
import NavList from "components/NavList";

const NotFound = () => {
  return (
    <HomePageContainer>
      <h2>
        🤔
        <br /> Error 404 <br />
        <span>Not Found</span>
      </h2>
      <p>Parece que no podemos encontrar lo que estas buscando 😵</p>
      <nav>
        <h3>🔎 Tal vez buscabas:</h3>
        <NavList />
      </nav>
    </HomePageContainer>
  );
};

export default NotFound;
