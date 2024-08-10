import React, { useEffect, useState } from 'react'
import { img1, img2, img3 } from '../../Data/Images'
import SelectedPropertyImageSlider from '../../Slides/SelectedPropertyImageSlider'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { mainLink } from '../../../controller/commonLink/mainLInk'
import { fetchViews } from '../../../controller/specialFunctions/viewsSlice'
import { useDispatch, useSelector } from 'react-redux'

function SelectedPropertyCard({property}) {
 //   const images = property.images
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {propertyId} = useParams()
    console.log({imagesFomSelected:images})
    console.log({PropertyFromSelectedProperty:property})

    const dispatch = useDispatch()
    useEffect(()=>{
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
    useEffect(()=>{
      dispatch(fetchViews(propertyId))
    },[])
    
    const views = useSelector(state => state.viewsReducer.views)
      

    if(loading){
      return(
        <div  className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t dark:bg-gray-300"></div>
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
        <div className='flex gap-3 rounded-md'>

            <div style={{width:'50%', height:'auto' , height:'270px' }}>
              <SelectedPropertyImageSlider images={images}/>
            </div>
            <Link onClick={seeViews} to={`/detail-of-property-open/${propertyId}`}>
            <div className="gap-5 p-1">
                <p className='text-xl font-semibold'>{property.name}</p>
                <p>{property.subCategory}</p>
                <p>{views} views</p>
            </div> 
            </Link>
        </div>
    </div>
  )
}

export default SelectedPropertyCard