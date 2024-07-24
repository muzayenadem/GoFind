import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainOfApp() {
  return (
    <div>
        <div className=" fixed w-full top-0 left-0 z-10">
        <Navbar/>
        </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainOfApp 