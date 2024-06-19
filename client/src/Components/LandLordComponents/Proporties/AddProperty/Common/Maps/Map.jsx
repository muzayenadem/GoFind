import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchForLandlord from './SearchForLandlord';
import { useDispatch, useSelector } from 'react-redux';
import { setLongitudeAndLatitudeOFProperty } from '../../../../../../controller/AddProperty/propertyType';
import {useNavigate} from 'react-router-dom'
const Map4 = () => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const propertyType = useSelector(state=> state.propertyType)
  const category = useSelector(state=> state.propertyType.category)
  console.log({allProperty:propertyType})
  const dispatch = useDispatch()
  const navigate = useNavigate('') 
  const isMultiple = useSelector(state => state.propertyType.multiple)
  const handleLocationSelect = (location) => {
    const { lat, lon } = location;
    mapRef.current.setView([lat, lon], 13);
    setMarkers([...markers, { lat: parseFloat(lat), lon: parseFloat(lon) }]);
  };

  const AddMarker = () => {
    useMap().on('click', (e) => {
      const { lat, lng } = e.latlng;
      if(isMultiple){
        setMarkers([...markers, { lat, lon: lng }]);
        //dispatch(setLongitudeAndLatitudeOFProperty(markers))
      }else{
        setMarkers( [{ lat, lon: lng }]);
       // dispatch(setLongitudeAndLatitudeOFProperty(markers))
      }
    });
    return null;
  };

  const setLocationHandler = () =>{
    dispatch(setLongitudeAndLatitudeOFProperty(markers))
    navigate(`/landloard-dashboard/property/types-of-property/${category}`)
  }
  console.log({markers})
  return (
    <div className='py-20 px-10 gap-2 flex flex-col relative'>
      <SearchForLandlord onLocationSelect={handleLocationSelect} />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "65vh", width: "100%", zIndex:'1'}} ref={mapRef}>
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
        <button onClick={()=> navigate(`/landloard-dashboard/property/types-of-property/${category}`)} className='bg-white border-[2px] px-10 py-2 rounded-lg border-fuchsia-800 text-fuchsia-800 font-bold'>Skip for now</button>
        <button onClick={setLocationHandler} className=' bg-fuchsia-800 text-white px-10 py-2 rounded-lg font-bold text-center '>Set location</button>
      </div>
    </div>
  );
};

export default Map4;