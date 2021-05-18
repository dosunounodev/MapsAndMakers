import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { BogotaSection } from "./styles";

const BogotaPage = () => {
  return (
    // <BogotaSection>
    <MapContainer
      center={[4.707090454752141, -74.06827994174233]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[4.707090454752141, -74.06827994174233]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default BogotaPage;
