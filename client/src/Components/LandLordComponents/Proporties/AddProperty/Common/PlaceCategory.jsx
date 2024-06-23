import React, { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { FaChevronLeft } from 'react-icons/fa'
import { setSubCategory } from '../../../../../controller/AddProperty/propertyType'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function PlaceCategory({subCategories,page,next,previous}) {
    const [selected,setSelected] = useState(subCategories[0])
    const dispatch = useDispatch()
    const navigate = useNavigate('')
    const clickHandler = () =>{
        dispatch(setSubCategory(selected.subCategory))
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
  <div className="container py-20 md:px-20">
    <div className="flex flex-col gap-8 w-[96%] m-[2%] ">
        <h1 className='head1 text-center'>From the list below, which property category is most similar to your place?</h1>
        <div className="flex">
        <RadioGroup by="subCategory" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
            <div className="grid grid-cols-1   gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {subCategories.map((sub,i) => (
            <Radio
              key={sub.subCategory}
              value={sub}
              className="group  relative flex cursor-pointer border-[1px] border-neutral-400 rounded-lg bg-white py-4 px-5  shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-neutral-400 data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold ">{sub.subCategory}</p>
                  <div>
                   <p className='title2'>{sub.des}</p>
                  </div>
                </div>
              </div>
              <CheckCircleIcon className="size-6 fill-blue-700 opacity-0 transition group-data-[checked]:opacity-100" />
            </Radio>
          ))}
            </div>
        </RadioGroup>
        </div>
        <div className='flex gap-2'>
            <div  onClick={backHandler} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
            </div>
            <div onClick={clickHandler} className='w-[73%] bg-fuchsia-700 py-3 font-bold text-white text-center'>Continue</div>
        </div>
    </div>
  </div>
  )
}

export default PlaceCategory