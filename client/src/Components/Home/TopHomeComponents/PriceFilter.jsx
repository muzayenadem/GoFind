import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'

function PriceFilter({setPrice,price}) {
  const [min,setMin] = useState('')
  const [max,setMax] = useState('')

  const dispatch = useDispatch()
  const searchHandler = (e) =>{
      e.preventDefault()
      console.log(`${min},${max}`)
      if(min & max){
      dispatch(fetchAllProperties(JSON.stringify({minPrice:min,maxPrice:max})))
      }
      setPrice(false)
  }
  return (
    <div onMouseLeave={()=>setPrice(false)} className={`w-80 h-52 bg-neutral-700 shadow-md shadow-black forPr:right-2 ${!price && 'hidden'} rounded-md mt-4 z-10 absolute `}>
    <div className='w-5 h-5 rotate-45 -mt-2 ml-[10%] bg-neutral-700  forPr:ml-[53%] '></div>
    <div className='flex justify-center items-start flex-col border-b-[2px] border-b-orange-400 p-2'>
      <h1 className=' text-white text-center ml-[30%] font-bold'>Price Range</h1>
    </div>
    <div className='flex gap-5 py-5 px-auto items-center justify-between px-6 '>
      <div className='flex flex-col gap-1'>
        <h2 className='font-bold text-white'>Minimum</h2>
        <input onChange={(e) => setMin(e.target.value)} type='number' placeholder='Min' className='w-24 px-4 text-white font-bold h-10 focus:outline-none bg-neutral-700 border-[1px] border-orange-200'/>
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='font-bold text-white'>Maximum</h2>
        <input onChange={(e) => setMax(e.target.value)} type='number' placeholder='Max' className='w-24 px-4 text-white font-bold h-10 focus:outline-none bg-neutral-700 border-[1px] border-orange-200'/>
      </div>
    </div>
    <button onClick={searchHandler} className='w-full h-10 mt-1.5 bg-pink-800 text-center text-white font-bold py-2'>Apply</button>
    </div>
  )
}

export default PriceFilter