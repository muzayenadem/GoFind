import React, { useState } from 'react'
import prof from './br1.jpg'
import { Link } from 'react-router-dom'
import RenterPopUp from './RenterPopUp'
import { openForRenter } from '../../controller/Buttons/renterProfileButtons'
import { openForLandlord } from '../../controller/Buttons/landlordProfileButtons'
import { closeLandlordSidebarToggle ,openLandlordSidebarToggle} from '../../controller/Buttons/landlordToggle'
import { useDispatch,useSelector} from 'react-redux'
import LandlordPopUp from './LandlordPopUp'
import { BsBlockquoteRight } from "react-icons/bs"
import { MdOutlineClear } from "react-icons/md";

function Navbar() {
    const [renterToken,setUserToken] = useState(false)
    const [landlordToken,setLandlordToken] = useState(false)
    const [loginOpen,setLoginOPen] = useState(false)
    const [signUpOpen,setSignUpOPen] = useState(false)
    
    const state = useSelector(state => state.landlordToggle.open)
    // for buttons 
   const dispatch = useDispatch()
  return (
    <>
    {/* <dialog open={open} className='w-[90%] h-[50vh] bg-slate-700'>
        <div>
            <h1>Smething</h1>
        </div>
    </dialog> */}
       <div className=' sticky z-10 top-0 h-14 bg-slate-100 rounded-xl m-2 rounded-b-[1px] rounded-b-black px-6 flex justify-between md:justify-around  flex-wrap'>
            <div className='flex flex-row justify-center items-center gap-2'>
              {landlordToken && 
              !state ? 
              <button className='text-2xl md:hidden' onClick={()=> dispatch(openLandlordSidebarToggle())}><BsBlockquoteRight/></button>:
              <button className='text-2xl md:hidden' onClick={()=> dispatch(closeLandlordSidebarToggle())}><MdOutlineClear/></button>
            }
                <h2>GoFind</h2>
            </div> 
        <div className=' items-center'>
            <ul className='hidden  md:flex gap-5 mt-2 '> 
                <Link to='/'>
                <li className='linkli'>Home</li>
                </Link>
                <li className='linkli'>About</li>
                <li className='linkli'>Support</li>
                <li className='linkli'>Feutures</li>
                <li className='linkli'>Favorate</li>
            </ul>
        </div>
            <div>
                {
                    renterToken | landlordToken ?
                    renterToken ? 
                    <div>
                    <div onMouseOver={()=> dispatch(openForRenter())}  className='flex justify-start items-center gap-4'>
                   <img src={prof} className='w-12 h-12 rounded-full'/>
                   <div className="flex flex-col">
                    <p className='text-sm text-neutral-400'>@Renter</p>
                     <h3 className='text-lg font-semibold '>Muzyn</h3>
                   </div>
               </div>
               <RenterPopUp/>                   
               </div> :
                    <div>
                    <div onMouseOver={()=> dispatch(openForLandlord())}  className='flex justify-start items-center gap-4'>
                   <img src={prof} className='w-12 h-12 rounded-full'/>
                   <div className="flex flex-col">
                    <p className='text-sm text-neutral-400'>@Landlord</p>
                     <h3 className='text-lg font-semibold '>Muzyn</h3>
                   </div>
               </div>
               <LandlordPopUp/>                   
               </div> 
                 :
                    <div className='mt-2'>
                        <ul className='flex gap-4'>
                          <div>
                          <li onMouseOver={() => setLoginOPen(!loginOpen) & setSignUpOPen(false)} className=' bg-violet-300 px-6 py-1 font-bold hover:bg-violet-400 text-white rounded-3xl'>
                            Login
                                </li>
                                 <div onMouseLeave={()=>setLoginOPen(false)} className={`w-32 h-32 bg-gray-800 mt-4  rounded-md absolute ${!loginOpen && "hidden"}`}>
                                <div className='w-5 h-5 rotate-45 -mt-2 bg-gray-800 ml-[10%]'></div>
                                <div className='flex flex-col p-5 gap-3 2'>
                                  <Link to='/landlord-login'>
                                  <h3  className='font-semibold text-gray-200 hover:text-gray-400'>Landlords</h3>
                                  </Link>
                                <hr/>
                                <Link to='/renter-login'>
                                <h3 className=' text-gray-200 font-semibold hover:text-gray-400'>Rentrs</h3>
                                </Link>
                                </div>
                            </div>
                          </div>
                          <div>
                          <li onMouseOver={() => setSignUpOPen(!signUpOpen) & setLoginOPen(false)}  className=' bg-blue-600 px-6 py-1 font-bold hover:bg-blue-700 text-white rounded-3xl'>
                            Sign Up
                               </li>
                                 <div onMouseLeave={()=> setSignUpOPen(false)} className={`w-32 h-32 bg-gray-800 mt-4 -ml-16 rounded-md absolute ${!signUpOpen && "hidden"}`}>
                            <div className='w-5 h-5 rotate-45 -mt-2 bg-gray-800 ml-[70%]'></div>
                               <div className='flex flex-col p-5 gap-3 2'>
                                <Link to='/landlord-signup'>
                                <h3 className='font-semibold text-gray-200 hover:text-gray-400'>Landlords</h3>
                                </Link>
                                <hr/>
                                <Link to='/renter-signup'>
                                <h3 className=' text-gray-200 font-semibold hover:text-gray-400'>Rentrs</h3>
                                </Link>
                                </div>
                            </div>
                          </div>
                        </ul>
                    </div>
                }
            </div>      
    </div>
    </>
  )
}

export default Navbar
