import React from 'react'
import { atm, mastercard, payooner, paypal, telebirr } from '../../../Data/Images'

function PaymentMethod({method, setMethod}) {
  return (
    <div className="flex gap-2 flex-col p-4 w-full bg-white shadow-md shadow-neutral-400 rounded-lg">
    <h3 className='text-2xl font-bold'>How would you like to pay?</h3>
    <div className="grid grid-cols-4 md:grid-cols-5 gap-5 w-[100%] p-4 px-8 border-b-[1px] border-b-neutral-300 py-5 ">
      <div onClick={()=> setMethod({...method, defaults:false, masterCard:true})} className="flex shadow-md shadow-neutral-500 w-16 h-12 md:w-24 md:h-20 xl:w-32 xl:h-24"><img className=' hover:opacity-' src={mastercard}/></div>
      <div onClick={()=> setMethod({...method, defaults:false,payoneer:true})} className="flex  shadow-md shadow-neutral-500 w-16 h-12 md:w-24 md:h-20 xl:w-32 xl:h-24"><img src={payooner}/></div>
      <div onClick={()=> setMethod({...method, defaults:false,paypal:true})} className="flex  shadow-md shadow-neutral-500 w-16 h-12 md:w-24 md:h-20 xl:w-32 xl:h-24"><img src={paypal}/></div>
      <div onClick={()=> setMethod({...method, defaults:false,telebirr:true})} className="flex shadow-md shadow-neutral-500 w-16 h-12 md:w-24 md:h-20 xl:w-32 xl:h-24"><img src={telebirr}/></div>
      <div onClick={()=> setMethod({...method, defaults:false,atm:true})} className="flex shadow-md shadow-neutral-500 w-16 h-12 md:w-24 md:h-20 xl:w-32 xl:h-24"><img src={atm}/></div>
    </div>
    <div className="flex gap-2 flex-col">
      <p className='text-neutral-500'>use an approperate method that is suit for you</p>
      <p className='text-neutral-500'>to know more about methods <strong>click</strong>here</p>
    </div>
  </div>
  )
}

export default PaymentMethod