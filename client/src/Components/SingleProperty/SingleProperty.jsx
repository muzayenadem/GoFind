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
import MainMap from '../Home/HomeWithMap/MainMap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchViews } from '../../controller/specialFunctions/viewsSlice'
import StartBooking from './PropertyDetail/StartBooking'
function SingleProperty () {

  const property = singlePropertyData()
  const {amenities,name,images,details,permissions,_id,category} = property
  

  const [photos,setPhotos] = useState([])
  const  [mainPhoto ,setMainPhoto] = useState(null)
  const [loading,setLoading] = useState(true)
  const [errMessage,setErrMessage] = useState(null)
  const [open, setOPen] = useState(false)
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
    const error = useSelector(state=> state.singleProperty.error)

    if (loading == true || error == 'pending'){
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
    <>
    <div className="container mx-auto p-2 md:px-16">
         <div className='container mx-auto  flex justify-around' >
      <div className="lg:w-[74%]">
      <ImagesOfProperty photos={photos} views={views} property={property} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} name={name} details={details} />
      <DetailOfProperty details={details}/>
      <AmenityOfProperty amenities={amenities}/>
      <PermitionOfProperty permissions={permissions}/>
      <DescriptionOfProperty/>
      <LocationOfProprty homes={property}/>
      </div>
        <div className='py-10 w-[28%] hidden xl:block ' >
          <div className="my-10  sticky top-16 left-0">
            <StartBooking property={property}/>
          </div>
        </div>
        <div className="fixed px-5 z-10 py-2 flex justify-between  w-full h-16 xl:hidden bg-white shadow-md shadow-neutral-300 bottom-0 ">
          <div className=""></div>
          <div onClick={()=> setOPen(!open)} className="w-52 py-2 text-center items-center self-center justify-center  bg-purple-700 text-white font-bold hover:bg-purple-950 hover:text-white/60 rounded-lg ">Check Availablity</div>
        </div>
    </div>
    <ReviewsOfProperty/>
    <ReleatedProperty id={_id} category={category}/>
    </div>
    <dialog open={open} className='fixed z-10 top-16 xl:hidden'>
      <StartBooking property={property}/>
    </dialog>
    </>
  )
}

export default SingleProperty