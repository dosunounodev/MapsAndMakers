import React from "react";
import BogotaMap from "components/BogotaMap";
import FavoritesForm from "components/FavoritesForm";
import useMapPage from "hooks/useMapPage";
import { MapSection } from "pages/MapSectionStyles";

const BogotaPage = () => {
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
      <h2>
        Recorriendo: <br />
        <span>
          Bogotá<span>📍</span>
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
      <BogotaMap
        position={position}
        setPosition={setPosition}
        defaultCenter={defaultCenter}
        focusInput={focusInput}
      />
    </MapSection>
  );
};

export default React.memo(BogotaPage);
