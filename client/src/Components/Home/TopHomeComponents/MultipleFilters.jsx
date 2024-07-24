import React, { useState } from 'react'

import { BsBackspace } from 'react-icons/bs'
import GuestandRoomsFilter from './MultipleFiltersComponents/GuestandRoomsFilter'
import PriceFilter from './PriceFilter'
import AccomodationTypes from './MultipleFiltersComponents/AccomodationTypes'
import Amenities from './MultipleFiltersComponents/Amenities'
import LocationFilter from './MultipleFiltersComponents/LocationFilter'
import SortByFilter from './MultipleFiltersComponents/SortByFilter'
import { useDispatch } from 'react-redux'
import { fetchAllProperties } from '../../../controller/data/AllPropertySlice/allPropertySlice'

function MultipleFilters({setFilter,filter}) {
    const [adult,setAdult] = useState(0)
    const [bedroom,setBedroom]= useState(0)
    const [bathroom, setBathroom] = useState(0)
    const [Children, setChildern] = useState(0)
   const [amenities,setAmenities] = useState({
    wifi:false,pool:false,balcony:false,kitchen:false,parking:false,
    tv:false,airCondition:false,petFriendly:false,washingMachine:false,
    chimney:false,terrace:false,minibar:false,swimmingPool:false,
    electricVehicleCharge:false,garden:false,all:false
  })
  const [accomodation,setAccomodotion] = useState({
    hotel:false,apartment:false,house:false,chalet:false,camping:false,holidayPark:false,farmHouse:false,bedAndBreackfast:false,other:false,
  })
    const dispatch = useDispatch()
    const searchHandler = ()=>{
      dispatch(fetchAllProperties(JSON.stringify({filter:{
        adult,
        bedroom,
        bathroom,
        Children,
        amenities,
        accomodation,
      }})))
      setFilter(false)
    }
  return (
    <dialog open={filter} className=' overflow-y-scroll top-[8%]  w-[96%] md:w-[50%]   h-[85vh] left-0 z-10  fixed md:top-[10%] md:left-[10%] rounded-lg   bg-white border-[1px] shadow-lg shadow-black'>
      <div className='w-full h-auto px-3'>
      <div className='w-full  bg-white py-4 sticky top-0 left-0 border-b border-b-neutral-300 px-10 flex flex-col gap-5 '>
        <div className='flex justify-between items-center'>
        <button onClick={()=> setFilter(false)}  className='font-bold text-2xl '><BsBackspace/></button>
        <button onClick={()=> setFilter(false)} className=' text-x text-neutral-400'>Clear</button>
        </div>
        <h2 className='text-3xl font-bold '>Filters</h2>
      </div>
      <div>Selected</div>
      <GuestandRoomsFilter adult={adult} setAdult={setAdult} bedroom={bedroom} setBedroom={setBedroom} bathroom={bathroom} setBathroom={setBathroom} Children={Children} setChildern={setChildern} />
      {/* <PriceFilter/> */}
      <Amenities amenities={amenities} setAmenities={setAmenities}/>
      <AccomodationTypes accomodation={accomodation} setAccomodotion={setAccomodotion}/>
      <LocationFilter/>
      <SortByFilter/>
        <div className=' sticky bottom-0 left-0 border-t-[1px] pb-2 bg-white border-t-neutral-300 w-full h-16 flex items-end justify-end'>
          <div className='flex gap-14 mr-10'>
            <button onClick={()=>setFilter(false)}  className='w-24 h-12 bg-neutral-200 text-center text-neutral-700 font-bold rounded-md py-2'>Cancel</button>
            <button onClick={searchHandler} className='w-24 h-12 bg-fuchsia-800 text-center text-white font-bold rounded-md py-2'>Apply</button>
          </div>
        </div>
      </div>
      </dialog>
  )
}

export default MultipleFilters