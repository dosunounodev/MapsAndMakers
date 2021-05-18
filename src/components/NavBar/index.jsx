import React from "react";
import { NavLink } from "react-router-dom";
import { TopNav } from "./style";

const NavBar = () => {
  return (
    <TopNav>
      <ul>
        <li>
          <NavLink exact to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/map">
            Bogotá
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/map">
            Ubicación
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/favorites">
            Favoritos
          </NavLink>
        </li>
      </ul>
    </TopNav>
  );
};

export default NavBar;
