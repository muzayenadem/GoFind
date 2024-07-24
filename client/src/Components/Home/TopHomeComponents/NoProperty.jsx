import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice';
import { MdClear } from "react-icons/md";
function NoProperty() {
    const [space,setSpace] =useState(<div></div>)
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(() => {
            setSpace(
                <div className=' justify-center items-center py-20 px-6 min-h-[30vh]'>
                <div className="flex px-5 justify-between w-[80%] ml-[10%] bg-white animate-bounce shadow-md shadow-neutral-600 rounded-md ">
                <h1 className={`py-3 text-xl font-bold text-2x text-center text-orange-700  mb-4 `}>there is no property with this requirement</h1>
                <button 
                className='font-bold text-2xl'
                onClick={()=>  dispatch( fetchAllProperties(JSON.stringify({value:'default'}))) }>
                  <MdClear/>
                  </button>
                </div>
                </div>
            )
        }, 20);
    },[])
  return (
    space
  )
}

export default NoProperty