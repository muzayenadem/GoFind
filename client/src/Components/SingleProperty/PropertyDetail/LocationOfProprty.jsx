import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
//import SearchForLandlord from './SearchForLandlord';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import L from 'leaflet';
import { setLongitudeAndLatitudeOFProperty } from '../../../controller/AddProperty/propertyType';
import { map } from '../../Data/Images';
const LocationOfProprty= ({homes}) => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  const category = useSelector(state=> state.propertyType.category)
  const dispatch = useDispatch()
  const navigate = useNavigate('') 
  const isMultiple = useSelector(state => state.propertyType.multiple)


  const handleLocationSelect = (location) => {
    const { lat, lon } = location;
    mapRef.current.setView([lat, lon], 13);
    setMarkers([...markers, { lat: parseFloat(lat), lon: parseFloat(lon) }]);
  };

  console.log({homesOf:homes})
  let list = []

    if(homes.locationWithName.marker){
        if(homes.locationWithName.marker.length >1){
          list.push(...[...homes.locationWithName.marker])
        }
        list.push(...homes.locationWithName.marker)
    }


  const AddMarker = () => {
    useMap().on('click', (e) => {
      const { lat, lng } = e.latlng;
      if(isMultiple){
        setMarkers([...markers, { lat, lon: lng }]);
      }else{
        setMarkers( [{ lat, lon: lng }]);
      }
    });
    return null;
  };


  const setLocationHandler = () =>{
    dispatch(setLongitudeAndLatitudeOFProperty(markers))
    navigate(`/landloard-dashboard/property/types-of-property/${category}`)
  }



const createCustomIcon = (imageUrl) => {
  return L.icon({
    iconUrl: imageUrl,
    iconSize: [46, 46], // Adjust the size as needed
    iconAnchor: [20, 40], // Adjust the anchor point
    borderRadius:['20px'],
    popupAnchor: [0, -40], // Adjust the popup anchor
    className: 'custom-marker' // Add a custom class for further styling if needed
  });
};

if(!homes.locationWithName.marker){
  return (
    <div style={{backgroundImage:`url(${map})` , marginLeft:'10%', marginTop:'30px',marginBottom:'30px' ,width:"80%",height:'30vh',borderRadius:'10px',backgroundPosition:'center',backgroundSize:'cover'}} className='w-[80%] py-6 ml-[10%] bg-white shadow-md shadow-neutral-400 rounded-md min-h-[60vh]'></div>
  )
}
  return (
    <div className='py-20 rounded-lg ipad:ml-[20%]  sticky top-0 left-0 tablet:ml-[25%] px-10 gap-5 flex flex-col '>
      <h3>Location of this property</h3>
      <MapContainer center={homes.locationWithName.marker != null ? [homes.locationWithName.marker[0].lat, homes.locationWithName.marker[0].lon] : [9.048, 39.023]} zoom={ homes.locationWithName.marker != null ? 15 : 5} style={{ height: "65vh", width: "100%", zIndex:'1',borderRadius:'20px'}} ref={mapRef}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
        <img src="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></img>
        </TileLayer>
        <AddMarker />
        {list.map((marker, index) => { 
            const customIcon = createCustomIcon(homes.images[0]); // Assuming the first image is the one to use for the marker  
          return (
             <Marker key={index} position={[marker.lat, marker.lon]} icon={customIcon}   >
            {/* <Popup >
            </Popup> */}
          </Marker>
        )})}
      </MapContainer>
    </div>
  );
};

export default LocationOfProprty