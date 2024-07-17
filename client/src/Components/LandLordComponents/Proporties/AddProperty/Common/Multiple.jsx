import React from 'react'
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { useSelector,useDispatch } from 'react-redux';

function Multiple({page,next,previous}) {
    const dispatch = useDispatch()
    const propertyType = useSelector(state => state.propertyType.subCategory)
  return (
    <div className='container mx-auto md:mx-20 py-20 justify-center m-[2%] w-[96%] items-center'>
      <div className='bg-white py-10 px-6 gap-12 rounded-md shadow-md shadow-neutral-500 md:w-[50%]  flex flex-col '>
        <div className='flex flex-col justify-center items-center gap-6'>
        <h2>Your're listing</h2>
        <span className='text-6xl text-fuchsia-700 '><PiBuildingApartmentDuotone/></span>
        <h1 className='head1 text-center'>Multiple  {propertyType} in the same location where guests can book an entire apartment</h1>
        </div>
        <div className='flex gap-4 flex-col '>
          <p className='title2 text-center'>Does this sound like your property?</p>
          <button onClick={()=> dispatch(next())} className='w-full bg-fuchsia-700 text-white text-center font-bold py-3'>Continue</button>
          <button onClick={()=> dispatch(previous())} className='w-full  bg-white text-fuchsia-700 border-[1px] border-fuchsia-600 text-center font-bold py-3'>No. I need to make change </button>
        </div>
      </div>
    </div>
  )
}

export default Multiple