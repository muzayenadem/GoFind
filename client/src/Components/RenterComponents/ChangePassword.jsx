import React from 'react'

function ChangePassword() {
  return (
    <div className="flex bg-white shadow-md shadow-slate-700 w-full h-[60%] md:w-[70%] py-6 flex-col gap-5">
    <h2 className='font-bold px-6 text-neutral-400'>Password settings</h2>
    <div className='flex justify-start flex-col md:flex-row gap-8 px-6 py-2'>
      <div className='flex w-[80%] md:w-[40%] flex-col gap-1 '>
        <p className='text-sm text-neutral-500'>Enter new Password</p>
        <input
       className='w-full h-10 border-b-[1px] border-b-slate-300 focus:outline-none px-2'
        placeholder='Password'
        type='password'
        />
      </div>
      <div className='flex w-[80%] md:w-[40%] flex-col gap-1'>
        <p className='text-sm text-neutral-500'>Repeat new Password</p>
        <input
        className='w-full h-10 border-b-[1px] border-b-slate-300 focus:outline-none px-2'
        placeholder='Repeat new password'
        type='password'
        />
      </div>
    </div>
    <div className='px-6'>
          <button className='w-52 rounded-md h-12 bg-fuchsia-800 text-center  py-2 text-white'>SAVE CHANGES</button>
        </div>   
    </div>
  )
}

export default ChangePassword