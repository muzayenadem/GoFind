import React, { useState } from 'react'
import { MdManageAccounts } from "react-icons/md";
import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineChildCare } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
function GuestandRoomsFilter({adult,setAdult,bedroom,setBedroom,bathroom,setBathroom,Children,setChildern}) {


  return (
    <div className='py-6 px-3 flex flex-col gap-8 border-b-[1px] border-b-neutral-300 ' >
        <h2 className='text-xl font-bold '>Guest and Rooms</h2>

        <div className='flex flex-col gap-6  '>
          <div className='flex flex-wrap flex-col md:flex-row  justify-start gap-10'>
            <div className='flex w-[40%] justify-between gap-10'>
                <div className='flex justify-start gap-2'>
                    <span className='text-xl'><MdManageAccounts/></span>
                    <div className='flex flex-col gap-0'>
                        <h3 className='text-xl'>Adults</h3>
                        <p className=' text-base text-neutral-500'>Age 18 or above</p>
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setAdult(prev => prev > 0 ? prev = prev - 1 : prev)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{adult}</h2></div>
                    <div onClick={()=>{
                        setAdult(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                </div>
            </div>
            

            <div className='flex  w-[40%] justify-between gap-10'>
                <div className='flex justify-start gap-2'>
                    <span className='text-xl'><MdOutlineChildCare/></span>
                    <div className='flex flex-col gap-0'>
                        <h3 className='text-xl'>Children</h3>
                        <p className=' text-base text-neutral-500'>Age 0 - 17</p>
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setChildern(prev => prev > 0 ? prev = prev - 1 : prev)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{Children}</h2></div>
                    <div onClick={()=>{
                        setChildern(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                </div>
            </div>
          </div>


          <div className='flex flex-wrap flex-col md:flex-row  justify-start gap-10'>
            <div className='flex  w-[40%] justify-between gap-10'>
                <div className='flex justify-start gap-2'>
                    <span className='text-xl'><MdOutlineBedroomParent/></span>
                    <div className='flex flex-col gap-0'>
                        <h3 className='text-xl'>    Bedrooms</h3>
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setBedroom(prev => prev > 0 ? prev = prev - 1 : prev)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{bedroom}</h2></div>
                    <div onClick={()=>{
                        setBedroom(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                </div>
            </div>
            

            <div className='flex  w-[40%] justify-between gap-10'>
                <div className='flex justify-start gap-2'>
                    <span className='text-xl'><PiBathtub/></span>
                    <div className='flex flex-col gap-0'>
                        <h3 className='text-xl'>Bathrooms</h3>
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setBathroom(prev => prev > 0 ?  prev = prev - 1 : prev)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='text-neutral-500 text-2xl'>{bathroom}</h2></div>
                    <div onClick={()=>{
                        setBathroom(prev => prev = prev + 1)
                    }}><span className='   text-fuchsia-700  text-3xl'><FaRegPlusSquare/></span></div>
                </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default GuestandRoomsFilter