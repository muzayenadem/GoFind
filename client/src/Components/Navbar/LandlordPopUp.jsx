import React from 'react'
import { Link } from 'react-router-dom'
import prof from './br1.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { closeForLandlord } from '../../controller/Buttons/landlordProfileButtons'
import axios from 'axios'
import { mainLink } from '../../controller/commonLink/mainLInk'
import landlordProfileData from '../componentsData/landlordProfileData'
function LandlordPopUp({}) {
    const landlordButton = useSelector(state => state.landlordProfileButtons.open)
    const dispatch = useDispatch()
    const close = () =>{
        dispatch(closeForLandlord())
    }
    const landlordLogout = async () =>{
      await axios.get(`${mainLink}/logout-landlord`)
      window.location.href = ''
    }
    const {fname, lname} = landlordProfileData()
    console.log({fname,lname})
  return (
    <div onMouseLeave={close} className={`w-80 right-0 bg-white mt-1 shadow-lg shadow-neutral-800  rounded-md absolute ${!landlordButton && "hidden"}`}>
                                <div className='w-5 h-5 rotate-45 -mt-2 bg-white ml-[10%]'></div>
                                <Link to={'/landloard-dashboard'} onClick={close}>
                                <div className='flex justify-start gap-2 p-3 border-b-[1px] border-b-neutral-400'>
                                  <img src={prof} className='w-10 h-10 rounded-full'/>
                                  <h1 className='text-center capitalize mt-2' >{fname} {lname}</h1>
                                </div>
                                </Link>
                                <div className='flex flex-col p-5 gap-3 2'>
                                <Link to='/landloard-dashboard' onClick={close} >
                                <h3 className=' text-gray-700 font-semibold hover:text-gray-900'>Profile</h3>
                                </Link>
                                   <hr/>
                                <Link to='' onClick={close} >
                                <h3 className=' text-gray-700 font-semibold hover:text-gray-900'>Help</h3>
                                </Link>
                                <hr/>
                                <Link to='/' onClick={landlordLogout}>
                                <h3 className=' text-gray-700 font-semibold hover:text-gray-900'>Logout</h3>
                                </Link>
                                </div>
                            </div>
  )
}

export default LandlordPopUp