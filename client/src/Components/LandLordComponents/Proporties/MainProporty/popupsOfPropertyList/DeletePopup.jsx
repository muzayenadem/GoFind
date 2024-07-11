import React from 'react'
import { MdOutlineClear } from "react-icons/md";

function DeletePopup({openDelete}) {
  return (
    <div className='bg-white shadow-lg shadow-neutral-700 gap-3 flex-col flex p-5 z-10 rounded-md w-[35%] top-[10%] fixed left-[32%]'>
      <div className="flex justify-between">
      <p className='text-xl font-semibold'>Are you certain you want to remove this listing?</p>
      <span onClick={()=> openDelete(false)} className='text-2xl'><MdOutlineClear/></span>
      </div>
      <p>Once the property is deleted, it cannot be republished. If you later decide you want to make it available again, you'll need to recreate the listing from scratch. As an alternative, you can update your calendar's availability to reflect any changes.</p>
      <div className="flex ml-6 gap-3  justify-end items-end ">
      <button onClick={()=> openDelete(false)} className='bg-fuchsia-700 text-white/50 font-bold text-center px-4 rounded-lg py-2 hover:bg-fuchsia-900'>Cancel</button>
        <button className='bg-red-500 text-white/50 text-center font-bold px-4 rounded-lg py-2 hover:bg-red-700'>Delete listing</button>
      </div>
    </div>
  )
}

export default DeletePopup