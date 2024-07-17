import React, { useState } from 'react'
import { FaChevronLeft, FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { setArea, setDetails } from '../../../../../../controller/AddProperty/propertyType'

function PropertyDetails({next,page,previous}) {
    const details = useSelector(state => state.propertyType.details)
    const area = useSelector(state => state.propertyType.area)
    const [bedroom, setBedRoom] = useState(details.bedroom == ''  ?  1 : details.bedroom)
    const [bathroom, setBathroom] = useState(details.bathroom =='' ? 1 : details.bathroom)
    const [livingRoom, setLivingroom] = useState(details.livingRoom == '' ? 1 : details.livingRoom)  
    const [guestCapability ,setGuestCapability] = useState(details.guestCapability == '' ? 1 : details.guestCapability)
    const [minArea, setMinArea] = useState(area.min)
    const [maxArea, setMaxArea] = useState(area.max)
    
    const propertyType = useSelector(state => state.propertyType.subCategory)
    const clickHndler = () =>{
        const detail = {
            bedroom,bathroom,livingRoom,guestCapability
        }
        const areas = {
            min:minArea,
            max:maxArea,
        }
        dispatch(setDetails(detail))
        dispatch(setArea(areas))
        dispatch(next())
    }
    const dispatch = useDispatch()
    console.log({area})
  return (
    <section className='min-h-screen   w-[96%] md:w-[78%] md:ml-[7%] lg:w-[100%] xl:w-[130%] 2xl:w-[150%] lg:ml-[15%] xl:ml-[25%] 2xl:ml-[30%] ml-[2%] py-20 justify-center items-center'>
    <div className='  gap-6 flex flex-col md:w-[90%] '>
        <h1 className='head1 text-center'>Fill all steps carefully for your {propertyType}</h1>



    <div className=''>
        <div className='bg-white py-10 px-6 gap-3 rounded-md shadow-md shadow-neutral-700 flex flex-col '>
            <h1 className='title2'>Property details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-20 py-5  border-b-[1px] border-b-neutral'>
                <div className="flex flex-col gap-2 ">
                    <p className='des'>Living room</p>
                    <div className='flex gap-2'>
                    <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setLivingroom(prev =>  prev >= 0 ? prev = prev - 1 : prev = 0)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{livingRoom >= 0 ? livingRoom : 1}</h2></div>
                    <div onClick={()=>{
                        setLivingroom(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                   </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className='des'>How many bathrooms are there?</p>
                    <div className='flex gap-2'>
                    <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setBathroom(prev =>  prev >= 0 ? prev = prev - 1 : prev = 0)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{bathroom}</h2></div>
                    <div onClick={()=>{
                        setBathroom(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                   </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className='des'>How many guest can stay in your home</p>
                    <div className='flex gap-2'>
                    <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setGuestCapability(prev =>  prev >= 0 ? prev = prev - 1 : prev = 0)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{guestCapability >= 0 ? guestCapability : 1}</h2></div>
                    <div onClick={()=>{
                        setGuestCapability(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                   </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className='des'>How many bed rooms are exist in your home  </p>
                    <div className='flex gap-2'>
                    <div className='flex justify-between gap-3'>
                    <div onClick={()=>{
                        setBedRoom(prev =>  prev >= 0 ? prev = prev - 1 : prev = 0)
                    }}><span className=' text-neutral-500 text-3xl'><FaRegMinusSquare/></span></div>
                    <div><h2 className='  text-neutral-500 text-2xl'>{bedroom >= 0 ? bedroom : 1}</h2></div>
                    <div onClick={()=>{
                        setBedRoom(prev => prev = prev + 1)
                    }}><span className=' text-fuchsia-700 text-3xl'><FaRegPlusSquare/></span></div>
                   </div>
                    </div>
                  </div>
            </div>




            <h1 className='title2'>Price range and available area</h1>



            <div className='flex flex-col gap-5 justify-between px-5 md:px-20 py-5 border-b-[1px] border-b-neutral-300 '>
            <h2 className='text-xl font-bold '>Price Range</h2>
         <div className='flex flex-col md:flex-row py-2 px-5 justify-normal gap-2'>
            <div className='w-full'>
            <div className='flex flex-col gap-2'>
                <h2 className='des '>Minimum price</h2>
                <input type='number' placeholder='Min' className='w-[60%] px-4 text-black font-bold h-10 focus:outline-none border-[1px] border-orange-200'/>
            </div>
            </div>
            <div className='w-full'>
            <div className='flex flex-col gap-2'>
                <h2 className='des '>Maximum price</h2>
                <input type='number' placeholder='Max' className='w-[60%] px-4 text-black font-bold h-10 focus:outline-none border-[1px] border-orange-200'/>
            </div>
            </div>
         </div>
         <h2 className='text-xl font-bold '>Available area meter squeare</h2>
         <div className='flex flex-col md:flex-row py-2 px-5 justify-normal gap-2'>
            <div className=' w-full '>
            <div className='flex flex-col gap-2'>
                <h2 className='des '>Minimum area </h2>
                <input type='number' onChange={(e)=> setMinArea(e.target.value)} defaultValue={area.min} placeholder='Min' className='w-[60%] px-4 text-black font-bold h-10 focus:outline-none border-[1px] border-orange-200'/>
            </div>
            </div>
            <div className=' w-full md'>
            <div className='flex flex-col gap-2'>
                <h2 className='des '>Maximum area</h2>
                <input type='number' onChange={(e) => setMaxArea(e.target.value)} defaultValue={area.max} placeholder='Max' className='w-[60%] px-4 text-black font-bold h-10 focus:outline-none border-[1px] border-orange-200'/>
            </div>
            </div>
         </div>
            </div>
        </div>
    </div>



    
    <div className='flex gap-2 '>
        <div  onClick={()=> dispatch(previous())} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
            <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
        </div>
        <button  onClick={clickHndler} className={`w-[73%]   bg-fuchsia-700  py-3 font-bold text-white text-center`}>Continue</button>
    </div>
    </div>
    </section>
  )
}

export default PropertyDetails