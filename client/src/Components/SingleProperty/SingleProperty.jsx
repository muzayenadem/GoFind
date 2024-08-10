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
import ReviewsOfProperty from './PropertyDetail/ReviewsOfProperty'
import RentalHousesCard from '../Home/RentalHousesCard'
import MainMap from '../Home/MainMap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchViews } from '../../controller/specialFunctions/viewsSlice'
function SingleProperty() {
  const property = singlePropertyData()

  const {amenities,name,images,details,permissions,_id,category} = property
  const [photos,setPhotos] = useState([])
  const  [mainPhoto ,setMainPhoto] = useState(null)
  const [loading,setLoading] = useState(true)
  const [errMessage,setErrMessage] = useState(null)
  const samp = [img1,img2,img3]


  const dispatch = useDispatch()
  const {propertyId} = useParams()
    useEffect(()=>{
     try {
      axios.get(`${mainLink}/api-single-property`+propertyId)
     .then (res => {
       setMainPhoto(res.data.images[0])
       setPhotos(res.data.images)
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

    useEffect(()=>{
      dispatch(fetchViews(propertyId))
    },[])
    
    const views = useSelector(state => state.viewsReducer.views)

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
        <div className='p-40'>Something is error</div>
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
      <LocationOfProprty homes={property}/>
      </div>
        <div className='py-10 w-[24%] hidden lg:block ' >
          <div className="w-full shadow-md shadow-neutral-400 rounded-md h-96 my-10 p-5 sticky top-16">hh</div>
        </div>
        {/* <RentalHousesCard/> */}
        {/* <Mee/> */}
    </div>
    <ReviewsOfProperty/>
    <ReleatedProperty id={_id} category={category}/>
    </div>
  )
}

export default SingleProperty