import React, { useEffect, useState } from 'react'
import { MdClear } from "react-icons/md";
import Pagination from './Pagination';
import { useSelector,useDispatch } from 'react-redux';
import ImageSlider from './ImageSlider';
import { fetchAllProperties } from '../../controller/data/AllPropertySlice/allPropertySlice';
function RentalHousesCard() {
    const [data,setData] = useState(0)
     const dispatch = useDispatch()
     useEffect(()=>{
      dispatch( fetchAllProperties(JSON.stringify({value:'default'})))
     },[])
     const houses = useSelector((state)=> state.allProperties.properties)
     const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
     let homes = []
     searchedHome.length != 0 ? homes = searchedHome : homes =  houses

     const datas = () =>{
      if(houses.length > 1){
        return <h3 className='text-md text-neutral-500 px-3 py-3 font-bold'>`there are {houses.length} properties here`</h3>
      }
      if(houses.length == 1){
        return <h3 className='text-md text-neutral-500 px-3 py-3 font-bold'>`there is only {houses.length} property`</h3>
        return 
      }
      if(houses.length < 1 ){
        return <div className=' justify-center items-center py-20 px-6 min-h-[30vh]'>
        <div className="flex px-5 justify-between w-[80%] ml-[10%] bg-white animate-bounce shadow-md shadow-neutral-600 rounded-md ">
        <h1 className={`py-3 text-xl font-bold text-2x text-center text-orange-700  mb-4 `}>there is no property  in this requirement</h1>
        <button 
        className='font-bold text-2xl'
        onClick={()=>  dispatch( fetchAllProperties(JSON.stringify({value:'default'}))) }>
          <MdClear/>
          </button>
        </div>
        </div>
      }
     }
  return (
    <>
    {
      
        <div className='container mx-auto pt-6 pb-14 '>
         {datas()}
    <div className='grid px-2 grid-cols-1 sm:grid-cols-2 pb-10 md:grid-cols-3 xl:grid-cols-4 gap-4'>
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
              
                  <div style={{width:'100%', height:'auto' , height:'250px' }}>
                  <ImageSlider slide={images}/>
                  </div>
                          <div className='flex flex-col gap-1 px-5 py-2'>
                            <h2 className=' text-neutral-700 font-medium text-xl'>{name}</h2>
                            <h2 className=' text-neutral-600 font-medium text-sm'>{details.bedroom} bed, {details.bathroom}ba {price}$ per M</h2>
                            <h2 className=' text-neutral-900 font-medium text-md'>{subCategory}</h2>
                          </div>
                          <div className='flex justify-end px-5 py-2'>
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
    </div>
    <Pagination/>
    </div>
}
    </>
  )
}

export default RentalHousesCard
