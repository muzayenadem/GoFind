import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import PriceDialouge from './PriceDialouge'
import { setPrice } from '../../../../../../controller/AddProperty/propertyType'

function PriceSystem({page,next,previous}) {
    let price = useSelector(state => state.propertyType.price)
    price = parseInt(price)
    const [value,setValue] = useState(price)
    const [open, setOpen] = useState(false)
    const [enable,setEnable] = useState(price <= 0 ? true : false)
    const propertyType = useSelector(state => state.propertyType.subCategory)
    const dispatch = useDispatch()
    const clickHndler = () =>{
       // dispatch(next())
       setOpen(true)
    }

  const changeHandler = (e) =>{
    e.preventDefault()
    setValue(e.target.value)
    dispatch(setPrice(e.target.value))
  }
  const  enableHandler = () =>{
    if (price == '' & price <= 0){
     setEnable(true)
    }else{
     setEnable(false)
    }
    console.log(value)
   }


console.log({price})
  return (
    <>
    <section className='  min-h-[110vh] w-[96%] md:w-[80%] md:ml-[10%] lg:w-[100%] xl:w-[125%] 2xl:w-[143%] lg:ml-[15%] xl:ml-[25%] 2xl:ml-[30%] ml-[2%] py-20 justify-center items-center'>
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
                        value={value !== price ? value || ` ${price}` : price}
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
    </section>
    <dialog open={open} className=' z-10 bg-white rounded-md shadow-lg shadow-neutral-950 w-[96%]  left-[1/2%]  lg:-left-[30%] top-[22%] md:w-[48%]  p-6'>
        <PriceDialouge value={value} next={next} previous={previous} page={page} state={setOpen}/>
    </dialog>
    </>
  )
}

export default PriceSystem