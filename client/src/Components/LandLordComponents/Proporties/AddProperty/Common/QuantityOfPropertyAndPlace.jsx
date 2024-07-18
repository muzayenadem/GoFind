import React from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { useState } from 'react'
import { MdApartment } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { setCategory,setQuantity,notTheSamePlace,setType,setSubCategory, setMultiple } from '../../../../../controller/AddProperty/propertyType';
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const plans = [
  { name: 'One apartment', icon:<MdHomeWork/>,  },
  { name: 'Multiple apartment', icon:<MdApartment/>, },
]

const plans2 = [
    { name: 'Yes, these apartments are at the same address or building', icon:<FaLocationDot/>,  },
    { name: 'No, these apartments are at different addresses or buildings', icon:<FaMapLocationDot/>, },
  ]
function QuantityOfPropertyAndPlace({page,next,previous}) {
    const [selected, setSelected] = useState(plans[0])
    const [selected2, setSelected2] = useState(plans2[0])
    const [value,setValue] = useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate('')
    const clickHndler = ()=>{
        if(selected == plans[1]){
          dispatch(setMultiple(true))
        }

        dispatch(setQuantity(value))
        if(selected2 == plans2[1]){
            dispatch(notTheSamePlace())
        }
       
        if(selected == plans[0]){
          dispatch(setMultiple(false))
        }

        dispatch(next())
    }
    const backHandler = () =>{
      if(page == 0){
        navigate('/landloard-dashboard/property/types-of-property')
        }else{
          dispatch(previous())
        }
      }  
    const propertyType = useSelector(state => state.propertyType.subCategory)
  return (
    <section className=' min-h-screen md:w-[68%] ipad:w-[68%] ipad:ml-[16%] tablet:w-[87%] tablet:ml-[18%] lg:w-[100%] xl:w-[120%] 2xl:w-[150%]  w-[96%] md:ml-[10%] lg:ml-[20%] xl:ml-[30%] 2xl:ml-[50%] ml-[2%] py-20 justify-center items-center'>
        <div className='  gap-6 flex flex-col w-full overflow-hidden '>
        <div className="flex flex-col gap-5  justify-center bg-white shadow-md shadow-neutral-500 items-center py-12 px-8 ">
            <h1 className='head1 text-center'>How many {propertyType} are you listing?</h1>

            <div className="w-full px-4">
      <div className=" text-black w-full ">
        <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-">
          {plans.map((plan,i) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white/5  py-4 px-5  shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-neutral-400 data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center gap-6  justify-between">
                <span className='text-3xl text-fuchsia-700'>{plan.icon}</span>
                  <p className="font-semibold ">{plan.name}</p>
                <CheckCircleIcon className="size-7 fill-blue-700 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
        {
            selected == plans[1] &&
            <div className='flex w-full flex-col gap-6 mt-6'>
                <p className='title2'>Are these properties in the same address or building?</p>
                    <RadioGroup by="name" value={selected2} onChange={setSelected2} aria-label="Server size" className="space-y-2">
            {plans2.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="group relative flex  rounded-lg bg-white/5 py-4 px-5  shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-neutral-400 data-[checked]:bg-white/10"
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className='text-3xl text-blue-700'>{plan.icon}</span>
                      <p className="font-semibold ">{plan.name}</p>
                    <CheckCircleIcon className="size-20 md:size-6 ipad:size-10 fill-blue-700 opacity-0 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
              ))}
            </RadioGroup>

            <div className='flex flex-col gap-4'>
                <h3>Number of properties</h3>
                <input type='number' onChange={(e)=>setValue(e.target.value)} className=' px-6 w-36 border-[1px] border-neutral-400 h-10 focus:outline-none'/>
            </div>
            </div>
        }
      </div>
    </div>
        </div>
        <div className='flex gap-2 px-8'>
            <div onClick={backHandler}  className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
            </div>
            <div onClick={clickHndler} className='w-[73%] bg-fuchsia-700 py-3 font-bold text-white text-center'>Continue</div>
        </div>
        </div>
    </section>
  )
}

export default QuantityOfPropertyAndPlace

 