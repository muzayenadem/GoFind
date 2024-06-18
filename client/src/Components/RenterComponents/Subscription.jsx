import React from 'react'

function Subscription() {
  return (
    <div className="flex bg-white shadow-md shadow-slate-700 w-full h-[60%] md:w-[70%] p-6 flex-col gap-5">
    {/* <h2 className='font-bold px-6 text-neutral-400'>Password settings</h2> */}
    <div className='md:w-[50%] md:h-[15vh] border-[1px] p-8 gap-4 flex flex-col border-neutral-300 rounded-md bg-neutral-100'>
      <h1>No active subscription</h1>
      <div className=''>
          <button className='w-40 rounded-md h-12 bg-fuchsia-800 text-center  py-2 text-white'>CHOICE PLAN</button>
        </div>   
    </div>
    <p className='text-md text-neutral-500'>To book a place in the Ethiopia, choice a subscription plan</p>
    <p className='text-md text-neutral-500'>Learn more about subscription plans</p>
    </div>
  )
}

export default Subscription