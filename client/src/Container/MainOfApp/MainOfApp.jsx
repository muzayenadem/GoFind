import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../../Components/Home/Home'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainOfApp() {
  return (
    <div>
        <Navbar/>
        {/* <Home/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainOfApp 