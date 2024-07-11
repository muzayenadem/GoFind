import React, { useState } from 'react'
import landlordProperty from '../../../componentsData/landlordProperty'
import { bg6 } from '../../../Data/Images'
import { IoMdMore } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import { BsWindowDock } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePreview } from "react-icons/md";


import { CiEdit } from "react-icons/ci";
import { HiOutlineDuplicate } from "react-icons/hi";
import { MdOutlineUnpublished } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import DeletePopup from './popupsOfPropertyList/DeletePopup';

function PropertyList() {
   const listOfProperty = landlordProperty()
   const [isOpen, setIsOpen] = useState(false)
   const [openDelete,setOpenDelete] = useState(false)
   const [openId,setOpenId] = useState('')
   console.log({listOfProperty})
   console.log({isOpen})
   const openHandler = (id) =>{
    if(id  & id != openId){
        setIsOpen(false)
        setIsOpen(true)
        setIsOpen(id)
    } else{
        setOpenId(id)
        setIsOpen(!isOpen)
    }
   }

   const deletep = () =>{
    alert('dddddd')
    console.log({dd:'dddddddd'})
   }

   const clicks = [
    {title:'Calander',icon:<CgCalendarDates/>,func:deletep},
    {title:'Preview',icon:<MdOutlinePreview/>,func:()=>alert('preview')},
    {title:'Edit',icon:<CiEdit/>},
    {title:'Duplicate',icon:<HiOutlineDuplicate/>},
    {title:'Unpublish',icon:<MdOutlineUnpublished/>},
    {title:'Payment and tax',icon:<TbCreditCardPay/>},
    {title:'Delete',icon:<RiDeleteBinLine/>,func:()=> setOpenDelete(true)},
   ]
  return (
    <div className='py-10 px-5 w-100 h-auto '>
        <dialog open={openDelete}>
            <DeletePopup openDelete={setOpenDelete}/>
        </dialog>
        <div>
            {
                listOfProperty.map((single,i)=>{
                    const name = single.property.name
                    const price = single.property.price
                    const id = single._id
                    return(
                        <div key={i} className='bg-white mt-2 relative flex-wrap xl:flex-nowrap flex gap-5 rounded-md p-2 w-full'>
                             <div className="flex justify-between w-full  lg:hidden">
                                    <div className="flex flex-col gap-3">
                                    <h1 className='text-2xl font-bold '>{name}</h1>
                                    <div className="flex gap-2">
                                        <span className='text-2xl'><TfiLocationPin/></span>
                                        <p className='text-neutral-400 text-base'>Avenfield {name}</p>
                                    </div>
                                    </div>
                                    <div className="flex justify-end  gap-2">
                                        <div className="flex flex-col">
                                            <h1 className='font-bold text-2xl '>${price}</h1>
                                            <p className='text-base text-neutral-500'>5 peymantes</p>
                                        </div>
                                        <div onClick={()=> openHandler(id)} className="flex text-2xl w-10 h-10 justify-center items-center border-[1px] border-neutral-500 rounded-xl"><IoMdMore/></div>
                                        <div onMouseLeave={()=> setIsOpen(!isOpen)} className={` shadow-lg shadow-neutral-500 rounded-md absolute z-10 top-16    w-48  bg-white ${isOpen == true & id == openId  ? '':'hidden'} `}>
                                            {
                                                clicks.map((single,i)=>{
                                                    return (
                                                        <div key={i} onClick={single.func} className='w-full h-10 p-3 flex gap-2 text-start hover:bg-slate-200'>
                                                            <span className='text-xl mt-1'>{single.icon}</span>{single.title}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            <div className="flex"><img src={bg6} className=' sm:h-auto sm-w-full lg:w-48 lg:h-36 rounded-md'></img></div>
                            <div className="flex flex-col w-full p-3">
                                <div className=" hidden  lg:flex justify-between w-full flex-wrap">
                                    <div className="flex flex-col gap-1">
                                    <h1 className='text-2xl font-bold '>{name}</h1>
                                    <div className="flex gap-2">
                                        <span className='text-2xl'><TfiLocationPin/></span>
                                        <p className='text-neutral-400 text-base'>Avenfield {name}</p>
                                    </div>
                                    </div>
                                    <div className="flex justify-end  gap-6">
                                        <div className="flex flex-col">
                                            <h1 className='font-bold text-2xl '>${price}</h1>
                                            <p className='text-base text-neutral-500'>5 peymantes</p>
                                        </div>
                                        <div onClick={()=> openHandler(id)} className="flex text-2xl w-10 h-10 justify-center items-center border-[1px] border-neutral-500 rounded-xl"><IoMdMore/></div>
                                        <div onMouseLeave={()=> setIsOpen(!isOpen)} className={` shadow-lg shadow-neutral-500 rounded-md absolute z-10 top-16    w-48  bg-white ${isOpen == true & id == openId  ? '':'hidden'} `}>
                                            {
                                                clicks.map((single,i)=>{
                                                    return (
                                                        <div key={i} onClick={single.func} className='w-full h-10 p-3 flex gap-2 text-start hover:bg-slate-200'>
                                                            <span className='text-xl mt-1'>{single.icon}</span>{single.title}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex py-2 flex-wrap justify-between gap-5 px-5">
                                    <div className="flex gap-5">
                                        <span className='text-2xl mt-5'><FaRegHeart/></span>
                                        <div className="flex flex-col gap-2">
                                            <p className='text-base text-neutral-400'>xomething</p>
                                            <h2 className='text-xl underline text-blue-400 '>54 visitors</h2>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <span className='text-2xl mt-5'><BsPeopleFill/></span>
                                        <div className="flex flex-col gap-2">
                                            <p className='text-base text-neutral-400'>used by</p>
                                            <h2 className='text-xl font-bold'>7 people</h2>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <span className='text-2xl mt-5'><BsWindowDock/></span>
                                        <div className="flex flex-col gap-2">
                                        <p className='text-base text-neutral-400'>something</p>
                                         <div className="flex gap-4">
                                         <h2 className='text-xl  '>{'$2240'}</h2>
                                         <i className='text-base text-neutral-400'>4 payments</i>
                                         </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <span className='text-2xl mt-5'><CgCalendarDates/></span>
                                        <div className="flex flex-col gap-2">
                                            <p className='text-base text-neutral-400'>First due payment</p>
                                            <h2 className='text-xl  font-bold'>22-10-2024</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PropertyList