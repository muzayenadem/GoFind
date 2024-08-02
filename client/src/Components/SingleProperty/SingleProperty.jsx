import React, { useEffect, useState } from 'react'
import ImagesOfProperty from './PropertyDetail/ImagesOfProperty'
import singlePropertyData from '../componentsData/singlePropertyData'
import { img1, img2, img3 } from '../Data/Images'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { mainLink } from '../../controller/commonLink/mainLInk'
import DetailOfProperty from './PropertyDetail/DetailOfProperty'
import AmenityOfProperty from './PropertyDetail/AmenityOfProperty'
import PermitionOfProperty from './PropertyDetail/PermitionOfProperty'
import DescriptionOfProperty from './PropertyDetail/DescriptionOfProperty'
import LocationOfProprty from './PropertyDetail/LocationOfProprty'
import ReleatedProperty from './PropertyDetail/ReleatedProperty'
function SingleProperty() {
  const {amenities,name,images,details,permissions} = singlePropertyData()
  const [photos,setPhotos] = useState([])
  const  [mainPhoto ,setMainPhoto] = useState(null)
  const [loading,setLoading] = useState(true)
  const [errMessage,setErrMessage] = useState(null)
  const [views,setViews] = useState(0)
  const samp = [img1,img2,img3]



  const {propertyId} = useParams()
    useEffect(()=>{
     try {
      axios.get(`${mainLink}/api-property-detail`+propertyId)
     .then (res => {
       setMainPhoto(res.data.singleProperty.images[0])
       setPhotos(res.data.singleProperty.images)
       setViews(res.data.views)
       setLoading(false)
     })
     .catch((err) =>{
      setLoading(false)
      setErrMessage(err.message)
      console.log({err})
     })  
     } catch (error) {
      setLoading(false)
      setErrMessage(error.message)
      console.log({error})
     }
    },[])
    if (loading == true ){
      return (
      <div className="flex items-center justify-center px-32 py-60  md:p-32 md:py-60 min-h-[65vh] space-x-2">

        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-800"></div>
        <div className="w-3.5 h-3.5 rounded-full animate-pulse dark:bg-violet-700"></div>
        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-2 h-2 rounded-full animate-pulse dark:bg-violet-500"></div>
        <div className="w-1.5 h-1.5 rounded-full animate-pulse dark:bg-violet-400"></div>
      </div>
      )
    }
    if(errMessage){
      return (
        <div className='p-40'>Something id error</div>
      )
    }
  return (
    <div className="container mx-auto p-2 md:px-16">
         <div className='container mx-auto  flex justify-around' >
      <div className="lg:w-[74%]">
      <ImagesOfProperty photos={photos} views={views} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} name={name} details={details} />
      <DetailOfProperty details={details}/>
      <AmenityOfProperty amenities={amenities}/>
      <PermitionOfProperty permissions={permissions}/>
      <DescriptionOfProperty/>
      <LocationOfProprty/>
      </div>
      <div className='py-10 w-[24%] hidden lg:block ' >
        <div className="w-full shadow-md shadow-neutral-400 rounded-md h-96 my-10 p-5 sticky top-16">hh</div>
      </div>
    </div>
    <ReleatedProperty/>
    </div>
  )
}

export default SingleProperty