import React from 'react'

function Notification() {
  return (
    <div className="flex bg-white shadow-md shadow-slate-700 w-full h-[60%] md:w-[70%] py-6 flex-col gap-5">
    <h2 className='font-bold px-6 text-neutral-400'>Notification settings</h2>
    <div className='gap-2 flex px-6'>
      <input type='checkbox' id='checkbox'/>
      <label htmlFor='checkbox'>Enable SMS notifications</label>
    </div>
    <div className='px-6'>
          <button className='w-52 rounded-md h-12 bg-fuchsia-800 text-center  py-2 text-white'>SAVE CHANGES</button>
        </div>   
    </div>
  )
}

export default Notification