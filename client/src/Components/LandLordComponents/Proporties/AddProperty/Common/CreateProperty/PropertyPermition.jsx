import { Switch } from '@headlessui/react'
import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { setChildren, setDssIncome, setFamily, setOnlyStudent, setPets, setSmoking, setStudents } from '../../../../../../controller/AddProperty/propertyType'
import PropertyEmenities from './PropertyEmenities'
function PropertyPermition({page,next,previous}) {
    const propertyType = useSelector(state => state.propertyType.subCategory)
    const smokingPermision =  useSelector(state => state.propertyType.permissions.smoking)
    const onlyStudentPermision =  useSelector(state => state.propertyType.permissions.onlyStudent)
    const studentPermision =  useSelector(state => state.propertyType.permissions.student)
    const petsPermision =  useSelector(state => state.propertyType.permissions.pets)
    const childrenPermision =  useSelector(state => state.propertyType.permissions.children)
    const dssIncomePermision =  useSelector(state => state.propertyType.permissions.dssIncome)
    const familyPermision =  useSelector(state => state.propertyType.permissions.family)
    console.log({smokingPermision})
    const clickHndler = () =>{
        dispatch(next())
    }   
    const dispatch = useDispatch()
    const permissions =[
        {title:'Students Allowed',
            open: <Switch
            checked={studentPermision}
            onChange={()=> dispatch(setStudents())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        },
        {title:'Smokers Allowed',
            open: <Switch
            checked={smokingPermision}
            onChange={()=> dispatch(setSmoking())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        },
        {title:'Pets Allowed',
            open: <Switch
            checked={petsPermision}
            onChange={()=> dispatch(setPets())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        },
        {title:'Students Only',
            open: <Switch
            checked={onlyStudentPermision}
            onChange={()=> dispatch(setOnlyStudent())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        },
        {title:'DSS Income Accepted',
          open: <Switch
            checked={dssIncomePermision}
            onChange={()=> dispatch(setDssIncome())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch> 
        },
        {title:'Children Allowed',
           open: <Switch
            checked={childrenPermision}
            onChange={()=> dispatch(setChildren())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        },
        {title:'Families Allowed',
           open: <Switch
            checked={familyPermision}
            onChange={()=> dispatch(setFamily())}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        },
    ]
    
  return (
    <section className='   w-[96%] md:w-[78%] md:ml-[7%] lg:w-[95%]min-h-screen xl:w-[125%] 2xl:w-[143%] lg:ml-[15%] xl:ml-[25%] 2xl:ml-[30%] ml-[2%] py-20 justify-center items-center'>
        <div className='  gap-6 flex flex-col md:w-[90%] '>
            <h1 className='head1 text-center'>Fill all steps carefully for your {propertyType}</h1>
            <div className='bg-white py-10 px-6 gap-3 rounded-md shadow-md shadow-neutral-700 flex flex-col '>
                <h1 className='title2 '>Permitions</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b-[1px] border-b-neutral-300 py-10">
              {
                    permissions.map(({title,open},i) =>{
                        return (
                            <div key={i} className="flex justify-between px-5">
                            <p>{title}</p>
                            <span>{open}</span>
                          </div>
                        )
                    })
                }
              </div>
              <PropertyEmenities/>
            </div>


        <div className='flex gap-2 '>
            <div  onClick={()=> dispatch(previous())} className='w-[25%] flex justify-center items-center py-3 bg-white border-[1px] border-fuchsia-200  '>
                <span className='font-bold text-2xl text-fuchsia-700 '><FaChevronLeft/></span>
            </div>
            <button  onClick={clickHndler} className={`w-[73%]  bg-fuchsia-700  py-3 font-bold text-white text-center`}>Continue</button>
        </div>
        </div>
    </section>
  )
}

export default PropertyPermition

