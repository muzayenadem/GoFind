import React, { useEffect, useState } from 'react'
import { MdClear } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
import NoProperty from '../TopHomeComponents/NoProperty';
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice';
import ImageSlider from '../../Slides/ImageSlider';
import Pagination from '../Pagination';

function PropertyCard({property,homes}) {
const {propertyId} = useParams()
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

  const error = useSelector((state)=> state.allProperties.error)
  console.log({errrrrroooooooor:error})
  if(error == 'pending'){
    return (
      <div className='container w-full mx-auto  pb-14  '>
        <div className="flex gap-3 py-6  flex-col">
        <div className='flex rounded-sm w-52 md:w-80 bg-slate-300 h-6 ml-2 '></div>
        <div className='grid px-2 grid-cols-1 sm:grid-cols-2 pb-10 md:grid-cols-2 xl:grid-cols-3 gap-4'> 
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((index)=>{
                return(
                <div key={index} className="flex flex-col  rounded shadow-md  animate-pulse h-96">
                <div className="w-full h-64 rounded-2xl dark:bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 p-1 dark:bg-gray-50">
                  <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                  <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                  <div className="flex justify-end items-end self-end">
                  <div className="flex w-1/2 h-6 rounded dark:bg-gray-300"></div>
                  </div>
                </div>
              </div>)

              })
            }
          </div>
        </div>
        </div> 
     )}
  return (
    <>
    {
        <div className='container mx-auto pt-6 pb-14   '>
          {!homes.length && (
            <div className='w-[100%]'></div>
          )}
    <div className='grid px-2 grid-cols-1 sm:grid-cols-2 pb-10 md:grid-cols-2 xl:grid-cols-3 gap-4'>
    {   
        homes.map(({name,price,subCategory,images,category,details,_id},i) => { 
          if(_id != propertyId){   
            return (
                <div style={{width:"100%" ,height:'auto'}} key={i} className=' h-auto mt-2 bg-white shadow-lg   shadow-neutral-300'>
              
                  <div style={{width:'100%', height:'auto' , height:'250px' }}>
                  <ImageSlider slide={images}/>
                  </div>
                          <div className='flex flex-col gap-1 px-5 py-2'>
                            <h2 className=' text-neutral-700 font-medium text-xl'>{name}</h2>
                            <h2 className=' text-neutral-600 font-medium text-sm'>{details.bedroom} bed, {details.bathroom}ba {price}$ per M</h2>
                            <h2 className=' text-neutral-900 font-medium text-md'>{subCategory}</h2>
                          </div>
                          <div className='flex justify-end px-5 py-2'>
                              <button onClick={()=> window.location.href = `/detail-of-property/${_id}`} className='w-[48%] text-white font-bold text-sm text-center bg-fuchsia-700 px-3 hover:bg-fuchsia-900 rounded-md items-center py-2'>Detail</button>
                          </div>
                </div>
            )
          }
        })
    }
    <div>
    </div>
    </div>
    <Pagination/>
    </div>
}
    </>
  )
}

export default PropertyCard