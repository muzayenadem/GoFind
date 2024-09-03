import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {img1} from '../../Data/Images'
import 'leaflet/dist/leaflet.css';
import './MainMap.css'
//import SearchForLandlord from './SearchForLandlord';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom'
import L from 'leaflet';
import { setLongitudeAndLatitudeOFProperty } from '../../../controller/AddProperty/propertyType';
import { popup } from 'leaflet';
import axios from 'axios';
import { mainLink } from '../../../controller/commonLink/mainLInk';
const MainMap = ({homes,property}) => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const [latitudinal,setLatitudinal]= useState('');
  const [longitudinal,setLongitudinal] = useState('')
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMultiple = useSelector(state => state.propertyType.multiple)
  //console.log({lat,lon})

  const handleLocationSelect = (location) => {
    const { lat, lon } = location;
    mapRef.current.setView([lat, lon], 13);
    setMarkers([...markers, { lat: parseFloat(lat), lon: parseFloat(lon) }]);
  };


  let list = []
  for(let home of homes){
      if(home.locationWithName.marker){
          if(home.locationWithName.marker.length >1){
            list.push(...[...home.locationWithName.marker])
          }
          list.push(...home.locationWithName.marker)

      }
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


  // const setLocationHandler = () =>{
  //   dispatch(setLongitudeAndLatitudeOFProperty(markers))
  //   navigate(`/landloard-dashboard/property/types-of-property/${category}`)
  // }

  const {propertyId} = useParams()
  useEffect(()=>{
   axios.get(`${mainLink}/api-single-property`+propertyId)
    .then((res) =>{
      if(res.data.property.locationWithName.marker && res.data.property.locationWithName.marker.length){
        setLatitudinal(res.data.property.locationWithName.marker[0].lat)
        setLongitudinal(res.data.property.locationWithName.marker[0].lon)
        setLoading(false)
      }
        setLoading(false)
    })
    .catch((err)=>{
       console.log({error:err.message})
       setLoading(false)
       setError(err.message)
    })
  },[])
  console.log({latitudinal,longitudinal})

  const custom = {
    paddingLeft:'5px',
    paddingRight:'5px',
    paddingTop:'2px',
    paddingBottom:'2px',
    backgroundColor:'white',
    textColor:'red'
  }
const createCustomIcon = (home) => {
  return L.divIcon({
    html:`<div>
    <div>$${home.price}</div>
  </div>`,
    iconSize: [36, 36], //  Adjust the size as needed
    iconAnchor: [20, 40], // Adjust the anchor point
    borderRadius:['20px'],
    popupAnchor: [0, -40], // Adjust the popup anchor
    className: ' flex justify-center items-center font-bold shadow-md shadow-neutral-500 bg-white px-8 py-2 rounded-xl text-center w-96' // Add a custom class for further styling if needed
  });
};


    if(loading){
     return(
      <div className="flex  flex-col py-2 rounded-2xl shadow-md w-[100%] animate-pulse h-[85vh]">
      <div className="h-full w-full rounded-2xl dark:bg-gray-300"></div>
      {/* <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
        <div className="w-full h-6 rounded dark:bg-gray-300"></div>
        <div className="w-full h-6 rounded dark:bg-gray-300"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
      </div> */}
    </div>
     )
    }

   if(error){
      return(
       <div>{error}</div>
      )
   }


  return (
    <div className=''>
      {/* <SearchForLandlord onLocationSelect={handleLocationSelect} /> */}
      <MapContainer center={ latitudinal !== '' & longitudinal !== '' ?  [latitudinal,longitudinal] : [9.048,39.023]} zoom={5} style={{ height: "85vh", width: "100%",borderRadius:'20px',}} ref={mapRef}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
        <img src="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" ></img>
        </TileLayer>
        <AddMarker />
        {list.map((marker, index) => { 
            const home = homes.find(home => {
              if(home.locationWithName.marker ){
               return home.locationWithName.marker.some(m => m.lat === marker.lat && m.lon === marker.lon)
              }
            });
            const customIcon = createCustomIcon(home.images[0]); // Assuming the first image is the one to use for the marker  
          return (
             <Marker key={index} position={[marker.lat, marker.lon]} icon={createCustomIcon(home)}   >
            <Popup >
             <div >
                {
                homes.map((sing,i)=>{
                    if(sing.locationWithName.marker){
                      if(sing.locationWithName.marker.length>1){
                        const find = sing.locationWithName.marker.find(mark => mark.lat === marker.lat && mark.lon === marker.lon)
                          console.log('maaliif garuu qoy')
                          if(find){
                            return (
                              <button key={i} onClick={()=> window.location.href=`/detail-of-property-open/${sing._id}`}>
                                  <div >{sing.name}  <img src={sing.images[0]}/></div>
                              </button>
                            )
                          }
                      }

                        if(sing.locationWithName.marker.length == 1){
                          const find = sing.locationWithName.marker.find(mark => mark.lat === marker.lat && mark.lon === marker.lon)
                          if(find){
                            console.log('maaliif garuu qoy')
                            return (
                              <Link key={i} to={`/detail-of-property-open/${sing._id}`} >
                                  <div >{sing.name} <img src={sing.images[0]}/></div>
                              </Link>
                            )
                          }
                        }   
                     }
                  })
                }
            </div>
            </Popup>
          </Marker>
        )})}
      </MapContainer>
    </div>
  );
};

export default MainMap;