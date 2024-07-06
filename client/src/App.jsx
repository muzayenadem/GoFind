import { useState } from 'react'
import MainOfApp from './Container/MainOfApp/MainOfApp'
import Rout from './Router/Rout'
import axios from 'axios'
axios.defaults.withCredentials = true
function App() {
  return (
    <>
    <div className='w-full h-auto bg-white'>
      {/* <MainOfApp/> */}
      <Rout/>
    </div>
    </>
  )
}

export default App
