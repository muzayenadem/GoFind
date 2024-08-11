import React, { useEffect, useState } from 'react'
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { useSelector,useDispatch } from 'react-redux';

//components

import PriceFilter from './TopHomeComponents/PriceFilter';

import { fetchAllProperties } from '../../controller/data/AllPropertySlice/allPropertySlice';
import AreaFilter from './TopHomeComponents/AreaFilter';
import CategoryFilter from './TopHomeComponents/CategoryFilter';
import RoomsFilter from './TopHomeComponents/RoomsFilter';
import DistanceFilter from './TopHomeComponents/DistanceFilter';
import MultipleFilters from './TopHomeComponents/MultipleFilters';
import TypeFilter from './TopHomeComponents/TypeFilter';
import Mee from './HomeWithMap/Mee';
import { renterTokenReducer } from '../../controller/tokens/renterToken';
import { landlordTokenReducer } from '../../controller/tokens/landlordToken';
function HomeTop() {
    const [searchValue, setSearchValue] = useState("")
    const [type, setType] = useState(false)
    const [rent, setRent] = useState(false)
    const [filter,setFilter]  = useState(false)
    const [price, setPrice] = useState(false)
    const [room, setRoom] = useState(false)
    const [livingArea,setLivingArea]  = useState(false)
    const [meter, setMeter] = useState(false)



    const dispatch = useDispatch()
    const searchHandler = (e) =>{
        e.preventDefault()
        console.log(searchValue)
        if(searchValue){
        dispatch(fetchAllProperties(JSON.stringify({value:searchValue})))
        }
    }

    const renterError = useSelector(state => state.renterToken.error)
    const landlordError = useSelector(state => state.landlordToken.error)

    console.log({renterError,landlordError})
  
    if(renterError == 'pending' & landlordError == 'pending'){
      return (
       <div className='animate-pulse flex gap-5 container mx-auto py-25 bg-white px-10 flex-col'>

        <div className="flex flex-col py-6 gap-4">
          <div className="flex w-64 h-8 bg-gray-300 rounded-md"></div>
          <div className="flex w-52 h-6 bg-gray-300 rounded-md"></div>
        </div>
         <div className="flex gap-5">
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
           <div className="w-96 h-12 bg-gray-300"></div>
           <div className="w-36 md:hidden h-12 bg-gray-300 "></div>
         <div className="hidden md:flex gap-3">
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
           <div className='w-32 h-12 rounded-md bg-gray-300'></div>
         </div>
         </div>
       </div>
       )}
       if(renterError != 'succed' & renterError != 'pending' & landlordError != 'succed' & landlordError != 'pending'){
        return (
          <div className='text-center font-bold text-3xl py-40'>{renterError}</div>
        )
       }
  return (
    <>
    <div className='  py-3  px-2' >
            <div className=' py-15 bg-white flex flex-col gap-5'>
            <h1 className=' text-2xl text-neutral-300 font-bold '> FIND YOUR NEXT HOME</h1>
           <h2 className=' text-2xl font-bold '>Rent a place, stay safe</h2>
                 <div className='w-[100%] bg-white  flex md:flex-wrap rounded-lg shadow-md gap-2'>
                 <div className='w-32 items-center justify-center  hidden md:block'>
                      <div onMouseOver={()=> {
                        setRent(true)
                        setType(false)
                        setPrice(false)
                        setMeter(false)
                        setFilter(false)
                        setLivingArea(false)
                        setRoom(false)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start pt-3 w-32 justify-center h-14'>
                        <h1>Rent/Buy</h1>
                        <span className='text-2xl'>{ rent ? <MdOutlineArrowDropDown/> : <MdArrowDropUp/>}</span>
                      </div>
                      <TypeFilter setRent={setRent} rent={rent}/>
                     </div>
                 <span className='w-[6%] from-neutral-500 text-2xl items-center justify-center flex text-center py-auto'>
                         <CiLocationOn/>
                     </span>
                     <input
                     onInput={searchHandler}
                     className='bg-white focus:outline-none'
                     placeholder='Search by, Zip code , Country '
                     type='search'
                     onChange={(e) => setSearchValue(e.target.value)}
                     />
                           <span onClick={searchHandler} className='w-[4%] from-neutral-500 text-2xl items-center justify-center flex text-center py-auto'>
                         <GoSearch/>
                     </span>
                     <div className='w-32  hidden md:block'>
                      <div onMouseOver={()=> {
                            setRent(false)
                            setType(true)
                            setPrice(false)
                            setMeter(false)
                            setFilter(false)
                            setLivingArea(false)
                            setRoom(false)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start w-32 pt-3 justify-center h-14'>
                        <h1>Type</h1>
                        <span className='text-2xl'>{ type ? <MdOutlineArrowDropDown/> : <MdArrowDropUp/>}</span>
                      </div>
                      <CategoryFilter setType={setType} type={type}/>
                     </div>
                     
                     <div className='w-32  hidden md:block '>
                      <div onMouseOver={()=> {
                            setRent(false)
                            setType(false) 
                            setPrice(false)
                            setMeter(true)
                            setFilter(false)
                            setLivingArea(false)
                            setRoom(false)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start w-32 pt-3 justify-center h-14'>
                        <h1>0+ km</h1>
                        <span className='text-2xl'>{ meter ?  <MdOutlineArrowDropDown/> : <MdArrowDropUp/>}</span>
                      </div>
                      <DistanceFilter setMeter={setMeter} meter={meter}/>
                     </div>

                     <div className='w-32  hidden md:block'>
                      <div onMouseOver={()=> {
                           setRent(false)
                           setType(false)
                           setPrice(true)
                           setMeter(false)
                           setFilter(false)
                           setLivingArea(false)
                           setRoom(false)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start w-32 pt-3 justify-center h-14'>
                        <h1>Price</h1>
                        <span className='text-2xl'>{ price ? <MdOutlineArrowDropDown/> : <MdArrowDropUp/> }</span>
                      </div>
                      <PriceFilter setPrice={setPrice} price={price}/>
                     </div>

                     <div className='w-32  hidden md:block'>
                      <div onMouseOver={()=> {
                        setRent(false)
                        setType(false)
                        setPrice(false)
                        setMeter(false)
                        setFilter(false)
                        setLivingArea(true)
                        setRoom(false)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start w-32 pt-3 justify-center h-14'>
                        <h1>Living area</h1>
                        <span className='text-2xl'>{ livingArea ?  <MdOutlineArrowDropDown/> : <MdArrowDropUp/>}</span>
                      </div>
                      <AreaFilter setLivingArea={setLivingArea} livingArea={livingArea}/>
                      </div>

                     <div className='w-32  hidden md:block'>
                      <div onMouseOver={()=> {
                         setRent(false)
                         setType(false)
                         setPrice(false)
                         setMeter(false)
                         setFilter(false)
                         setLivingArea(false)
                         setRoom(true)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start w-32 pt-3 justify-center h-14'>
                        <h1>Rooms</h1>
                        <span className='text-2xl'>{ room ? <MdOutlineArrowDropDown/> : <MdArrowDropUp/>}</span>
                      </div>
                      <RoomsFilter setRoom={setRoom} room={room}/>
                     </div>

                     <div className='w-32 '>
                      <div onMouseOver={()=> {
                           setRent(false)
                           setType(false)
                           setPrice(false)
                           setMeter(false)
                           setFilter(true)
                           setLivingArea(false)
                           setRoom(false)
                      }} className='flex gap-2 border-[1px] border-neutral-200 items-start md:w-32 pt-3 justify-center h-14'>
                         <span onClick={searchHandler} className=' from-neutral-500 text-2xl items-center justify-center flex text-center py-auto'>
                         <GiSettingsKnobs/>
                     </span>
                        <h1 className='hidden md:block'>Filters</h1>
                      </div>
                     </div>
                 </div>
            </div>
    </div>
    <MultipleFilters  setFilter={setFilter} filter={filter}/>
    </>
  )
}
export default HomeTop