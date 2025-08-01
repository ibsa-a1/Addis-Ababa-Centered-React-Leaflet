import { useEffect } from "react";
import "./App.css";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import L from "leaflet";

import markerIconPng from "./assets/marker-image.png";

function GeocoderControl() {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: true,
    })
      .on("markgeocode", function (e) {
        const bbox = e.geocode.bbox;
        const bounds = L.latLngBounds(bbox);
        map.fitBounds(bounds);
      })
      .addTo(map);
  }, [map]);

  return null;
}

function App() {
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
      geocode: [8.96032, 38.711744],
      popup: "Jemo 1",
    },
    {
      geocode: [8.9466212, 38.7244681],
      popup: "Lebu",
    },
  ];

  const customIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [38, 38],
  });

  return (
    <div>
      <h1 className="map-title">🗺️ Addis Ababa Centered Map</h1>
      <MapContainer
        center={[9.02497, 38.74689]}
        zoom={13}
        minZoom={6.4}
        maxBounds={[
          [0.5, 35.0], // Southwest (Nairobi, Kenya)
          [15.5, 46.0], // Northeast (Asmara/Mogadishu)
        ]}
        maxBoundsViscosity={1.0}
      >
        {/* Center of the Map at Addis Ababa */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeocoderControl />

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
