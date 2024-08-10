import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { addPointsToMap } from "./addPointsToMap";
import { points } from "./points";

export interface LeafletMapProps {
  children?: React.ReactNode;
}

export const LeafletMap = (props: LeafletMapProps) => {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      addPointsToMap(map, points);
    }
  }, []);
    return (
<MapContainer ref={mapRef} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{height: '100vh', width: "100%"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {props.children}
</MapContainer>
    );
};