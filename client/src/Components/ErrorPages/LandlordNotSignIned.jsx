import React, { useEffect, useState } from 'react'

function LandlordNotSignIned() {
    const [space,setSpace] = useState(<div></div>)
    useEffect(()=>{
        setTimeout(() => {
            setSpace(
                <div className='container m-auto mx-auto py-20 px-6'>
                <div className='border-[1px] border-neutral-600 px-5 py-12'>
                    <h1 className='text-4xl text-neutral-600 text-center '>404</h1>
                    <p className='text-xl text-center'>you have to login to access this page</p>
                </div>
            </div>
            )
        }, 3000);
    },[])
  return (
   space
  )
}

export default LandlordNotSignIned
