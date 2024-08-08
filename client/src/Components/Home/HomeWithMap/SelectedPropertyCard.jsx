import React, { useEffect, useState } from 'react'
import { img1, img2, img3 } from '../../Data/Images'
import SelectedPropertyImageSlider from '../../Slides/SelectedPropertyImageSlider'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { mainLink } from '../../../controller/commonLink/mainLInk'

function SelectedPropertyCard({property}) {
 //   const images = property.images
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {propertyId} = useParams()
    console.log({imagesFomSelected:images})
    console.log({PropertyFromSelectedProperty:property})

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
          <div className='py- 5 px-4'>
        <h1 className=' font-serif font-bold text-xl px-2 py-4 '>The home you selected</h1>
        <div className='flex gap-3 rounded-md'>

            <div style={{width:'50%', height:'auto' , height:'270px' }}>
              <SelectedPropertyImageSlider images={images}/>
            </div>
            <Link to={`/detail-of-property-open/${propertyId}`}>
            <div className="gap-5 p-1">
                <p className='text-xl font-semibold'>{property.name}</p>
                <p>{property.subCategory}</p>
            </div> 
            </Link>
        </div>
    </div>
  )
}

export default SelectedPropertyCard