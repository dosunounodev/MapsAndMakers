import React from "react";
import { NavLink } from "react-router-dom";
import { TopNav } from "./style";

const NavBar = () => {
  return (
    <TopNav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{
              color: "crimson",
            }}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/bogota"
            activeStyle={{
              color: "crimson",
            }}
          >
            Bogotá
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            to="/map"
            activeStyle={{
              color: "crimson",
            }}
          >
            Ubicación
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            to="/favorites"
            activeStyle={{
              color: "crimson",
            }}
          >
            Favoritos
          </NavLink>
        </li>
      </ul>
    </TopNav>
  );
};

export default NavBar;
