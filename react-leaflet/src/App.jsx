import { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { popup } from "leaflet";

function App() {
  const [count, setCount] = useState(0);

  // Markers
  const markers = [
    {
      geocode: [9.0204692, 38.8024029],
      popup: "Megenagna",
    },
    {
      geocode: [9.025, 38.7367],
      popup: "Mercato",
    },
    {
      geocode: [8.9598383, 38.7147487],
      popup: "Jemo 1",
    },
  ];
  return (
    <MapContainer center={[9.02497, 38.74689]} zoom={13}>
      {/* Center of the Map at Addis Ababa */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default App;
