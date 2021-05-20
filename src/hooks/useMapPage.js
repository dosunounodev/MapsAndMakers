import FavoritesContext from "contexts/FavoritesContext";
import { useCallback, useContext, useRef, useState } from "react";

const useMapPage = (defaultCenter) => {
  const [position, setPosition] = useState(defaultCenter);
  const { lat, lng } = position;
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const focusInput = useCallback(() => {
    inputRef.current.focus();
  }, []);

  const addFavoriteSpot = (e) => {
    e.preventDefault();
    alert(`agregando a favs: ${inputValue}`);

    const favoritesIds = favorites.map((fav) => fav.id);
    const newID = favoritesIds.length === 0 ? 1 : Math.max(...favoritesIds) + 1;

    const favoriteToAdd = {
      id: newID,
      name: inputValue,
      lat,
      lng,
    };

    const newFavorites = [...favorites, favoriteToAdd];

    setFavorites(newFavorites);
    localStorage.setItem("favoritesSpotsData", JSON.stringify(newFavorites));
    setInputValue("");
  };

  return {
    position,
    setPosition,
    lat,
    lng,
    inputValue,
    setInputValue,
    inputRef,
    focusInput,
    addFavoriteSpot,
    favorites,
  };
};

export default useMapPage;
