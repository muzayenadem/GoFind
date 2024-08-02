import React, { useEffect, useState } from 'react'
import { bg3, img1, img2, img3 } from '../../Data/Images'
const ImagesOfProperty = ({photos,mainPhoto,setMainPhoto,name,details,views}) => {
    const samp = [img1,img2,img3,bg3]
  return (
    <div className=' container mx-auto px-2 border-b-[1px] border-b-neutral-200 py-3'>
       <h2 className='text-3xl font-bold py-4'>{name}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
    <img src={mainPhoto} className='h-96 w-full '/>
     <div className='  grid gap-5 grid-cols-2'> 
      {
      photos.map((img,i)=>{
          return (
            <div key={i}>
              <img  onClick={()=> setMainPhoto(photos[i])} src={img} className='w-full h-44 '/>
            </div>
          )
        })
      }
      </div>
    </div>
    <div className="flex gap-9 pt-7 ">
      <p className='font-serif '>{views} Views</p>
      <p className='font-serif'>{name}</p>
      <p className='font-serif'>Bedroom {details.bedroom} </p>
      <p>Bathroom {details.bathroom}</p>
    </div>
    </div>
  )
}

export default ImagesOfProperty