import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul>
      <li>
        <Link to="/MapsAndMakers/bogota">📍 Recorrer Bogotá</Link>
      </li>
      <li>
        <Link to="/MapsAndMakers/map">🗺 Recorrer Tu Ubicación Actual</Link>
      </li>
      <li>
        <Link to="/MapsAndMakers/favorites">⭐️ Guardar Spots Favoritos</Link>
      </li>
    </ul>
  );
};

export default NavList;
