import React from 'react'

function SortByFilter() {
  return (
    <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
    <h2 className='text-xl font-bold '>Sort by</h2>
    <div className='flex gap-20 py-5 px-8'>
    <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">Most populer</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">Best value</label>
            </div>
    </div>
    </div>
  )
}

export default SortByFilter