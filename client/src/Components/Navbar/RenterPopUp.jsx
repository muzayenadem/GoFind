import React from 'react'
import { Link } from 'react-router-dom'
import prof from './br1.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { closeForRenter } from '../../controller/Buttons/renterProfileButtons'
function RenterPopUp({}) {
    const renterButton = useSelector(state => state.renterProfileButtons.open)
    const dispatch = useDispatch()
    const close = () =>{
        dispatch(closeForRenter())
    }
  return (
    <div onMouseLeave={close} className={`w-56 bg-white mt-1 shadow-lg shadow-neutral-800  rounded-md absolute ${!renterButton && "hidden"}`}>
                                <div className='w-5 h-5 rotate-45 -mt-2 bg-white ml-[10%]'></div>
                                <Link to={'/renter-dashboard'} onClick={close}>
                                <div className='flex justify-start gap-2 p-3 border-b-[1px] border-b-neutral-400'>
                                  <img src={prof} className='w-10 h-10 rounded-full'/>
                                  <h1 className='text-center mt-2' >Muzayen Adem</h1>
                                </div>
                                </Link>
                                <div className='flex flex-col p-5 gap-3 2'>
                                <Link to='/renter-dashboard' onClick={close} >
                                <h3 className=' text-gray-700 font-semibold hover:text-gray-900'>Profile</h3>
                                </Link>
                                   <hr/>
                                <Link to='' onClick={close} >
                                <h3 className=' text-gray-700 font-semibold hover:text-gray-900'>Help</h3>
                                </Link>
                                <hr/>
                                <Link to='/' onClick={close}>
                                <h3 className=' text-gray-700 font-semibold hover:text-gray-900'>Logout</h3>
                                </Link>
                                </div>
                            </div>
  )
}

export default RenterPopUp