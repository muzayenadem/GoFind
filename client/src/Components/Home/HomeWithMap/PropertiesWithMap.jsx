import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Mee from './Mee'
import HomeTop from '../HomeTop'
import RentalHousesCard from '../RentalHousesCard'
import PropertyCard from './PropertyCard'
import SelectedPropertyCard from './SelectedPropertyCard'
import singlePropertyData from '../../componentsData/singlePropertyData'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'
import { MdHome } from 'react-icons/md'
function PropertiesWithMap() {
  const [height, setHeight] = useState(100); // Initial height
  const [isResizing, setIsResizing] = useState(false);
    const {propertyId} = useParams()
    const property = singlePropertyData()
    const {images} = property
    console.log({selectedImages:images})
    console.log({propertyFromWithMap:property})
    const dispatch = useDispatch()
    const houses = useSelector((state)=> state.allProperties.properties)
    const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
    let homes = null
    searchedHome.length != 0 ? homes = searchedHome : homes =  houses

    console.log({singleproperty:property})

   
    const startResize = (e) => {
      e.preventDefault();
      setIsResizing(true);
    };
  
    const resize = (e) => {
      if (isResizing) {
        const newHeight = e.touches[0].clientY - e.target.parentNode.offsetTop;
        setHeight(newHeight);
      }
    };
  
    const stopResize = () => {
      setIsResizing(false);
    };
    
  return (
    <div>
        <div  style={{position:'sticky',marginTop:'-105px', top:'-61px',left:'0px',width:'100%',zIndex:1}}>
          <HomeTop/>
      </div>
      <div className=" px-2 flex relative  gap-3">
        <div className="w-full">
          <SelectedPropertyCard property={property} images={images}/>
          < PropertyCard property={property} homes={homes}/>
        </div>
        <div className='w-[50%] hidden lg:block ' >
          <div className=' sticky top-[180px] xl:top-[120px] left-0 w-[100%]'>
                <Mee property={property} homes={homes}/>
          </div>
       </div>
      </div>
      <div className=" sticky bottom-0 left-0 lg:hidden"
       style={{ height: `${height}px` }}
       onTouchMove={resize}
       onTouchEnd={stopResize}
       onTouchCancel={stopResize}
      >
      <div onTouchStart={startResize}  className="bg-white rounded-md  py-1 z-10 w-full  ">
      <div className=" text-center w-28 h-2 ml-[33%] mb-1 bg-neutral-300 rounded-sm" onTouchStart={startResize}>
      </div>
        <div className='w-[100%]  '>
            <div className=' sticky top-[180px] xl:top-[120px] left-0 w-[100%]'>
                  <Mee property={property} homes={homes}/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesWithMap