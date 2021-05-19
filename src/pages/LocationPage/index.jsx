import React, { useRef, useState } from "react";
import { MapSection } from "pages/MapSectionStyles";
import LocationMap from "components/LocationMap";

const LocationPage = () => {
  const defaultCenter = { lat: 4.698311295591211, lng: -74.1408152733191 };
  const [position, setPosition] = useState(defaultCenter);
  const { lat, lng } = position;
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const addFavoriteSpot = (e) => {
    e.preventDefault();
    alert(`agregando a favs: ${inputValue}`);
    setInputValue("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <MapSection>
      {position === defaultCenter ? (
        <>
          <h2>
            Viajemos: <br />
            <span>
              Clickea el mapa<span> ✈️</span>
            </span>
          </h2>
          <p>Y buscaremos tu ubicación actual</p>
        </>
      ) : (
        <>
          <h2>
            Recorriendo: <br />
            <span>
              Tu Ubicación<span>📍</span>
            </span>
          </h2>
          <p>
            <strong>LAT:</strong>
            {lat}
            <br />
            <strong>LONG:</strong>
            {lng}
          </p>
          <form onSubmit={addFavoriteSpot}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe un nombre"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button>Guardar en Favoritos</button>
          </form>
        </>
      )}
      <LocationMap
        position={position}
        setPosition={setPosition}
        defaultCenter={defaultCenter}
        focusInput={focusInput}
      />
    </MapSection>
  );
};

export default LocationPage;
