import React, { useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

function LocationMarker({ position, setPosition, defaultCenter, focusInput }) {
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      drag() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const confirmOk = window.confirm(
            "Quieres agregar este punto a tus favoritos?"
          );
          confirmOk && focusInput();
        }
      },
    }),
    [setPosition, focusInput]
  );

  const addToFavorite = () => {
    focusInput();
  };

  return position === defaultCenter ? null : (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span className="AddFavorite" onClick={addToFavorite}>
          Agregar a Favoritos
        </span>
      </Popup>
    </Marker>
  );
}

const LocationMap = ({ position, setPosition, defaultCenter, focusInput }) => {
  return (
    <MapContainer center={defaultCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        position={position}
        setPosition={setPosition}
        defaultCenter={defaultCenter}
        focusInput={focusInput}
      />
    </MapContainer>
  );
};

export default LocationMap;
