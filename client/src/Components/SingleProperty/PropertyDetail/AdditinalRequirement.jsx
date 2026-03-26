import React from 'react'

function AdditinalRequirement({open}) {
  return (
    <dialog open={open} className='z-10 bg-white p-5 shadow-md shadow-neutral-400 fixed top-[400px] xl:top-[260px]  2xl:right-[-360px] xl:right-[-240px] lg:right-[-50px] '>
      <div className='w-56 h-56 bg-slate-100'></div>
    </dialog>
  )
}

export default AdditinalRequirement