import React from 'react'

function DistanceFilter({setMeter,meter}) {
    const kilometers = [1,5,10,20,50,100,300,700,1000,1500]
  return (
    <div onMouseLeave={()=>setMeter(false)} className={`w-40 h-auto  bg-neutral-700 shadow-md shadow-black  ${!meter && 'hidden'} rounded-md mt-4 z-10 absolute `}>
    <div className='w-5 h-5 rotate-45 -mt-2  bg-neutral-700 ml-[10%]'></div>
    <div>
      {
        kilometers.map((single,i) =>{
          return(
            <div key={i} className='w-[98%] h-8 bg-slate-600 m-1 text-white font-bold px-10 py-1 hover:bg-pink-700'>
              {single}
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default DistanceFilter