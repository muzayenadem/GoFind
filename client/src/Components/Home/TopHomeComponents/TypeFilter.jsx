import React from 'react'

function TypeFilter({setRent,rent}) {
  return (
    <div onMouseLeave={()=>setRent(false)} className={`w-40 h-28 bg-neutral-700 shadow-md shadow-black  ${!rent && 'hidden'} rounded-md mt-4 z-10 absolute `}>
    <div className='w-5 h-5 rotate-45 -mt-2 bg-neutral-700 ml-[10%]'></div>
    <div className='py-4 flex flex-col gap-2 items-center justify-center text-white '>
      <h2 className='font-bold hover:bg-pink-700 w-[98%] py-1 h-8 px-10 bg-neutral-700'>Rent</h2>
      <h2 className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Buy</h2>
    </div>
    </div>
  )
}

export default TypeFilter