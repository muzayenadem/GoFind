import React from 'react'

function BookingProgress({method,setMethod}) {
    console.log({method})
    const {payoneer,paypal,masterCard,telebirr,atm,defaults} = method
  return (
    <div className="flex p-5">
    <div className={`flex w-1/3 h-1  ${defaults == false ? 'bg-green-600' :'bg-slate-200'}`}><span className='w-5 h-5 rounded-full bg-green-600 -mt-2'></span></div>
    <div className="flex w-1/3 h-1 bg-slate-200"><span className='w-5 h-5 rounded-full bg-slate-300 -mt-2'></span></div>
    <div className="flex w-1/3 h-1 bg-slate-200"><span className='w-5 h-5 rounded-full bg-slate-300 -mt-2'></span></div>
    <div className="flex w-1/3 h-1 justify-between bg-slate-200"><span className='w-5 h-5  rounded-full bg-slate-300 -mt-2'></span><span className='w-5 h-5  rounded-full bg-slate-300 -mt-2'></span></div>
  </div>
  )
}

export default BookingProgress