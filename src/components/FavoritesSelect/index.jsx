import FavoritesContext from "contexts/FavoritesContext";
import React, { useContext, useState } from "react";
import { StyledForm } from "./styles";

const FavoritesSelect = ({ setFavoriteSelected }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [inputValue, setInputValue] = useState(0);
  const handleSelect = (e) => {
    setInputValue(Number(e.target.value));
    setFavoriteSelected(Number(e.target.value));
  };

  const handleDelete = () => {
    const deleteConfirmed = window.confirm(
      `Seguro quieres borrar este favorito?`
    );
    if (deleteConfirmed) {
      const newFavorites = favorites.filter((fav) => fav.id !== inputValue);
      setFavorites(newFavorites);
      localStorage.setItem("favoritesSpotsData", JSON.stringify(newFavorites));
      setInputValue(0);
    }
  };

  const handleEdit = () => {
    const newName = window.prompt(`Escribe un nuevo nombre:`);
    if (newName) {
      const favToEdit = favorites.find((fav) => fav.id === inputValue);
      const editedFav = { ...favToEdit, name: newName };
      console.log(editedFav);
      const newFavorites = favorites.map((fav) =>
        fav.id !== inputValue ? fav : editedFav
      );
      setFavorites(newFavorites);
      localStorage.setItem("favoritesSpotsData", JSON.stringify(newFavorites));
    }
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <select onChange={handleSelect} value={inputValue}>
        <option value={0}>Elige un Favorito</option>
        {favorites.map((fav) => (
          <option key={fav.id} value={fav.id}>
            {fav.name}
          </option>
        ))}
      </select>
      {inputValue !== 0 && (
        <>
          <button onClick={handleDelete} className="btn-delete">
            🗑
          </button>{" "}
          <button onClick={handleEdit} className="btn-edit">
            ✍️
          </button>
        </>
      )}
    </StyledForm>
  );
};

export default FavoritesSelect;
