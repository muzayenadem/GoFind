import React from 'react'

function LocationFilter() {
    return (
        <div className='py-6 px-3 flex gap-5 flex-col border-b-[1px] border-b-neutral-300  '>
        <h2 className='text-xl font-bold '>Location</h2>
        <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Outside of city center</label>
            </div>
            <p className='text-sm text-neutral-500'>DISTANCE TO WATER</p>
            <div className='grid grid-cols-3 gap-5 py-5 px-7'>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">200 m</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">500 m</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">1 km</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">5 km</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">10 km</label>
            </div>
            </div>

            <h2 className='text-xl font-bold '>Location</h2>
        <div className='flex gap-2 '>
                <input  type='checkbox' id='checkBox'/>
                <label htmlFor="checkbox">Outside of city center</label>
            </div>
            <p className='text-sm text-neutral-500'>DISTANCE TO SKIING AREA</p>
            <div className='grid grid-cols-3 gap-5 py-5 px-7'>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">200 m</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">500 m</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">1 km</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">5 km</label>
            </div>
            <div className='flex gap-2 '>
                <input  type='radio' id='radio'/>
                <label htmlFor="radio">10 km</label>
            </div>
            </div>
        </div>
      )
}

export default LocationFilter