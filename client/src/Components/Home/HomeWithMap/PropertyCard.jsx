import React, { useEffect, useState } from 'react'
import { MdClear } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import NoProperty from '../TopHomeComponents/NoProperty';
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice';
import ImageSlider from '../../Slides/ImageSlider';
import Pagination from '../Pagination';

function PropertyCard({property,homes}) {

  // if(0 == 0){
  //   return (
  //     <div>
  //       {
  //             homes.map((i)=>{
  //               return (
  //                <div className='grid px-2 grid-cols-1 sm:grid-cols-2 pb-10 md:grid-cols-3 xl:grid-cols-3 gap-4'>
  //               <div className="h-48 rounded-t dark:bg-gray-300"></div>
  //               <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
  //                 <div className="w-full h-6 rounded dark:bg-gray-300"></div>
  //                 <div className="w-full h-6 rounded dark:bg-gray-300"></div>
  //                 <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
  //               </div>
  //             </div>
  //             )
  //           }) 
  //       }
  //     </div>
  //   )
  // }
  return (
    <>
    {
        <div className='container mx-auto pt-6 pb-14  '>
    <div className='grid px-2 grid-cols-1 sm:grid-cols-2 pb-10 md:grid-cols-3 xl:grid-cols-3 gap-4'>
    {   
     homes.length == 0  ? 
     [1,2,3,4,5,6,7,8,9,1,23,3,4,5,6,7].map((i)=>{
          return   <div key={i} className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t dark:bg-gray-300"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
          </div>
        </div>
        }) :
        homes.map(({name,price,subCategory,images,category,details,_id},i) => {    
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
                              <Link to={`/detail-of-property/${_id}`} className='w-[48%] text-white font-bold text-sm text-center bg-fuchsia-700 px-3 hover:bg-fuchsia-900 rounded-md items-center py-2'>Detail</Link>
                          </div>
                </div>
            )
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