import React from 'react'

function PriceFilter() {
  return (
    <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
         <h2 className='text-xl font-bold '>Price Range</h2>
         <div className='flex py-2 px-5 justify-normal gap-11'>
            <div className='w-[40%]'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-bold '>Minimum</h2>
                <input type='number' placeholder='Min' className='w-[60%] px-4 text-black font-bold h-10 focus:outline-none border-[1px] border-orange-200'/>
            </div>
            </div>
            <div className='w-[40%]'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-bold '>Maximum</h2>
                <input type='number' placeholder='Max' className='w-[60%] px-4 text-black font-bold h-10 focus:outline-none border-[1px] border-orange-200'/>
            </div>
            </div>
         </div>
    </div>
  )
}

export default PriceFilter