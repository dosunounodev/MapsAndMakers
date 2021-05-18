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
            to="/MapsAndMakers/"
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
            to="/MapsAndMakers/bogota"
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
            to="/MapsAndMakers/map"
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
            to="/MapsAndMakers/favorites"
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
