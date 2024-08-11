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
    //  dispatch( fetchAllProperties(JSON.stringify({category:property.category})))
    // },[])
    const houses = useSelector((state)=> state.allProperties.properties)
    const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
    let homes = null
    searchedHome.length != 0 ? homes = searchedHome : homes =  houses

    useEffect(()=>{
     if(homes.length == 0){
       dispatch( fetchAllProperties(JSON.stringify({category:property.category})))
     }
    },[])
    let list = []
    if(homes.length){
     const find = homes.find(property => property._id == propertyId)
     if(find){ 
       for(let home of homes){
         if (home != find){
           list.push(home)
         }
       }
     }
    }

    const error = useSelector(state => state.allProperties.error)

    if(error == 'pending'){
      return(
        <div className="flex items-center justify-center px-32 py-60  md:p-32 md:py-60 min-h-[65vh] space-x-2">

        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-800"></div>
        <div className="w-3.5 h-3.5 rounded-full animate-pulse dark:bg-violet-700"></div>
        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-2 h-2 rounded-full animate-pulse dark:bg-violet-500"></div>
        <div className="w-1.5 h-1.5 rounded-full animate-pulse dark:bg-violet-400"></div>
      </div>
      )
    }
  return (
    <div>
        <div  style={{position:'sticky',marginTop:'-105px', top:'-61px',left:'0px',width:'100%',zIndex:1}}>
          <HomeTop/>
      </div>
      <div className="min-w-[100%] flex relative  gap-3">
        <div className="">
          <SelectedPropertyCard property={property} images={images}/>
          < PropertyCard property={property} homes={list}/>
        </div>
        <div className='w-[40%] hidden lg:block ' >
       <div className=' sticky top-[180px] xl:top-[120px] left-0 w-[100%]'>
             <Mee property={property} homes={homes}/>
          </div>
       </div>
      </div>
    </div>
  )
    {/* <Link to={`/detail-of-property-open/${propertyId1}`}>
        </Link> */}
}

export default PropertiesWithMap