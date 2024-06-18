import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
function ContactDetail() {
  const [value, setValue] = useState('muzynadem@gmail.com')
  
  return (
    <div className="flex bg-white shadow-md shadow-slate-700 w-full md:w-[70%] py-10 px-6 flex-col gap-5">
        <h2 className='font-bold text-neutral-400'>Contact information</h2>
        <div className='flex  justify-normal gap-6'>
            <div className='flex flex-col gap-1 w-[60%] ' >
                <p className='text-sm text-neutral-400'>Your email address</p>
                <input 
                className='focus:outline-none  border-b-[1px] border-b-neutral-400'
                type='text'
                placeholder='Email address'
                onChange={(e)=> setValue(e.target.value)}
                value={value}
                />
            </div>
            <div className='flex gap-1 pt-2'>
              <span className='text-2xl text-neutral-500 '><IoIosCheckmarkCircleOutline/></span>
              <p className='text-md text-neutral-500'>Email verified</p>
            </div>
        </div>
        <div className='flex flex-col gap-1  border-b-[1px] border-b-neutral-200 py-5'>
        <p className='text-sm text-neutral-400'>Your mobile phone number</p>
        <PhoneInput
        className=''
        country={'et'}
        value={'0936591302'}
        enableAreaCodes={true}
        onChange={phone => this.setState({ phone })}
/>
        </div>
        <div>
          <button className='w-52 rounded-md h-12 bg-fuchsia-800 text-center  py-2 text-white'>SAVE CHANGES</button>
        </div>
    </div>
  )
}

export default ContactDetail