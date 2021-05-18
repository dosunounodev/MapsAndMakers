import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul>
      <li>
        <Link to="/bogota">📍 Recorrer Bogotá</Link>
      </li>
      <li>
        <Link to="/map">🗺 Recorrer Tu Ubicación Actual</Link>
      </li>
      <li>
        <Link to="/favorites">⭐️ Guardar Spots Favoritos</Link>
      </li>
    </ul>
  );
};

export default NavList;
