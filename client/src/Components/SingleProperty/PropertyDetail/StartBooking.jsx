import { GoShareAndroid } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosArrowDown, IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useState } from "react";
import BookingCalanderStartDate from "./BookingCalanderStartDate";
import BookingCalenderEndDate from "./BookingCalenderEndDate";
import AdditinalRequirement from "./AdditinalRequirement";
import { Link, useNavigate } from "react-router-dom";
import isRenterLogginned from "../../componentsData/isRenterLogginned";
function StartBooking({property}) { 
    const [startDate, setStartDate] = useState(null)
    const [endDate ,setEndDate] = useState(null) 
    const [openStartDate, setOpenStartDate] = useState(false)
    const [openEndDate, setOpenEndDate] = useState(false)
    const [openAdditional, setOpenAditional] = useState(false)




    const startDateHandler = ()=>{
        setOpenAditional(false)
        setOpenEndDate(false)
        setOpenStartDate(true)
    }
    const endDateHandler = () =>{
        setOpenAditional(false)
        setOpenStartDate(false)
        setOpenEndDate(true)
    }
   
    const additionalHandler = ()=>{
        setOpenStartDate(false)
        setOpenEndDate(false)
        setOpenAditional(true)
    }

    const renterToken = isRenterLogginned()
    console.log({BookingRenterTOken:renterToken})
    const navigate = useNavigate('')
    const startBokingHandler = () =>{
        if(renterToken == true){
            navigate(`/property-booking/${property._id}`)
        }
        if(renterToken !== true){
            navigate(`/renter-login/${property._id}`)
        } 
    }
  return (
    <>
    <div className="flex flex-col">
        <div className="w-full shadow-md shadow-neutral-400 rounded-md ">
           <div className="border-b-[1px] border-neutral-400">
            <div className="bg-neutral-200 py-1 text-center justify-center">
                <p className='text-base text-neutral-700'>Home Id: {property._id}</p>
            </div>
            <div className="flex flex-col px-3 py-2 ">
                <div className="flex justify-between w-[70%] items-center self-center ">
                    <div className="flex gap-2 text-center justify-center items-center text-lg">
                        <span><GoShareAndroid/></span>
                        <p>Share</p>
                    </div>
                    <div className="flex gap-2 text-center justify-center items-center text-lg">
                        <span><GoHeart/></span>
                        <p>Save</p>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex gap-2 font-bold flex-wrap" style={{fontSize:'13px'}}>
                        <p>{property.area.max && `${property.area.max}-M2 ${property.category}`}</p>
                        <p>{property.details.bedroom}-Bedroom</p>
                        <p>{property.details.bathroom}-Bathroom</p>
                    </div>
                    <p className='text-sm text-neutral-500'>{property.location.country}, {property.location.city}</p>
                    <div className="flex text-center items-center gap-2">
                        <p className='text-fuchsia-800 font-bold'>4.5</p>
                        <div className="flex text-fuchsia-800">
                            <span><IoIosStar/></span>
                            <span><IoIosStar/></span>
                            <span><IoIosStar/></span>
                            <span><IoIosStar/></span>
                            <span><IoIosStarHalf/></span>
                    </div>
                </div>
                <div className="">
                <p className='text-sm text-neutral-500'>Outstanding  {1==1 && `(${7777} reviews)`} </p>
              </div>
                </div>
                <div className="flex bg-green-100/50 text-green-700 font-bold w-full px-4 py-2 text-center justify-between ">
                <p>Selected dates are available</p>
                <span><IoCheckmarkCircle/></span>
                </div>
                <div className="flex flex-col border-[1px] border-neutral-500 rounded-md">
                   <div className="flex justify-between w-full border-b-[1px] border-neutral-500">
                   <button onClick={startDateHandler} className={`flex p-2 items-center gap-3 w-[48%] ${openStartDate == true && 'border-b-[2px] border-blue-600'}`}>
                        <span><MdOutlineCalendarMonth/></span>
                         <p>{startDate}</p>
                         <p>{openStartDate == true ? <IoIosArrowUp/> : <IoIosArrowDown/>}</p>
                    </button>
                    <div className="h-[67px] text-neutral-500 w-[1px] bg-slate-500"></div>
                    <button onClick={endDateHandler} className={`flex p-2 items-center gap-3 w-[48%] ${openEndDate == true && 'border-b-[2px] border-blue-600'}`}>
                        <span><MdOutlineCalendarMonth/></span>
                         <p>{endDate}</p>
                         <p>{openEndDate == true ? <IoIosArrowUp/> : <IoIosArrowDown/>}</p>
                    </button>
                   </div>
                   <button onClick={additionalHandler} className={`flex px-2 py-3 justify-between w-full ${openAdditional == true && 'border-b-[2px] border-blue-600'}`}>
                    <div className="flex gap-2">
                        <span className="text-xl"><MdOutlinePersonAddAlt/></span>
                        <p style={{fontSize:'12px'}}> {property.details.guestCapability} Guest (2 Adaults, 3 Cildren)</p>
                    </div>
                    <div className="flex justify-end items-end self-end  ">  <p>{openAdditional == true ? <IoIosArrowUp/> : <IoIosArrowDown/>}</p></div>
                   </button>
                </div>
                <div className="flex justify-between items-center py-3 w-full">
                    <p style={{fontSize:'14px'}}>Price per month</p>
                    <p className="font-bold text-xl">${property.price}</p>
                </div>
                <div className="flex justify-between items-center py-3 w-full">
                    <p style={{fontSize:'14px'}}>Price per month</p>
                    <p className="font-light text-lg">$3248,3426</p>
                </div>
            </div>
          </div> 
          <div className="flex p-2 justify-center py-2">
           <p className="text-center hover:bg-fuchsia-300 px-4 py-2 hover:rounded-md text-fuchsia-700 font-semibold">Free cancellation before 11/24/2024</p>
          </div>
        </div>
        <div onClick={startBokingHandler} className="flex w-full py-3 mt-3 rounded-md justify-center text-center bg-violet-700 text-white font-bold">Start Booking</div>
    </div>
    <BookingCalanderStartDate open={openStartDate} startDate={startDate} setOpenStartDate={setOpenStartDate} setOpenEndDate={setOpenEndDate} setStartDate={setStartDate}/>
    <BookingCalenderEndDate open={openEndDate} endDate={endDate} setEndDate={setEndDate} setOpenEndDate={setOpenEndDate}/>
    <AdditinalRequirement open={openAdditional}/>
    </>
  )
}

export default StartBooking