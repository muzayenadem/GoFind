import React from 'react'
import { PiBathtub, PiBedLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { BsDoorOpen } from "react-icons/bs";
import { LiaSynagogueSolid } from "react-icons/lia";
function DetailOfProperty({details}) {
  return (
    <div className=' container mx-auto flex flex-col gap-6 md:flex-row justify-start px-2 border-b-[1px] border-b-neutral-200 py-6'>
        <div className="md:w-[20%]">
        <h3 className='font-serif'>Detail</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 px-6 md:w-[65%]">
          <div className="flex gap-5">
            <span className=' text-xl'><LiaBedSolid/></span>
            <p>Bedroom {details.bedroom}</p> 
          </div>
          <div className="flex gap-5">
            <span className=' text-xl'><PiBathtub/></span>
            <p>Bathroom {details.bathroom}</p> 
          </div>
          <div className="flex gap-5">
            <span className=' text-xl'><BsDoorOpen/></span>
            <p>Living Room {details.livingRoom}</p> 
          </div>
          <div className="flex gap-5">
            <span className=' text-xl'><LiaSynagogueSolid/></span>
            <p>Guest Capability {details.guestCapability}</p> 
          </div>
        </div>
    </div>
  )
}

export default DetailOfProperty