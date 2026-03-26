import React from 'react'

function PropertyForBooking({property,mainPhoto}) {
  return (
    <div className="flex flex-col bg-white shadow-md h-96 shadow-neutral-300 p-4 rounded-lg">
    <p className='text-lg font-semibold'>Summery order</p>
    <div className="flex gap-2 ">
    <img src={mainPhoto} className='w-34 h-24 rounded-md'/>
    <div className="">
    <p className='text-[14px]'>{property.name}</p>
    <p>${property.price}</p>
    </div>
    </div>
  </div>
  )
}

export default PropertyForBooking