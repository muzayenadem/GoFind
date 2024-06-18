import React from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { MdApartment } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { setCategory,setQuantity,notTheSamePlace,setType } from '../../../../../controller/AddProperty/propertyType';
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const plans = [
  { name: 'Entire place', icon:<MdHomeWork/>,des:'Guests are able to use the entire place and do not have to share this with the host or other guests.'  },
  { name: 'A private room', icon:<MdApartment/>,des:'Guests rent a room within the property. There are common areas that are either shared with the host or other guests.' },
]

function MultipleOrPrivatePage({page,next,previous}) {
    const [selected, setSelected] = useState(plans[0])
    const navigate = useNavigate('')
    const dispatch = useDispatch()
    const clickHndler = ()=>{
        dispatch(setType(selected.name))
        dispatch(next())  
    }

    const backHandler = () =>{
      if(page == 0){
        navigate('/landloard-dashboard/property/types-of-property')
        }else{
          dispatch(previous())
        }
      }    
  return (
    <div className='container mx-auto md:px-2 py-20'>
        <div className='  gap-6 flex flex-col w-[96%] m-[2%] '>
        <div className="flex flex-col gap-5 bg-white justify-center items-center py-12 px-8 ">
            <h1 className='head1'>What can guests book?</h1>

            <div className="w-full px-4">
      <div className="mx-auto text-black w-full ">
        <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {plans.map((plan,i) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5  shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-neutral-400 data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6 flex gap-6">
                <div>
                    <span className='text-5xl text-fuchsia-700'>{plan.icon}</span>
                  </div>
                  <div className='flex flex-col gap-1 '>
                  <p className="font-semibold ">{plan.name}</p>
                  <p className='title2'>{plan.des}</p>
                  </div>
                </div>
                <CheckCircleIcon className="size-6 fill-blue-700 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
            </div>
            </div>
            </div>
            <div className='flex gap-2'>
            <div onClick={backHandler} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
            </div>
            <div onClick={clickHndler} className='w-[73%] bg-fuchsia-700 py-3 font-bold text-white text-center'>Continue</div>
        </div>
        </div>
     
        </div>
        
  )
}

export default MultipleOrPrivatePage

 