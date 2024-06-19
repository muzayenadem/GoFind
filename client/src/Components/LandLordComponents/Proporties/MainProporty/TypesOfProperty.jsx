import React from 'react'
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { RiHotelFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { GiGreenhouse } from "react-icons/gi";
import { TEAlert } from "tw-elements-react";
import { Switch } from '@headlessui/react';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {  setCategory, setSubCategory} from '../../../../controller/AddProperty/propertyType';
import { Link } from 'react-router-dom';

const plans = [
  { name: 'Startup', available: true },
  { name: 'Business', available: true },
  { name: 'Enterprise', available: false },
]

function TypesOfProperty() {
    const [enabled, setEnabled] = useState(false)
    let [selected, setSelected] = useState(plans[0])

    const property = useSelector(state => state.propertyType.category)
    console.log(property)
    const dispatch = useDispatch()

    const clickHandler = (type,link)=>{
      dispatch(setSubCategory(type))
      dispatch(setCategory(link))
    }
  return (
    <div className='md:container md:mx-auto py-20 md:px-40'>
        <div className='flex flex-col gap-6'>
            <div className="flex gap-4 flex-col">
                <h1 className='head1 text-center'>List your property on Booking.com and start welcoming guests in no time!</h1>
                <h4 className='text-2xl text-neutral-700 text-center'>To get started, choose the type of property you want to list on Booking.com</h4>
            </div>

            <div className="flex gap-6 justify-around flex-wrap">
              { 
                propertyType.map(({type,des,icon,link},i)=>{
                  return(
                    <Link   key={i}  to={link}>
                           <div
                  onClick={()=> clickHandler(type,link)}
                   className='bg-white shadow-lg rounded-lg p-5 gap-4  '>
                    <div className='flex justify-center items-center gap-4 flex-col w-60'>
                        <span className='text-6xl text-fuchsia-800 font-bold'>
                           {icon}
                        </span>
                        <p className='text-2xl font-medium text-neutral-700'>{type}</p>
                        <p className='text-sm  text-neutral-500 text-center'>{des}</p>
                    </div>
                    <button className={`w-full  rounded-lg h-10 bg-fuchsia-800 text-center text-white`}>List your property</button>
                   </div>
                    </Link>
               
                  )
                })
              }
            </div>
        </div>  
        {/* <TEAlert staticAlert open={true} color="bg-success-100 text-success-700">
        A simple success alert—check it out!
      </TEAlert>   */}
     
    {/* <RadioGroup value={selected} onChange={setSelected} aria-label="Server size">
      {plans.map((plan) => (
        <Field key={plan.name} disabled={!plan.available} className="flex items-center gap-2">
          <Radio as={Fragment} value={plan}>
            {({ checked, disabled }) => (
              <span
                className={clsx(
                  'group flex size-5 items-center justify-center rounded-full border',
                  checked ? 'bg-blue-400' : 'bg-white',
                  disabled && 'bg-gray-100'
                )}
              >
                {checked && <span className="size-2 rounded-full bg-white" />}
              </span>
            )}
          </Radio>
          <Label as={Fragment}>
            {({ disabled }) => <label className={disabled && 'opacity-50'}>{plan.name}</label>}
          </Label>
        </Field>
      ))}
    </RadioGroup> */}
    </div>
  )
}

export default TypesOfProperty

const propertyType = [
  {
    type:'Apartment',
    des:'Furnished and self-catering accommodation, where guests rent the entire place.',
    icon:<PiBuildingApartmentDuotone/>,
    link:'apartment'
  },
  {
    type:'Homes',
    des:'Properties like apartments, holiday homes, villas, etc.',
    icon:<IoHome/>,
    link:'homes'
  },
  {
    type:'Hotel,B&Bs,and More',
    des:'Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.',
    icon:<RiHotelFill/>,
    link:'hotels'
  },
  {
    type:'Alternative places',
    des:'Properties like apartments, holiday homes, villas, etc.',
    icon:<GiGreenhouse/>,
    link:'alternative'
  },
]