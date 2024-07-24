import React from 'react'
import singlePropertyData from '../componentsData/singlePropertyData'
function DetailOfProperty() {
  const property = singlePropertyData()
  console.log({proprtyFromRedux:property})
  return (
    <div className=' min-h-[50vh]'>
      <h2 className='text-3xl text-center font-bold py-20'>{property.name}</h2>
    </div>
  )
}

export default DetailOfProperty