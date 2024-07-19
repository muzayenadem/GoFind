import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { img1,img2,img3 } from '../Data/Images';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import Pagination from './Pagination';
import { useSelector,useDispatch } from 'react-redux';
import ImageSlider from './ImageSlider';
import { fetchAllProperties } from '../../controller/data/AllPropertySlice/allPropertySlice';
function RentalHousesCard() {
     const [homeData, setHomeData] = useState([])
     const [dotActive, setDotActive] = useState()
     const dispatch = useDispatch()
     useEffect(()=>{
      dispatch( fetchAllProperties(JSON.stringify({value:'default'})))
     },[])
     const houses = useSelector((state)=> state.allProperties.properties)
     const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
     let homes = []
     searchedHome.length != 0 ? homes = searchedHome : homes =  houses
  return (
    <>
    {
      
        <div className='container mx-auto py-20'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
    {   
     homes.length < 0  ? 
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
        homes.map(({name,price,subCategory,images,category,details},i) => {    
            return (
                <div style={{width:"100%" ,height:'auto'}} key={i} className=' h-auto mt-2 bg-white shadow-lg   shadow-neutral-300'>
              
                  <div style={{width:'100%', height:'auto' , height:'250px' ,margin:''}}>
                  <ImageSlider slide={images}/>
                  </div>
                          <div className='flex flex-col gap-1 px-5 py-2'>
                            <h2 className=' text-neutral-700 font-medium text-xl'>{name}</h2>
                            <h2 className=' text-neutral-600 font-medium text-sm'>{details.bedroom} bed, {details.bathroom}ba {price}$ per M</h2>
                            <h2 className=' text-neutral-900 font-medium text-md'>{subCategory}</h2>
                          </div>
                          <div className='flex justify-end px-5 py-2'>
                            {/* <div className='w-[48%] bg-purple-400 px-4 items-center py-2'>
                             <p className='text-white font-bold text-lg text-center'>Email Property</p>
                            </div> */}
                              <div className='w-[48%] bg-fuchsia-700 px-3 hover:bg-fuchsia-900 rounded-md items-center py-2'>
                             <p className='text-white font-bold text-sm text-center'>Detail</p>
                            </div>
                          </div>
                </div>
            )
        })
    }
    <div>
    </div>
    <Pagination/>
    </div>
    </div>
}
    </>
  )
}

export default RentalHousesCard
