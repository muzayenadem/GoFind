import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Search from './Search';

const Map3 = () => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  const handleLocationSelect = (location) => {
    const { lat, lon } = location;
    mapRef.current.setView([lat, lon], 13);
    setMarkers([{ lat, lon }]);
  };

  return (
    <div>
      <Search onLocationSelect={handleLocationSelect} />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lon]} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map3;