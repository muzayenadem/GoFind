import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchForLandlord from '../Maps/SearchLocation';


const LocationOfProperty = () => {
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
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "70vh", width: "100%", zIndex:'1'}} ref={mapRef}>
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
      <div className=' sticky bottom-1 flex gap-3  justify-end items-center self-end right-10 '>
        <button className='bg-white border-[2px] px-10 py-2 rounded-lg border-fuchsia-800 text-fuchsia-800 font-bold'>Skip for now</button>
        <button className=' bg-fuchsia-800 text-white px-10 py-2 rounded-lg font-bold text-center '>Set location</button>
      </div>
    </div>
  );
};

export default LocationOfProperty;