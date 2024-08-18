import React, { useEffect, useState } from 'react'
import { img1, img2, img3 } from '../../Data/Images'
import SelectedPropertyImageSlider from '../../Slides/SelectedPropertyImageSlider'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { mainLink } from '../../../controller/commonLink/mainLInk'
import { fetchViews } from '../../../controller/specialFunctions/viewsSlice'
import { useDispatch, useSelector } from 'react-redux'
import viewsData from '../../componentsData/viewsData'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

function SelectedPropertyCard({property}) {
 //   const images = property.images
 const samp =[img1,img2,img3]
    const [images,setImages] = useState([])
    const [like,setLIke] = useState(false)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {propertyId} = useParams()
    console.log({imagesFomSelected:images})
    console.log({PropertyFromSelectedProperty:property})

    const dispatch = useDispatch()
    useEffect(()=>{
      const h = ()=>{
         axios.get(`${mainLink}/api-single-property`+propertyId)
        .then((res) =>{
           setImages(res.data.images)
           setLoading(false)
           setError(false)
        })
        .catch((err)=>{
           console.log({error:err.message})
           setLoading(false)
           setError(err.message)
        })
      }
     h()
      dispatch(fetchViews(propertyId))
    },[])
  
    const seeViews = async()=>{
      try {
        axios.get(`${mainLink}/api-add-views`+propertyId)
      .then(res =>{
      })
      .catch((err) =>{
        console.log({errorOfViews:err.message})
      })
      } catch (error) {
        console.log({error:error.message})
      }
    }
    const views = viewsData()
    const ViewsError = useSelector(state => state.viewsReducer.error)
    let view = null

    const likeHandler = ()  =>{
      setLIke(!like)
    }
    if(ViewsError != 'pending'){
      if(views){
         view = views.find((single)=> single.propertyId == propertyId)
      }
    }
    const SinglePropertyError = useSelector(state=> state.singleProperty.error)
  
    if(loading || SinglePropertyError == 'pending'){
      return(
        <div  className="flex gap-4 mt-8 ml-8 rounded shadow-md animate-pulse h-96">
            <div className="h-72 rounded-t  w-[600px] rounded-s-2xl  dark:bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
              <div className="w-full h-6 rounded dark:bg-gray-300"></div>
              <div className="w-full h-6 rounded dark:bg-gray-300"></div>
              <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
            </div>
          </div>
      )
    }
    if(error){
      return(
        <div>{error}</div>
      )
    }
  return (
          <div className='container mx-auto px-2'>
        <h1 className=' font-serif font-bold text-xl px-2 py-4 '>The {property.category} you selected</h1>
        <div className='flex flex-col md:flex-row   gap-3  rounded-md'>

            <div className='w-[100%] md:w-[40%] h-[270px]' >
              <SelectedPropertyImageSlider images={images}/>
            </div>
            

            <div className="gap-5 flex flex-col px-4 py-4 w-[100%] md:w-[40%] ">
            <div className="flex justify-between w-full">
                <div className="flex gap-2 text-base font-bold flex-wrap">
                  <p>{property.area.max && `${property.area.max}-M2 ${property.category}`}</p>
                  <p>{property.details.bedroom}-Bedroom</p>
                  <p>{property.details.bathroom}-Bathroom</p>
                </div>
                <div onClick={likeHandler} className={`w-10 h-10 self-end text-center flex items-center text-black justify-center ${like ? 'rounded-3xl bg-red-500 text-center flex':'hover:rounded-3xl hover:bg-black/50'}`} style={{fontSize:'25px'}}><FaRegHeart/></div>
              </div>
              <div className="flex flex-col gap-1 ">
              <p className='text-xl '>{property.name}</p>
                <p className='text-sm'>{property.location.name}, {property.location.country}, {property.city}</p>
              </div>
              <div className="flex flex-col">
              <div className="flex text-center items-center gap-2">
                <p className='text-fuchsia-800 font-bold'>4.5</p>
                    <div className="flex text-fuchsia-800">
                      <span><IoIosStar/></span>
                      <span><IoIosStar/></span>
                      <span><IoIosStar/></span>
                      <span><IoIosStar/></span>
                      <span><IoIosStarHalf/></span>
                   </div>
              </div>
              <div className="">
                <p className='text-sm text-neutral-500'>Outstanding  {view && `(${view.views} reviews)`} </p>
              </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h1 className='text-2xl '>${property.price}</h1>
                  <p className=' text-sm text-neutral-500'>Per month</p>
                </div>
                <Link  onClick={seeViews} to={`/detail-of-property-open/${propertyId}`}>
                <button className="flex bg-purple-600 hover:bg-purple-900 hover:text-white/80 px-5 py-2  items-center rounded-md text-white text-center font-bold">
                  See Detail
                </button>
                </Link>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default SelectedPropertyCard