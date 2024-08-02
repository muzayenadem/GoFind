import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainOfApp() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainOfApp 