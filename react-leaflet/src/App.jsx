import { useState } from "react";
import "./App.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import markerIconPng from "./assets/marker-image.png";

function App() {
  const [count, setCount] = useState(0);

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

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

  const customIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [38, 38],
  });

  return (
    <div>
      <h1 className="map-title">🗺️ Addis Ababa Centered Map</h1>
      <MapContainer center={[9.02497, 38.74689]} zoom={13}>
        {/* Center of the Map at Addis Ababa */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.geocode}
              position={marker.geocode}
              icon={customIcon}
            >
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
