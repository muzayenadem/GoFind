import React from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { MdApartment } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { setCategory,setQuantity,notTheSamePlace,setType ,setSubCategory,setMultiple} from '../../../../../controller/AddProperty/propertyType';
import { useSelector,useDispatch } from 'react-redux'



function MultipleOrOne({page,next,previous}) {
    const propertyType = useSelector(state => state.propertyType.subCategory)
    const [value,setValue] = useState(1)
    const plans = [
        { name: `One ${propertyType} with one or multiple rooms that guests can book`,trick:propertyType+'1', icon:<MdHomeWork/>,  },
        { name: `Multiple ${propertyType} with one or multiple rooms that guests can book`,trick:propertyType+'2', icon:<MdApartment/>, },
      ]
    const [selected, setSelected] = useState(plans[0])

    const dispatch = useDispatch()

    // const clickHndler = ()=>{
    //     if(selected.trick == plans[1].trick){
    //         dispatch(setMultiple(true))
    //         dispatch(setQuantity(value))
    //     }
        
    //   //  dispatch(setType(selected.name))
    //     dispatch(next())
    // }

    const clickHndler = ()=>{
      if(selected.trick == plans[1].trick){
        dispatch(setMultiple(true))
      }

      dispatch(setQuantity(value))
   
      if(selected.trick == plans[0].trick){
        dispatch(setMultiple(false))
      }

      dispatch(next())
  }
    console.log({dat:propertyType})
     console.log({selected}) 
  return (
    <section className='  min-h-screen w-[96%] ipad:ml-[13%] ipad:w-[64%] tablet:w-[85%] tablet:ml-[14%] md:w-[75%] md:ml-[7%] lg:w-[100%] xl:w-[125%] 2xl:w-[143%] lg:ml-[20%] xl:ml-[30%] 2xl:ml-[40%] ml-[2%] py-20 justify-center items-center'>
        <div className='  gap-6 flex flex-col  '>
        <div className="flex flex-col gap-5 bg-white justify-center shadow-md shadow-neutral-500 items-center py-12 px-8 ">
            <h1 className='head1 text-center'>How many {propertyType}  are you listing?</h1>

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
                <div className="text-sm/6 flex gap-6 py-10">
                <span className='text-5xl text-fuchsia-700'>{plan.icon}</span>
                  <p className="font-semibold text-center ">{plan.name}</p>
                </div>
                <CheckCircleIcon className="size-10 ipad:size-12  ipad:ml-10  md:size-6 -mt-10 -mr-5 md:mt-0 md:mr-0   fill-blue-700 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>

        { 
         selected.trick == plans[1].trick &&
             <div className='flex flex-col gap-4 mt-6'>
             <h3>Number of properties</h3>
             <input type='number' onChange={(e)=>setValue(e.target.value)} className=' px-6 w-36 border-[1px] border-neutral-400 h-10 focus:outline-none'/>
         </div>
        }
            </div>
            </div>
            </div>
            <div className='flex gap-2 '>
            <div  onClick={()=> dispatch(previous())} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
            </div>
            <div onClick={clickHndler} className='w-[73%] bg-fuchsia-700 py-3 font-bold text-white text-center'>Continue</div>
        </div>
        </div>
     
        </section>
        
  )
}

export default MultipleOrOne

 