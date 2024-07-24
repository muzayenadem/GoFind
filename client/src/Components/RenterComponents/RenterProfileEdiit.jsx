import React, { useState } from 'react'
import { br1, log } from '../../Components/Data/Images'
import { FaFacebookF, FaGoogle } from 'react-icons/fa6'
import renterProfileData from '../componentsData/renterProfileData'

function RenterProfileEdiit() {
    const [img,setImage] = useState(true)
    const {id,fname,lname,email,phone} = renterProfileData()
  return (
    <div className="flex bg-white shadow-md shadow-slate-700 w-full md:w-[70%] py-10 px-6 flex-col gap-5">
    <div className="w-full h-12 border-b-[1px] border-b-neutral-400 py-2">
    <h2 className='text-2xl font-bold'>Edit profile</h2>
    </div>

    <div className="flex flex-col gap-4 w-full  py-10 px-6">
     <div className="flex flex-col gap-2 items-center">
         <h2 className='font-bold text-center capitalize'>{fname} {lname}</h2>
         <p className='text-neutral-500 text-sm'>@developer</p>
     </div>
     <div className=' justify-center mx-auto'>
     {
         !img ?  <img src={log} className='w-32 rounded-md'/>:
         <img src={br1} className='w-32 rounded-md' />
     }
    </div>
    <div className='w-[70%] ml-[15%] bg-fuchsia-700 py-2 rounded-md text-white font-semibold text-center'>Upload new photo</div>
    <div className='bg-neutral-200 p-5'>
     <p className='text-sm text-neutral-700 text-center'>
         Upload a new avater. Larger image will de resizable automatically.
     </p>
     <p className='text-sm text-neutral-700 text-center'>Maximun Upload size is 1 MB</p>
    </div>
 </div>

    <form className=' flex gap-5 flex-col'>
     <div className="flex gap-5 flex-col py-2 border-b-[1px] border-b-neutral-400 pb-16">
     <div className="flex flex-col w-[86%] gap-1">
             <label>Username</label>
             <input className=' h-10 text-neutral-600 border-[1px] border-neutral-600 px-6 focus:outline-none' placeholder='Username'/>
         </div>
     <div className='flex gap-10 '>
         <div className="flex flex-col w-[40%] gap-1">
             <label>Frist Name</label>
             <input className=' h-10 text-neutral-600 border-[1px] border-neutral-600 px-6 focus:outline-none' placeholder='Frist Name'/>
         </div>
         <div className="flex flex-col w-[40%] gap-1">
             <label>Last Name</label>
             <input className=' h-10 text-neutral-600 border-[1px] border-neutral-600 px-6 focus:outline-none' placeholder='Last Name'/>
         </div>
     </div>
     <div className='flex gap-10 '>
         <div className="flex flex-col w-[40%] gap-1">
             <label>Email</label>
             <input className=' h-10 text-neutral-600 border-[1px] border-neutral-600 px-6 focus:outline-none' placeholder='Email'/>
         </div>
         <div className="flex flex-col w-[40%] gap-1">
             <label>Phone</label>
             <input className=' h-10 text-neutral-600 border-[1px] border-neutral-600 px-6 focus:outline-none' placeholder='Phone'/>
         </div>
     </div>
     </div>


     <div className='flex flex-col gap-5 w-[86%] py-8'>
   <div className='border-[2px] border-neutral-400 p-2 flex '>
     <span className=' text-violet-700'><FaGoogle/></span>
     <h1 className='ml-[30%]'>With Google</h1>
   </div>
   <div className='border-[2px] border-neutral-400 p-2 flex '>
     <span className=' text-blue-700'><FaFacebookF/></span>
     <h1 className='ml-[30%]'>Facebook</h1>
   </div>
 </div>
 <button className='w-72 h-12 hover:bg-fuchsia-800 rounded-md bg-fuchsia-700 text-white font-semibold text-center py-2'>Update</button>
     </form>
 </div>
  )
}

export default RenterProfileEdiit