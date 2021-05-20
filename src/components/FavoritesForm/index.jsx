import React from "react";
import { StyledForm } from "./styles";

const FavoritesForm = React.forwardRef(
  ({ inputValue, setInputValue, addFavoriteSpot }, inputRef) => {
    return (
      <StyledForm onSubmit={addFavoriteSpot}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Escribe un nombre"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Guardar en Favs</button>
      </StyledForm>
    );
  }
);

export default FavoritesForm;
