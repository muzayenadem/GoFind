import React from 'react'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'
import { useDispatch } from 'react-redux'

function CategoryFilter({setType,type}) {
  const dispatch = useDispatch()
  const searchHandler = (category) =>{
      if(category){
      dispatch(fetchAllProperties(JSON.stringify({category})))
      }
      setType(false)
  }
  return (
    <div onMouseLeave={()=>setType(false)} className={`w-40 h-42 bg-neutral-700 shadow-md shadow-black  ${!type && 'hidden'} rounded-md mt-4 z-10 absolute `}>
    <div className='w-5 h-5 rotate-45 -mt-2 bg-neutral-700 ml-[10%]'></div>
    <div className='py-4 flex flex-col gap-2 items-center justify-center text-white'>
      <button onClick={()=> searchHandler('apartment')} className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Appartment</button>
      <button onClick={()=> searchHandler('homes')} className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Home</button>
      <button onClick={()=> searchHandler('hotels')} className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Hotel</button>
      <button onClick={()=> searchHandler('others')} className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Other</button>
    </div>
    </div>
  )
}

export default CategoryFilter