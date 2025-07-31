import { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [count, setCount] = useState(0);

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
