import { useState } from 'react'
import MainOfApp from './Container/MainOfApp/MainOfApp'
import Rout from './Router/Rout'
function App() {
  const [count, setCount] = useState(0)

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
