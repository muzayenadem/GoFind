import React from 'react'

function Amenities() {
  return (
    <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
    <h2 className='text-xl font-bold '>Amenities</h2>
    <div className='flex justify-between py-5 px-6'>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Pet-friendly</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Kitchen</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Washing machines</label>
            </div>
        </div>

     <div className='flex flex-col gap-2'>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Pool</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">TV</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Parking</label>
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">WiFi</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Air conditioning</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Balcony/Patio</label>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Amenities