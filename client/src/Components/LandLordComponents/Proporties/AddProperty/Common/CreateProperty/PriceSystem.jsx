import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import PriceDialouge from './PriceDialouge'

function PriceSystem({page,next,previous}) {
    const [value,setValue] = useState(0)
    const [open, setOpen] = useState(false)
    const [enable,setEnable] = useState(true)
    const propertyType = useSelector(state => state.propertyType.subCategory)
    const dispatch = useDispatch()
    const clickHndler = () =>{
       // dispatch(next())
       setOpen(true)
    }
  const  enableHandler = () =>{
   if (value > 0){
    setEnable(false)
   }else{
    setEnable(true)
   }
   console.log(value)
  }
  const changeHandler = (e) =>{
    e.preventDefault()
    setValue(e.target.value)
  }



  return (
    <>
    <div className='container mx-auto md:mx-20 m-[2%] w-[96%] py-10 justify-center items-center'>
        <div className='  gap-6 flex flex-col md:w-[96%] '>
            <h1 className='head1 text-center'>Fill all steps carefully for your {propertyType}</h1>
            <div className=''>
                <div className='bg-white py-10 px-6 gap-6 rounded-md shadow-md shadow-neutral-700 flex flex-col '>
                    <h1 className='title'>Pricing system</h1>
                    <h1 className='title2'>How much will you gain per month from your {propertyType}</h1>
                    <div className="flex">
                        <input 
                        className='w-70 h-10 border-[1px] border-neutral-400 px-5 py-2 focus:outline-none rounded-sm'
                        type='number' 
                        onInput={enableHandler}
                        onChange={(e)=>changeHandler(e)}
                        placeholder='$'/>
                    </div>
                    <p className='text-base text-neutral-600 '>make sure that setting the price it will be the price that we will show for renters </p>
                </div>
            </div>

            <div className='flex gap-2 '>
                <div  onClick={()=> dispatch(previous())} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                    <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
                </div>
                <button disabled={enable} onClick={clickHndler} className={`w-[73%]   ${enable ? ' bg-neutral-400' : 'bg-fuchsia-700'}  py-3 font-bold text-white text-center`}>Continue</button>
           </div>
        </div>
    </div>
    <dialog open={open} className='fixed z-10 bg-white rounded-md shadow-lg shadow-neutral-950 w-[96%] -left-[16%] lg:-left-[30%] top-[20%] md:w-[40%]  p-6'>
        <PriceDialouge value={value} next={next} previous={previous} page={page} state={setOpen}/>
    </dialog>
    </>
  )
}

export default PriceSystem