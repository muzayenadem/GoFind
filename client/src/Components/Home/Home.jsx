import React from 'react'
import { img1, img3 } from '../Data/Images'
import RentalHousesCard from './RentalHousesCard'
import HomeTop from './HomeTop'
import { Outlet } from 'react-router-dom'
import Crousel from './Crousel'
import { useSelector } from 'react-redux'
import Question from './Question'
import Feutures from './Feutures'
function Home() {
  return (
    <section className='pb-10'>
     <div className='grid grid-cols-1 m-0'>
      <div>
      <div  style={{position:'sticky',top:'-61px',left:'0px',width:'100%',zIndex:1}}>
          <HomeTop/>
      </div>
      <div>
          <RentalHousesCard/>
          <Question/>
          <Feutures/>
          {/* <Crousel/> */}
      </div>
      </div>
     </div>
    </section>
  )
}

export default Home