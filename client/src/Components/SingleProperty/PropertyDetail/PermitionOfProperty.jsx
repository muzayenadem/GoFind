import React from 'react'
import { MdFamilyRestroom, MdPets } from 'react-icons/md'
import { LiaSmokingBanSolid } from 'react-icons/lia'
import { TbSmokingNo } from 'react-icons/tb'
import { PiStackFill, PiStudentFill } from 'react-icons/pi'
import { FaChildren } from 'react-icons/fa6'

function PermitionOfProperty({permissions}) {
  return (
    <div className=' container mx-auto  px-2 border-b-[1px] border-b-neutral-200 py-6'>
        <div className="flex flex-col gap-6 md:flex-row justify-start py-5">
        <div className="md:w-[20%]">
            <h3 className='font-serif'>Permissions</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 px-6 gap-6 md:w-[65%]">
                <div className='flex gap-10'>
                    <div className="flex gap-2">
                    <span><MdPets/></span>
                    <p className='font-serif'>Pets</p>
                    </div>
                    {permissions.pets == true ? <p className='font-serif font-bold'>Yes</p> : <p className='font-serif font-bold'>No</p>}
                </div>
                <div className='flex gap-10'>
                    <div className="flex gap-2">
                    <span><FaChildren/></span>
                    <p className='font-serif'>Student</p>
                    </div>
                    {permissions.student == true ? <p className='font-serif font-bold'>Yes</p> : <p className='font-serif font-bold'>No</p>}
                </div>
                <div className='flex gap-10'>
                    <div className="flex gap-2">
                    <span><PiStudentFill/></span>
                    <p className='font-serif'>Student only</p>
                    </div>
                    {permissions.onlyStudent == true ? <p className='font-serif font-bold'>Yes</p> : <p className='font-serif font-bold'>No</p>}
                </div>
                <div className='flex gap-10'>
                    <div className="flex gap-2">
                    <span className='text-xl font-bold'><TbSmokingNo/></span>
                    <p className='font-serif'>Smoking</p>
                    </div>
                    {permissions.smoking == true ? <p className='font-serif font-bold'>Yes</p> : <p className='font-serif font-bold'>No</p>}
                </div>
                <div className='flex gap-10'>
                    <div className="flex gap-2">
                    <span><MdFamilyRestroom/></span>
                    <p className='font-serif'>Family</p>
                    </div>
                    {permissions.family == true ? <p className='font-serif font-bold'>Yes</p> : <p className='font-serif font-bold'>No</p>}
                </div>
                <div className='flex gap-10'>
                    <div className="flex gap-2">
                    <span><MdPets/></span>
                    <p className='font-serif'>Dss Income</p>
                    </div>
                    {permissions.dssIncome == true ? <p className='font-serif font-bold'>Yes</p> : <p className='font-serif font-bold'>No</p>}
                </div>
        </div>
        </div>
    </div>
  )
}

export default PermitionOfProperty