import React, { useState } from 'react'

//icons

import Sellection from '../../Components/RenterComponents/Sellection';
import { Outlet } from 'react-router-dom';
import RenterButtons from '../../Components/RenterComponents/RenterButtons';

function RenterDashbord() {
  return (
    <div className=' py-10 m-0 bg-stone-400'>
        <div className="md:containe md:mx-30" >

            <Sellection/>
        <div className="flex justify-start flex-wrap w-[98%] ml-[1%] md:w-[90%] md:ml-[10%] gap-6">
            <RenterButtons/>
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default RenterDashbord
