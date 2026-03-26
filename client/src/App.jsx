import { useState } from 'react'
import Rout from './Router/Rout'
import axios from 'axios'
axios.defaults.withCredentials = true
function App() {
  return (
    <>
    <div className='w-full min-h-screen overflow-clip h-auto bg-white'>  
      <Rout/>
    </div>
    </>
  )
}

export default App
