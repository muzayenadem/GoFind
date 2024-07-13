import React, { useState } from 'react'
import {FaSearchengin} from 'react-icons/fa6'
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { GiDrawbridge, GiSettingsKnobs } from "react-icons/gi";
import { BsBackspace } from "react-icons/bs";

import { bg3, bg4, bg5, bg6, bg7 } from '../Data/Images'
import { CiLocationOn } from "react-icons/ci";
import { useSelector,useDispatch } from 'react-redux';
import { addition,substr } from '../../controller/Real/Renters';
import { fetchHomes } from '../../controller/data/HomeSlice/homeSlice';


//components
import GuestandRoomsFilter from './TopHomeComponents/GuestandRoomsFilter';
import PriceFilter from './TopHomeComponents/PriceFilter';
import Amenities from './TopHomeComponents/Amenities';
import AccomodationTypes from './TopHomeComponents/AccomodationTypes';
import LocationFilter from './TopHomeComponents/LocationFilter';
import SortByFilter from './TopHomeComponents/SortByFilter';
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
        dispatch(fetchHomes(searchValue))
        }
    }

    const renter = useSelector(state => state.renterNum.num)
    const searchedHome = useSelector(state => state.searchedHomeReducer.searched)
    console.log(searchedHome)
  return (
    <>
    <div className=' py-3 px-2 border-b-[1px]'>
            <div className='container mx-auto py-15  flex flex-col gap-5 border-b-black '>
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
                        <span className='text-2xl'>{ rent ? <MdArrowDropUp/> : <MdOutlineArrowDropDown/>}</span>
                      </div>
                      <div onMouseLeave={()=>setRent(false)} className={`w-40 h-28 bg-neutral-700 shadow-md shadow-black  ${!rent && 'hidden'} rounded-md mt-4 z-10 absolute `}>
                      <div className='w-5 h-5 rotate-45 -mt-2 bg-neutral-700 ml-[10%]'></div>
                      <div className='py-4 flex flex-col gap-2 items-center justify-center text-white '>
                        <h2 className='font-bold hover:bg-pink-700 w-[98%] py-1 h-8 px-10 bg-neutral-700'>Rent</h2>
                        <h2 className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Buy</h2>
                      </div>
                      </div>
                     </div>
                 <span className='w-[6%] from-neutral-500 text-2xl items-center justify-center flex text-center py-auto'>
                         <CiLocationOn/>
                     </span>
                     <input
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
                        <span className='text-2xl'>{ type ? <MdArrowDropUp/> : <MdOutlineArrowDropDown/>}</span>
                      </div>
                      <div onMouseLeave={()=>setType(false)} className={`w-40 h-36 bg-neutral-700 shadow-md shadow-black  ${!type && 'hidden'} rounded-md mt-4 z-10 absolute `}>
                      <div className='w-5 h-5 rotate-45 -mt-2 bg-neutral-700 ml-[10%]'></div>
                      <div className='py-4 flex flex-col gap-2 items-center justify-center text-white'>
                        <h2 className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Appartment</h2>
                        <h2 className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Home</h2>
                        <h2 className='font-bold hover:bg-pink-700 w-[98%] h-8 py-1 px-10 bg-neutral-700'>Land</h2>
                      </div>
                      </div>
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
                        <span className='text-2xl'>{ meter ? <MdArrowDropUp/> : <MdOutlineArrowDropDown/>}</span>
                      </div>
                      <div onMouseLeave={()=>setMeter(false)} className={`w-40 h-auto  bg-neutral-700 shadow-md shadow-black  ${!meter && 'hidden'} rounded-md mt-4 z-10 absolute `}>
                      <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
                      <div>
                        {
                          kilometers.map((single,i) =>{
                            return(
                              <div key={i} className='w-[98%] h-8 bg-slate-600 m-1 text-white font-bold px-10 py-1 hover:bg-pink-700'>
                                {single}
                              </div>
                            )
                          })
                        }
                      </div>
                      </div>
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
                        <span className='text-2xl'>{ price ? <MdArrowDropUp/> : <MdOutlineArrowDropDown/>}</span>
                      </div>
                      <div onMouseLeave={()=>setPrice(false)} className={`w-80 h-52 bg-neutral-700 shadow-md shadow-black  ${!price && 'hidden'} rounded-md mt-4 z-10 absolute `}>
                      <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
                      <div className='flex justify-center items-start flex-col border-b-[2px] border-b-orange-400 p-2'>
                        <h1 className=' text-white text-center ml-[30%] font-bold'>Price Range</h1>
                      </div>
                      <div className='flex gap-5 py-5 px-auto items-center justify-between px-6 '>
                        <div className='flex flex-col gap-1'>
                          <h2 className='font-bold text-white'>Minimum</h2>
                          <input type='number' placeholder='Min' className='w-24 px-4 text-white font-bold h-10 focus:outline-none bg-neutral-700 border-[1px] border-orange-200'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h2 className='font-bold text-white'>Maximum</h2>
                          <input type='number' placeholder='Max' className='w-24 px-4 text-white font-bold h-10 focus:outline-none bg-neutral-700 border-[1px] border-orange-200'/>
                        </div>
                      </div>
                      <div className='w-full h-10 mt-1.5 bg-pink-800 text-center text-white font-bold py-2'>Apply</div>
                      </div>
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
                        <span className='text-2xl'>{ livingArea ? <MdArrowDropUp/> : <MdOutlineArrowDropDown/>}</span>
                      </div>
                      <div onMouseLeave={()=>setLivingArea(false)} className={`w-80 h-52  bg-neutral-700 shadow-md shadow-black  ${!livingArea && 'hidden'} rounded-md mt-4 z-10 absolute `}>
                      <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
                      <div className='flex justify-center items-start flex-col border-b-[2px] border-b-orange-400 p-2'>
                        <h1 className=' text-white text-center ml-[30%] font-bold'>meter squere</h1>
                      </div>
                      <div className='flex gap-5 py-5 px-auto items-center justify-between px-6 '>
                        <div className='flex flex-col gap-1'>
                          <h2 className='font-bold text-white'>Min</h2>
                          <div className='h-10 w-32 border-[1px] border-orange-200 bg-neutral-700 flex gap-2'>
                          <input placeholder='Min' className='w-20 px-4 text-white font-bold h-9.7 focus:outline-none bg-neutral-700 border-b-[1px] border-b-orange-200'/>
                          <h2 className='text-white font-bold mt-1'>m2</h2>
                          </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                        <h2 className='font-bold text-white'>Max</h2>
                          <div className='h-10 w-32 border-[1px] border-orange-200 bg-neutral-700 flex gap-2'>
                          <input placeholder='Max' className='w-20 px-4 text-white font-bold h-9.7 focus:outline-none bg-neutral-700 border-b-[1px] border-b-orange-200'/>
                          <h2 className='text-white font-bold mt-1'>m2</h2>
                          </div>
                        </div>
                      </div>
                      <div className='w-full h-10 mt-1.5 bg-pink-800 text-center text-white font-bold py-2'>Apply</div>
                      </div>
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
                        <span className='text-2xl'>{ room ? <MdArrowDropUp/> : <MdOutlineArrowDropDown/>}</span>
                      </div>
                      <div onMouseLeave={()=>setRoom(false)} className={`w-40 h-auto  bg-neutral-700 shadow-md shadow-black  ${!room && 'hidden'} rounded-md mt-4 z-10 absolute `}>
                      <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
                      <div>
                        {
                          rooms.map((single,i) =>{
                            return(
                              <div key={i} className='w-[98%] h-8 bg-slate-600 m-1 text-white font-bold px-10 py-1 hover:bg-pink-700'>
                                {single}
                              </div>
                            )
                          })
                        }
                      </div>
                      </div>
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
    <dialog onMouseLeave={()=>setFilter(false)} open={filter} className=' overflow-y-scroll top-[8%]  w-[96%] md:w-[50%]   h-[85vh] left-0 z-10  fixed md:top-[10%] md:left-[10%] rounded-lg   bg-white border-[1px] shadow-lg shadow-black'>
      <div className='w-full h-auto px-3'>
      <div className='w-full  bg-white py-4 sticky top-0 left-0 border-b border-b-neutral-300 px-10 flex flex-col gap-5 '>
        <div className='flex justify-between items-center'>
        <span className='font-bold text-2xl '><BsBackspace/></span>
        <p className=' text-x text-neutral-400'>Clear</p>
        </div>
        <h2 className='text-3xl font-bold '>Filters</h2>
      </div>
      <div>Selected</div>
      <GuestandRoomsFilter/>
      <PriceFilter/>
      <Amenities/>
      <AccomodationTypes/>
      <LocationFilter/>
      <SortByFilter/>
        <div className=' sticky bottom-0 left-0 border-t-[1px] pb-2 bg-white border-t-neutral-300 w-full h-16 flex items-end justify-end'>
          <div className='flex gap-14 mr-10'>
            <h2  className='w-24 h-12 bg-neutral-200 text-center text-neutral-700 font-bold rounded-md py-2'>Cancel</h2>
            <h2 className='w-24 h-12 bg-fuchsia-800 text-center text-white font-bold rounded-md py-2'>Apply</h2>
          </div>
        </div>
      </div>
      </dialog>
    </>
  )
}
export default HomeTop
const rooms = [1,2,3,4,5,6,7,8,9,10]
const kilometers = [1,5,10,20,50,100,300,700,1000,1500]