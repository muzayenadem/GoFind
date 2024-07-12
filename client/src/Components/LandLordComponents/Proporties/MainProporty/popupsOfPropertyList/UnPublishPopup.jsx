import React from 'react'
import { MdOutlineClear } from "react-icons/md";

function UnPublishPopup({setOpenPublish}) {
  return (
    <div className='bg-white shadow-lg shadow-neutral-700 gap-3 flex-col flex p-5 z-10 rounded-md w-[90%]  md:w-[35%] top-[20%] fixed left-[5%] md:left-[32%]'>
      <div className="flex justify-between">
      <p className='text-xl font-semibold'>Are you certain you want to unpublish this listing?</p>
      <span onClick={()=> setOpenPublish(false)} className='text-2xl'><MdOutlineClear/></span>
      </div>
      <p>
      Do you want to rent out your listing for the next period? Then all you have to do is change the availability.</p>
      <div className="flex ml-6 gap-3  justify-end items-end ">
      <button onClick={()=> setOpenPublish(false)} className='bg-fuchsia-700 text-white/50 font-bold text-center px-4 rounded-lg py-2 hover:bg-fuchsia-900'>Cancel</button>
        <button className='bg-red-500 text-white/50 text-center font-bold px-4 rounded-lg py-2 hover:bg-red-700'>Unpublish listing</button>
      </div>
    </div>
  )
}

export default UnPublishPopup