import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchForLandlord from './SearchForLandlord';

const Map4 = () => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  const handleLocationSelect = (location) => {
    const { lat, lon } = location;
    mapRef.current.setView([lat, lon], 13);
    setMarkers([...markers, { lat: parseFloat(lat), lon: parseFloat(lon) }]);
  };

  const AddMarker = () => {
    useMap().on('click', (e) => {
      const { lat, lng } = e.latlng;
      setMarkers([...markers, { lat, lon: lng }]);
    });
    return null;
  };
  console.log({markers})
  return (
    <div className='py-20 px-10 gap-2 flex flex-col relative'>
      <SearchForLandlord onLocationSelect={handleLocationSelect} />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%", zIndex:'1'}} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarker />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lon]}>
            <Popup>
              Latitude: {marker.lat}, Longitude: {marker.lon}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map4;