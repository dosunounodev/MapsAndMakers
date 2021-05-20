import React, { useState } from "react";
import FavoritesContext from "./FavoritesContext";

const initialFavorites =
  JSON.parse(localStorage.getItem("favoritesSpotsData")) || [];

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
