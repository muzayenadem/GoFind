import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import {img1} from '../Data/Images'
import 'leaflet/dist/leaflet.css';
//import SearchForLandlord from './SearchForLandlord';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { setLongitudeAndLatitudeOFProperty } from '../../controller/AddProperty/propertyType';
import { popup } from 'leaflet';
const MainMap = ({homes}) => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const [property,setProperty] = useState({})
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
  let list = []
  let newHomes = []
    for(let home of homes){
        if(home.locationWithName.marker){
            if(home.locationWithName.marker.length >1){
             list.push(...[...home.locationWithName.marker])
            }
            list.push(...home.locationWithName.marker)

        }
    }
console.log({markers})
console.log({list})
console.log({newHomes})
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

  const detail = (lat,lon) =>{
    console.log({lat,lon})
    const find = list.find(single => single.lat == lat & single.lon == lon)
    setProperty(find)
  }
// const Add = ()=>{
//   popup().on('click',()=> true)
// }
//  Add()
  return (
    <div className='py-20 rounded-lg ipad:ml-[20%] sticky top-0 left-0 tablet:ml-[25%] px-10 gap-2 flex flex-col '>
      {/* <SearchForLandlord onLocationSelect={handleLocationSelect} /> */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "65vh", width: "100%", zIndex:'1',borderRadius:'20px'}} ref={mapRef}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>
        <img src="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></img>
        </TileLayer>
        <AddMarker />
        {list.map((marker, index) => (
         <div onClick={()=>detail(marker.lat,marker.lon)}>
             <Marker key={index} position={[marker.lat, marker.lon]} >
            <Popup >
             <div >
                {
                homes.map((sing,i)=>{
                    if(sing.locationWithName.marker){
                      if(sing.locationWithName.marker.length>1){
                        const find = sing.locationWithName.marker.find(mark => mark.lat == marker.lat)
                          console.log('maaliif garuu qoy')
                          if(find){
                            return (
                              <Link to={`detail-of-property/${sing._id}`} >
                                  <div >{sing.name} <img src={sing.images[0]}/></div>
                              </Link>
                            )
                          }
                      }

                        if(sing.locationWithName.marker.length == 1){
                          const find = sing.locationWithName.marker.find(mark => mark.lat == marker.lat)
                          if(find){
                            console.log('maaliif garuu qoy')
                            return (
                              <Link to={`detail-of-property/${sing._id}`} >
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
         </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default MainMap;