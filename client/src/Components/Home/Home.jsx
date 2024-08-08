import React from 'react'
import RentalHousesCard from './RentalHousesCard'
import HomeTop from './HomeTop'
import Question from './Question'
import Feutures from './Feutures'
import Category from './Category'
function Home() {
  return (
    <section className='pb-10'>
     <div className='grid grid-cols-1 m-0'>
      <div>
      <div className=' container mx-auto' style={{position:'sticky',top:'-61px',left:'0px',width:'100%',zIndex:1}}>
          <HomeTop/>
      </div>
      <div>
          <RentalHousesCard/>
          <Category/>
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