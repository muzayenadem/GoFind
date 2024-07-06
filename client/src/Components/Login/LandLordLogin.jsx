import React from 'react'
import { log } from '../Data/Images'
import { IoMdPerson } from "react-icons/io";
import { LuMailQuestion } from "react-icons/lu";
import { FiPhoneForwarded } from "react-icons/fi";
import { TbPasswordUser } from "react-icons/tb";
import { FaFacebookF, FaGoogle, FaMessage,FaPerson,FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
function LandLordLogin() {
  return ( 
    <div className='container py:10 md:py-20 mx-auto'>
           <div className="flex justify-center items-center border-b-[1px] border-b-neutral-300 py-6">
            <h1 className='text-3xl font-bold text-center'> Landlord account login</h1>
        </div>
      <div className="grid grid-cols-1 py-10 gap-10 md:grid-cols-2 justify-center items-center self-center px-10 ">
        <img src={log} className='  w-full'/>
        <div className=''>
          <form className='md:w-2/3 flex gap-8 flex-col'>
            <div className=" border-blue-300 flex border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><LuMailQuestion/></span>
              <input
              className='focus:outline-none h-10 px-3'
              placeholder='Email'
              type='email'
              />
              </div>
              <div className="flex border-blue-300 border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><TbPasswordUser/></span>
              <input
              type='password'
              className='focus:outline-none h-10 px-3'
              placeholder='Password'
              />
              </div>
            <div className="flex items-center justify-center font-bold h-10 bg-blue-500 text-white rounded-md border-[2px] ">
                <button>Login</button>
              </div>
          </form>
          <div className="flex py-5 text-center ">
            <h1 className='md:ml-[30%] ml-[40%]'>Or</h1>
            </div>
            <div className='flex flex-col gap-5 md:w-2/3'>
              <div className='border-[2px] border-neutral-400 p-2 flex '>
                <span className=' text-violet-700'><FaGoogle/></span>
                <h1 className='ml-[30%]'>With Google</h1>
              </div>
              <div className='border-[2px] border-neutral-400 p-2 flex '>
                <span className=' text-blue-700'><FaFacebookF/></span>
                <h1 className='ml-[30%]'>Facebook</h1>
              </div>
            </div>
            <div className="flex mt-2 gap-2"><p>I have no account! </p>
            <Link to='/renter-signup'>
            <span className='text-blue-800'>create account</span>
              </Link></div>
        </div>
      </div>
    </div>
  )
}

export default LandLordLogin