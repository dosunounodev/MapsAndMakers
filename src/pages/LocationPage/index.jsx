import React from "react";
import LocationMap from "components/LocationMap";
import FavoritesForm from "components/FavoritesForm";
import useMapPage from "hooks/useMapPage";
import { MapSection } from "pages/MapSectionStyles";

const LocationPage = () => {
  const defaultCenter = { lat: 4.698311295591211, lng: -74.1408152733191 };

  const {
    position,
    setPosition,
    lat,
    lng,
    inputValue,
    setInputValue,
    inputRef,
    focusInput,
    addFavoriteSpot,
  } = useMapPage(defaultCenter);

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
          <FavoritesForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            addFavoriteSpot={addFavoriteSpot}
            ref={inputRef}
          />
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

export default React.memo(LocationPage);
