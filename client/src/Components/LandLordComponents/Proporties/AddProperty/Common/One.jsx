import React from 'react'
import { IoHome } from "react-icons/io5";
import { useSelector,useDispatch } from 'react-redux';


function One({page,next,previous}) {
  const propertyType = useSelector(state => state.propertyType.subCategory)
  const dispatch = useDispatch()
  return (
    <div className='container mx-auto md:mx-20 py-20 justify-center items-center'>
      <div className='bg-white py-10 px-6 gap-12 rounded-md shadow-md shadow-neutral-700 md:w-[50%]  flex flex-col '>
        <div className='flex flex-col justify-center items-center gap-6'>
        <h2>Your're listing</h2>
        <span className='text-6xl text-fuchsia-700 '><IoHome/></span>
        <h1 className='head1'>One {propertyType} where guests can book <br/>the entire place</h1>
        </div>
        <div className='flex gap-4 flex-col '>
          <p className='title2 text-center'>Does this sound like your property?</p>
          <button onClick={()=> dispatch(next())} className='w-full bg-fuchsia-700 text-white text-center font-bold py-3'>Comtinue</button>
          <button onClick={()=> dispatch(previous())} className='w-full  bg-white text-fuchsia-700 border-[1px] border-fuchsia-600 text-center font-bold py-3'>No. I need to make change </button>
        </div>
      </div>
    </div>
  )
}

export default One