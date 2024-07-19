import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'

function AreaFilter({setLivingArea,livingArea}) {
    const [min,setMin] = useState('')
    const [max,setMax] = useState('')
  
    const dispatch = useDispatch()
    const searchHandler = (e) =>{
        e.preventDefault()
        console.log(`${min},${max}`)
        if(min & max){
        dispatch(fetchAllProperties(JSON.stringify({minArea:min,maxArea:max})))
        }
        setLivingArea(false)
    }
  return (
    <div onMouseLeave={()=>setLivingArea(false)} className={`w-80 h-52  bg-neutral-700 shadow-md shadow-black  ${!livingArea && 'hidden'} rounded-md mt-4 z-10 absolute `}>
    <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
    <div className='flex justify-center items-start flex-col border-b-[2px] border-b-orange-400 p-2'>
      <h1 className=' text-white text-center ml-[30%] font-bold'>meter squere</h1>
    </div>
    <div className='flex gap-5 py-5 px-auto items-center justify-between px-6 '>
      <div className='flex flex-col gap-1'>
        <h2 className='font-bold text-white'>Min</h2>
        <div className='h-10 w-32 border-[1px] border-orange-200 bg-neutral-700 flex gap-2'>
        <input onChange={(e) => setMin(e.target.value)} placeholder='Min' className='w-20 px-4 text-white font-bold h-9.7 focus:outline-none bg-neutral-700 border-b-[1px] border-b-orange-200'/>
        <h2 className='text-white font-bold mt-1'>m2</h2>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
      <h2 className='font-bold text-white'>Max</h2>
        <div className='h-10 w-32 border-[1px] border-orange-200 bg-neutral-700 flex gap-2'>
        <input onChange={(e) => setMax(e.target.value)} placeholder='Max' className='w-20 px-4 text-white font-bold h-9.7 focus:outline-none bg-neutral-700 border-b-[1px] border-b-orange-200'/>
        <h2 className='text-white font-bold mt-1'>m2</h2>
        </div>
      </div>
    </div>
    <button onClick={searchHandler} className='w-full h-10 mt-1.5 bg-pink-800 text-center text-white font-bold py-2'>Apply</button>
    </div>
  )
}

export default AreaFilter