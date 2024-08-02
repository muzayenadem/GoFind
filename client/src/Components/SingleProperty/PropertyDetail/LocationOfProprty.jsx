import React from 'react'
import { map } from '../../Data/Images'

function LocationOfProprty() {
  return (
    <div style={{backgroundImage:`url(${map})` , marginLeft:'10%', marginTop:'30px',marginBottom:'30px' ,width:"80%",height:'30vh',borderRadius:'10px',backgroundPosition:'center',backgroundSize:'cover'}} className='w-[80%] py-6 ml-[10%] bg-white shadow-md shadow-neutral-400 rounded-md min-h-[60vh]'>LocationOfProprty</div>
  )
}

export default LocationOfProprty