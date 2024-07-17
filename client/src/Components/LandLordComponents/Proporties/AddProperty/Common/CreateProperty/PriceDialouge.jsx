import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoIosReturnRight } from "react-icons/io";
function PriceDialouge({value,next,previous,state}) {
const [checked,setChecked] = useState(false)
 const persantage = (value * 10) / 100
 const realValue = value - persantage
    const dispatch = useDispatch()
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col">
        <p className='title'>We charge a 10% fee for the services we render.</p>
       <div className="flex flex-col gap-2 py-5  px-6 border-b-[1px] border-b-neutral-200">
       <div className="flex gap-2 ">
          <span className='text-2xl text-blue-800 font-bold'><IoIosReturnRight/></span>
          <p className='des'>Streamline your process with instant booking confirmations.</p>
        </div>
        <div className="flex gap-2 ">
          <span className='text-2xl text-blue-800 font-bold'><IoIosReturnRight/></span>
          <p className='des'>Property Upgrades and Renovations</p>
        </div>
        <div className="flex gap-2 ">
          <span className='text-2xl text-blue-800 font-bold'><IoIosReturnRight/></span>
          <p className='des'>24/7 support available in your language.</p>
        </div>
        <div className="flex gap-2 ">
          <span className='text-2xl text-blue-800 font-bold'><IoIosReturnRight/></span>
          <p className='des'>We advertise your property on Google.</p>
        </div>
        <div className="flex gap-2 ">
          <span className='text-2xl text-blue-800 font-bold'><IoIosReturnRight/></span>
          <p className='des'>Tenant relation</p>
        </div>
       </div>
      </div>
      <div className="flex py-5">
        <h1 className='title2'>Your total earnings, after deducting taxes, sum up to <span className='text-xl px-2 text-blue-700 font-bold underline-offset-1'>${realValue}</span> </h1>
      </div>
      <div className="flex flex-col">
        <label className='flex gap-2'>
          <input className='w-5 h-5' onChange={()=> setChecked(!checked)} checked={checked} type='checkbox'/>
          <span className='label-text'>Do you agree to the 10% service fee for the services we are offering?</span>
        </label>
      </div>
      <div className="flex justify-end items-end self-end  py-5 gap-2">
        <button onClick={()=> state(false)} className={`w-20 h-10 ${!checked ? 'bg-fuchsia-700 rounded-md  hover:bg-fuchsia-900' : ' bg-blue-700' }  text-white font-bold text-center`}>Cancel</button>
        <button disabled={!checked} onClick={()=> dispatch(next())} className={`w-56 h-10 ${checked ? 'bg-fuchsia-700 rounded-md  hover:bg-fuchsia-900' : ' bg-neutral-400' }  text-white font-bold text-center`}>Continue</button>
      </div>
    </div>
  )
}

export default PriceDialouge