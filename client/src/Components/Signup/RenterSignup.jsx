import React, { useState } from 'react'
import { log } from '../Data/Images'
import { IoMdPerson } from "react-icons/io";
import { LuMailQuestion } from "react-icons/lu";
import { FiPhoneForwarded } from "react-icons/fi";
import { TbPasswordUser } from "react-icons/tb";
import { FaFacebookF, FaGoogle, FaMessage,FaPerson,FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import axios from 'axios';
function RenterSignup() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [Message, setMessage] = useState("")
  const [errMessage, setErrMessage] = useState('')
  const loginHandler = (e) =>{
    e.preventDefault()
    if(firstName == ""){
      setErrMessage('Name is Required!')
    }
    else if(lastName ==""){
      setErrMessage("last name is Required!")
    }
    else if(email ==""){
      setErrMessage("Email is Required!")
    }
    else if(phone ==""){
      setErrMessage("Phone is Required!")
    }
    else if(password ==""){
      setErrMessage("Password is Required!")
    }
    else if(confirmPassword == ""){
      setErrMessage('Password must be confirmed')
    }
    else if(password !== confirmPassword){
      setErrMessage('password must be matched')
    }
    else{
      setErrMessage("Your message has been sent successfully")
      setEmail('')
      setFirstName('')
      setPhone('')
      setPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        setErrMessage("")
      }, 3000);
     // axios.post()
    }
  }
  return ( 
    <div className='container py:10 md:py-20 mx-auto'>
      <div className="grid grid-cols-1 py-10 gap-10 md:grid-cols-2 justify-center items-center self-center px-10 ">
        <img src={log} className='  w-full'/>
        <div className=''>
          <form className='md:w-2/3 flex gap-8 flex-col'>
          {
          errMessage && <p className={`py-3 bg-neutral-100 shadow-lg shadow-slate-700 text-center animate-bounce ${errMessage == 'Your message has been sent successfully' ? 'text-green-900':' text-orange-700'} text-base mb-4 `}>{errMessage}</p>
          }
              <div className="flex  border-blue-300 border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><IoMdPerson/></span>
              <input
              className='focus:outline-none   h-10 px-3'
              placeholder='First Name'
              type='text'
              onChange={(e)=> setFirstName(e.target.value)}
              />
              </div>
              <div className="flex  border-blue-300 border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><IoMdPerson/></span>
              <input
              className='focus:outline-none  h-10 px-3'
              placeholder='Last Name'
              type='text'
              onChange={(e)=> setLastname(e.target.value)}
              />
              </div>
            <div className=" border-blue-300 flex border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><LuMailQuestion/></span>
              <input
              className='focus:outline-none h-10 px-3'
              placeholder='Email'
              type='email'
              onChange={(e)=> setEmail(e.target.value)}
              />
              </div>
              <div className="flex border-blue-300 border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><FiPhoneForwarded/></span>
              <input
              className='focus:outline-none  h-10 px-3'
              placeholder='Phone'
              type='number'
              onChange={(e)=> setPhone(e.target.value)}
              />
              </div>
            
              <div className="flex border-blue-300 border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><TbPasswordUser/></span>
              <input
              type='password'
              className='focus:outline-none h-10 px-3'
              placeholder='Password'
              onChange={(e)=> setPassword(e.target.value)}

              />
              </div>
              <div className="flex  border-blue-300 border-b-[2px] ">
                <span className='w-[15%] flex text-center items-center justify-center'><TbPasswordUser/></span>
              <input
              type='password'
              className='focus:outline-none  h-10 px-3'
              placeholder='Confirm Password'
              onChange={(e)=> setConfirmPassword(e.target.value)}
              />
              </div>
         
            <div onClick={loginHandler} className="flex items-center justify-center font-bold h-10 bg-blue-500 text-white rounded-md border-[2px] ">
                <button>Sign Up</button>
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
            <div className="flex mt-2 gap-2"><p>I have an account already! </p>
            <Link to='/renter-login' >
            <span className='text-blue-800'>Login</span>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RenterSignup