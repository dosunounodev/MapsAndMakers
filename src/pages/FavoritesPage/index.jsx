import React, { useContext, useEffect, useState } from "react";
import { MapSection } from "pages/MapSectionStyles";
import FavoritesSelect from "components/FavoritesSelect";
import FavoritesContext from "contexts/FavoritesContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const FavoritesPage = () => {
  const [favoriteSelected, setFavoriteSelected] = useState(0);
  const [isMap, setIsMap] = useState(null);
  const { favorites } = useContext(FavoritesContext);
  const favoriteMatch = favorites.find((fav) => fav.id === favoriteSelected);

  useEffect(() => {
    if (isMap && favoriteMatch) {
      const { map } = isMap;
      map.flyTo([favoriteMatch.lat, favoriteMatch.lng]);
    }
  }, [isMap, favoriteMatch]);

  return (
    <MapSection>
      <h2>
        Recorriendo: <br />
        <span>
          {favoriteMatch ? favoriteMatch.name : "Tus Favoritos"}
          <span>📍</span>
        </span>
      </h2>
      <p>
        <strong>LAT:</strong>
        {favoriteMatch ? favoriteMatch.lat : ""}
        <br />
        <strong>LONG:</strong>
        {favoriteMatch ? favoriteMatch.lng : ""}
      </p>
      <FavoritesSelect setFavoriteSelected={setFavoriteSelected} />
      {favoriteMatch ? (
        <MapContainer
          center={[favoriteMatch.lat, favoriteMatch.lng]}
          zoom={13}
          scrollWheelZoom={true}
          whenCreated={(map) => setIsMap({ map })}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[favoriteMatch.lat, favoriteMatch.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <h3
          style={{
            display: "grid",
            placeItems: "center",
            width: "80%",
            height: "100%",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Elige un ⭐️ Favorito <br />
          para visualizar el mapa
        </h3>
      )}
    </MapSection>
  );
};

export default FavoritesPage;
