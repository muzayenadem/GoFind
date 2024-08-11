import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Mee from './Mee'
import HomeTop from '../HomeTop'
import RentalHousesCard from '../RentalHousesCard'
import PropertyCard from './PropertyCard'
import SelectedPropertyCard from './SelectedPropertyCard'
import singlePropertyData from '../../componentsData/singlePropertyData'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'
function PropertiesWithMap() {
    const {propertyId} = useParams()
    const property = singlePropertyData()
    const {images} = property
    console.log({selectedImages:images})
    console.log({propertyFromWithMap:property})
    const dispatch = useDispatch()

    // useEffect(()=>{
    //   dispatch( fetchAllProperties(JSON.stringify({category:property.category})))
    //  },[])
    const houses = useSelector((state)=> state.allProperties.properties)
    const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
    let homes = null
    searchedHome.length != 0 ? homes = searchedHome : homes =  houses
  

 
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
    </div>
  )
}

export default PropertiesWithMap