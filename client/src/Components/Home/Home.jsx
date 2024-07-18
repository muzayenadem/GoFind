import React from 'react'
import { img1, img3 } from '../Data/Images'
import RentalHousesCard from './RentalHousesCard'
import HomeTop from './HomeTop'
import { Outlet } from 'react-router-dom'
import Crousel from './Crousel'

function Home() {
  return (
    <section className='pb-10'>
     <div className='grid grid-cols-1 m-0'>
      <div>
      <div>
        <HomeTop/>
      </div>
            <div>
                <RentalHousesCard/>
                {/* <Crousel/> */}
            </div>
      </div>
     </div>
    </section>
  )
}

export default Home