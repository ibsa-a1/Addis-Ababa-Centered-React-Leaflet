import { useState } from "react";
import "./App.css";
import { MapContainer } from "react-leaflet";

function App() {
  const [count, setCount] = useState(0);

  return <MapContainer center={[9.02497, 38.74689]} zoom={13}></MapContainer>;
}

export default App;
