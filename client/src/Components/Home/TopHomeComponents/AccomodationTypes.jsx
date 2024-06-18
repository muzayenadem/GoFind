import React from 'react'

function AccomodationTypes() {
  return (
    <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
    <h2 className='text-xl font-bold '>Accommodation types</h2>
    <div className='flex justify-between py-5 px-6'>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">House</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">FarmHouse</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Castle</label>
            </div>
        </div>

     <div className='flex flex-col gap-2'>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">  Appartment</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Camping</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Bed and Breakfast</label>
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Hotel</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Holiday Park</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Other</label>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AccomodationTypes