import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import singlePropertyData from '../../componentsData/singlePropertyData'
import { useParams } from 'react-router-dom'
import { fetchViews } from '../../../controller/specialFunctions/viewsSlice'
import axios from 'axios'
import { mainLink } from '../../../controller/commonLink/mainLInk'
import { atm, mastercard, payooner, paypal, telebirr } from '../../Data/Images'

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
        <div className="flex flex-col bg-white shadow-md h-96 shadow-neutral-300 p-4 rounded-lg">
          <p className='text-lg font-semibold'>Summery order</p>
          <div className="flex gap-2 ">
          <img src={mainPhoto} className='w-34 h-24 rounded-md'/>
          <div className="">
          <p className='text-[14px]'>{property.name}</p>
          <p>${property.price}</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] flex gap-4 flex-col">
        <div className="flex p-5">
          <div className="flex w-1/3 h-1 bg-green-600"><span className='w-5 h-5 rounded-full bg-green-600 -mt-2'></span></div>
          <div className="flex w-1/3 h-1 bg-slate-200"><span className='w-5 h-5 rounded-full bg-slate-300 -mt-2'></span></div>
          <div className="flex w-1/3 h-1 bg-slate-200"><span className='w-5 h-5 rounded-full bg-slate-300 -mt-2'></span></div>
          <div className="flex w-1/3 h-1 justify-between bg-slate-200"><span className='w-5 h-5  rounded-full bg-slate-300 -mt-2'></span><span className='w-5 h-5  rounded-full bg-slate-300 -mt-2'></span></div>
        </div>
        <div className="flex gap-2 flex-col p-4 w-full bg-white shadow-md shadow-neutral-400 rounded-lg">
          <h3 className='text-2xl font-bold'>How would you like to pay?</h3>
          <div className="grid grid-cols-3 gap-5 w-[80%] p-4 px-8 border-b-[1px] border-b-neutral-300 py-5 ">
            <div className="flex shadow-md shadow-neutral-500 w-40 h-24"><img className=' hover:opacity-' src={mastercard}/></div>
            <div className="flex  shadow-md shadow-neutral-500 w-32 h-24"><img src={payooner}/></div>
            <div className="flex  shadow-md shadow-neutral-500 w-32 h-24"><img src={paypal}/></div>
            <div className="flex shadow-md shadow-neutral-500 w-32 h-24"><img src={telebirr}/></div>
            <div className="flex shadow-md shadow-neutral-500 w-32 h-24"><img src={atm}/></div>
          </div>
          <div className="flex gap-2 flex-col">
            <p className='text-neutral-500'>use an approperate method that is suit for you</p>
            <p className='text-neutral-500'>to know more about methods <strong>click</strong>here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingProperty