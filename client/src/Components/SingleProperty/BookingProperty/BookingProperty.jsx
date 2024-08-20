import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import singlePropertyData from '../../componentsData/singlePropertyData'
import { useParams } from 'react-router-dom'
import { fetchViews } from '../../../controller/specialFunctions/viewsSlice'
import axios from 'axios'
import { mainLink } from '../../../controller/commonLink/mainLInk'

function BookingProperty() {

  const [photos,setPhotos] = useState([])
  const  [mainPhoto ,setMainPhoto] = useState(null)
  const [loading,setLoading] = useState(true)
  const [errMessage,setErrMessage] = useState(null)
  const [open, setOPen] = useState(false)
 


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
  
    if(errMessage){
      console.log({errMessage})
    }
  const property = singlePropertyData()
  console.log({errortBookingProperty:error})
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
  if(error && error !== 'pending' && error != 'succes'){
    return (
      <div className='p-40'>{error}</div>
    )
  }
  return (
    <div className='container flex gap-4 mx-auto px-40  py-16'>
      <div className="w-[30%]">
        {property.name}
        <img src={mainPhoto}/>
      </div>
      <div className="w-[70%]">
        <div className="flex gap-2">
          jjjjj
        </div>
      </div>
    </div>
  )
}

export default BookingProperty