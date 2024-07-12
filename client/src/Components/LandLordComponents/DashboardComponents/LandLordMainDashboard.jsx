import React from 'react'
import Select from 'react-select'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { SiStagetimer } from "react-icons/si";
import GainsChart from './GainsChart';
import RentStatusChart from './RentStatusChart';
import landlordProfileData from '../../componentsData/landlordProfileData';

function LandLordMainDashboard() {
    const {fname} = landlordProfileData()
    const data = [
        { month: 'January', gain: 1000 },
        { month: 'February', gain: 1200 },
        { month: 'March', gain: 1500 },
        { month: 'April', gain: 1300 },
        { month: 'May', gain: 1700 },
        { month: 'June', gain: 1600 },
        { month: 'July', gain: 1800 },
        { month: 'August', gain: 2000 },
        { month: 'September', gain: 2100 },
        { month: 'October', gain: 2200 },
        { month: 'November', gain: 2300 },
        { month: 'December', gain: 2400 },
      ];
      const data2 = {
        overdue: 9,
        paid: 29,
        upcoming: 15,
      };
      const data3 = {
        overdue: 9,
        paid: 29,
        upcoming: 15,
      }
  return (
    <div className='w-full md:container md:mx-auto md:px-20  p-6  gap-10'>
        <div className="md:container md:mx-auto bg-neutral-100 md:px-20 py-6 w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <h1 className='text-center text-gray-950 font-bold text-3xl py-2'>Hello {fname}</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2  '>
                    <div className='w-40 bg-neutral-200 h-12 text-center py-2 flex justify-center items-center gap-6'>
                        <span >Reciever</span>
                        <span><MdOutlineArrowDropDown/></span>
                    </div>
                    <div className='w-40 bg-neutral-200 h-12 text-center py-2 flex justify-center items-center gap-6'>
                        <span >Reciever</span>
                        <span><MdOutlineArrowDropDown/></span>
                    </div>
                    <div className='w-40 bg-neutral-200 h-12 text-center py-2 flex justify-center items-center gap-6'>
                        <span >Reciever</span>
                        <span><MdOutlineArrowDropDown/></span>
                    </div>
                    <div className='w-40 bg-white h-12 text-center py-2 flex justify-center items-center gap-6'>
                        <span >Reciever</span>
                        <span><MdOutlineArrowDropDown/></span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="flex flex-col bg-white hover:bg-slate-300 p-8 gap-2 mt-6 rounded-lg ">
                    <p className='font-bold text-sm'>Rent recieved</p>
                    <div className="flex justify-between ">
                        <div className="flex gap-4">
                            <div className='w-10 h-10 bg-teal-100 rounded-full flex text-center items-center'>
                                <span className='text-center flex items-center ml-[20%] font-bold text-2xl'>
                                    <RiVerifiedBadgeLine/>
                                </span>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>USD0.00</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className='font-bold text-sm'>USD0</p>
                            <p className='text-sm text-neutral-400'>Due this month</p>
                        </div>
                    </div>
                    <div className='w-full h-3 rounded-2xl bg-green-50'></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-2 md:gap-4 ">
                <div className="flex flex-col bg-white hover:bg-slate-300 p-8 gap- mt-6 rounded-lg ">
                        <p>Upcoming payments</p>
                        <div className="flex gap-4 ">
                            <div className='w-10 h-10 bg-indigo-300 rounded-full flex text-center items-center'>
                                <span className='text-center flex items-center ml-[20%] font-bold text-2xl'>
                                    <IoBag/>
                                </span>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>USD0.00</h1>
                            </div>
                        </div>
                        <p className='text-lg text-neutral-500'>0 payment</p>
                    </div>
                    <div className="flex flex-col bg-white hover:bg-slate-300 p-8 gap-2  mt-6 rounded-lg ">
                        <p>Upcoming payments</p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className='w-10 h-10 bg-red-300 rounded-full flex text-center items-center'>
                                <span className='text-center flex items-center ml-[20%] font-bold text-2xl'>
                                    <SiStagetimer/>
                                </span>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>USD0.00</h1>
                            </div>
                        </div>
                        <p className='text-lg text-neutral-500'>0 payment</p>
                    </div>
                </div>
            </div>
        <div className='flex  mt-7 gap-4 flex-wrap-reverse'>
            <div className='md:w-[33%] w-[100%] grid grid-cols-1 '>
                <div className="flex flex-col bg-white  p-8 gap-2  mt-6 rounded-lg ">
                    <h2 className='text-sm font-bold'>Cash on cash return</h2>
                    <div className='flex justify-center items-center gap-2 flex-col'>
                        <h1 className='text-2xl font-bold'>0 %</h1>
                        <p className='text-sm tetx-neutral-500'>Trailing 12-month</p>
                    </div>
                </div>





                <div className="flex flex-col bg-white  p-8 gap-6 mt-6 rounded-lg  ">
                    <h2>Property Valuation</h2>
                    <div className="flex gap-2 justify-between">
                    <div className='w-10 h-10 bg-indigo-300 rounded-full flex text-center items-center'>
                                <span className='text-center flex items-center ml-[20%] font-bold text-2xl'>
                                    <IoBag/>
                                </span>
                            </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-neutral-500'>Net gain</p>
                            <h1 className='font-bold text-2xl'>USD0.00</h1>
                        </div>
                        <div className='w-10 h-10 bg-indigo-300 rounded-full flex text-center items-center'>
                                <span className='text-center flex items-center ml-[20%] font-bold text-2xl'>
                                    <IoBag/>
                                </span>
                            </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <div className='flex gap-5'>
                            <p className='text-sm text-neutral-400'>CURRENT VALUATION:</p>
                            <p className='text-sm text-neutral-900'>USD0</p>
                        </div>
                        <div className='w-full h-2 rounded-md bg-slate-200'></div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <div className='flex gap-5'>
                            <p className='text-sm text-neutral-400'>PURCHASE PRICE:</p>
                            <p className='text-sm text-neutral-900'>USD0</p>
                        </div>
                        <div className='w-full h-2 rounded-md bg-slate-200'></div>
                    </div>
                </div>
            </div>
            <div className=' p-0 w-[100%] md:w-[65%]'>
                 <div className=" h-full gap-2  mt-6 rounded-lg ">
                    <GainsChart data={data}/>
                  </div>
                </div>
            </div>





            <div className='w-full md:w-[70%] p-6 bg-white mt-5 rounded-lg flex justify-start flex-wrap md:flex-nowrap'>
                <p className='text-bold text-lg'>Top expence categories</p>
            <RentStatusChart data={data2} />
            <div className='flex flex-col'>
                <div className='flex justify-end items-end'>
                    <button className=' bg-gray-200 text-center px-6 py-2 h-10 flex w-40'>jen 01 2024</button>
                    <button className=' bg-gray-200 text-center px-6 py-2 flex w-40 h-10'>jen 01 2024</button>
                </div>
                <div className='flex justify-center py-10 flex-col gap-2'>
                    <div className="flex w-[96%]  px-5  justify-between border-[1px] py-3 hover:bg-slate-200 bg-white">
                        <span className='text-center py-2'><SiStagetimer/></span>
                        <h1 className='font-bold text-2xl text-[#FF6384] '>USD0</h1>
                    </div>
                    <div className="flex w-[96%]  px-5  justify-between border-[1px] py-3 hover:bg-slate-200 bg-white">
                        <span className='text-center py-2'><SiStagetimer/></span>
                        <h1 className='font-bold text-2xl text-[#36A2EB] '>USD0</h1>
                    </div>
                    <div className="flex w-[96%]  px-5  justify-between border-[1px] py-3 hover:bg-slate-200 bg-white">
                        <span className='text-center py-2'><SiStagetimer/></span>
                        <h1 className='font-bold text-2xl text-[#FFCE56] '>USD0</h1>
                    </div>
                </div>
            </div>
            </div>


            <div className='w-full md:w-[70%] mt-5 rounded-lg flex justify-start gap-4 flex-wrap'>
            <div className='w-full md:w-[65%] p-6 bg-white mt-5 rounded-lg flex justify-start flex-wrap'>
                <div className='flex flex-col'>
                    <h3>Proporties</h3>
                </div>
                <RentStatusChart data={data3} />           
            </div>
            <div className='w-full md:w-[33%] p-6 bg-white mt-5 rounded-lg flex justify-center overflow-hidden'>
            <RentStatusChart data={data3} />    
            </div>
            </div>
        </div>
    </div>
  )
}

export default LandLordMainDashboard

